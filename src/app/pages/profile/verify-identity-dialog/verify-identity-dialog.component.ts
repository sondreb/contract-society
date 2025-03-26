import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { bytesToHex, hexToBytes, bytesToUtf8, utf8ToBytes } from '@noble/ciphers/utils';
import { randomBytes } from '@noble/ciphers/webcrypto';
import { secp256k1 } from '@noble/curves/secp256k1';
import { xchacha20poly1305 } from '@noble/ciphers/chacha';
import { Identity, VerificationService } from '../../../models/identity.model';
import { Hex, PrivKey } from '@noble/curves/abstract/utils';

interface DialogData {
  identity: Identity;
  verificationServices: VerificationService[];
}

interface FreeIdApplication {
  identityId?: string;
  identifier: string;
  name: string;
  sex: 'Male' | 'Female';
  dateOfBirth: Date;
  placeOfBirth: string;
  covenantAccepted: boolean;
  email: string; // Add email field
  photo?: string;
}

@Component({
  selector: 'app-verify-identity-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './verify-identity-dialog.component.html',
  styleUrls: ['./verify-identity-dialog.component.scss']
})
export class VerifyIdentityDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<VerifyIdentityDialogComponent>);
  private data: DialogData = inject(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);
  
  identity = this.data.identity;
  verificationServices = this.data.verificationServices;
  
  verificationForm: FormGroup = this.fb.group({
    serviceId: ['', Validators.required]
  });

  freeIdForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    sex: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    placeOfBirth: ['', Validators.required],
    photo: [''],
    email: ['', [Validators.required, Validators.email]], // Add email field with validators
    covenantAccepted: [false, Validators.requiredTrue]
  });

  verifying = signal(false);
  verificationStep = signal(1);
  qrCodeUrl = signal('');
  photoPreviewUrl = signal('');
  submissionError = signal<string | null>(null);
  submissionSuccess = signal(false);
  applicationId = signal<string>(''); // Add signal to store the application ID
  isRetrying = signal(false); // Add signal to track if we're retrying a failed submission
  photoError = signal<string | null>(null); // Add signal for photo error message
  maxPhotoSizeMB = 5; // Maximum photo size in MB

  // Liberstad FreeID Office public key
  // TODO: Replace with actual public key of Liberstad FreeID Office in Hex format
  freeIdPublicKey = '032221067cf3da57c8cc4720a6ebe4a4e27dbba967885a1c070b6332389d4dc0e5';

  close(): void {
    this.dialogRef.close();
  }

  selectService(serviceId: string): void {
    this.verificationForm.get('serviceId')?.setValue(serviceId);
  }

  nextStep(): void {
    if (this.verificationStep() === 1 && this.verificationForm.valid) {
      this.verificationStep.set(2);
      
      // Simulate generating a QR code or verification link
      const serviceId = this.verificationForm.get('serviceId')?.value;
      const service = this.verificationServices.find(s => s.id === serviceId);
      
      if (serviceId === 'mtl-id') {
        this.qrCodeUrl.set('assets/mock-qr-code.png');
      } else {
        this.qrCodeUrl.set(''); // No QR code for other services
      }
    }
  }

  previousStep(): void {
    if (this.verificationStep() === 2) {
      this.verificationStep.set(1);
    }
  }

  verify(): void {
    this.verifying.set(true);
    
    // This would normally send the verification request to the backend
    // For now we'll just close the dialog with the result
    setTimeout(() => {
      this.dialogRef.close({
        identityId: this.identity.id,
        serviceId: this.verificationForm.get('serviceId')?.value
      });
    }, 2000);
  }

  getServiceById(id: string): VerificationService | undefined {
    return this.verificationServices.find(service => service.id === id);
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Validate file size (5MB max)
      const maxSizeBytes = this.maxPhotoSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        this.photoError.set(`Photo is too large. Maximum size is ${this.maxPhotoSizeMB}MB.`);
        this.photoPreviewUrl.set(''); // Clear any previous preview
        input.value = ''; // Reset the input
        return;
      }
      
      this.photoError.set(null); // Clear previous error
      
      // Preview the selected photo
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreviewUrl.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  downloadAsJson(): void {
    if (this.freeIdForm.invalid) {
      this.freeIdForm.markAllAsTouched();
      return;
    }

    this.verifying.set(true);
    this.submissionError.set(null);

    try {
      const formValue = this.freeIdForm.value;
      const applicationData: FreeIdApplication = {
        identityId: this.identity.id,
        identifier: this.identity.value,
        name: formValue.name,
        sex: formValue.sex,
        dateOfBirth: formValue.dateOfBirth,
        placeOfBirth: formValue.placeOfBirth,
        email: formValue.email,
        covenantAccepted: formValue.covenantAccepted,
        photo: this.photoPreviewUrl()
      };
      
      // Create a JSON blob and download it
      const jsonBlob = new Blob([JSON.stringify(applicationData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(jsonBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `freeid-application-${Date.now()}.json`;
      link.click();
      
      URL.revokeObjectURL(url);
      
      // Show a temporary success notification instead of closing the dialog
      this.submissionError.set('JSON file downloaded successfully! You can continue your application or submit it online.');
      
      // Clear the message after a delay
      setTimeout(() => {
        if (this.submissionError() === 'JSON file downloaded successfully! You can continue your application or submit it online.') {
          this.submissionError.set(null);
        }
      }, 5000);
    } catch (error) {
      console.error('Error creating application file:', error);
      this.submissionError.set('Failed to generate application file. Please try again.');
    } finally {
      this.verifying.set(false);
    }
  }

  private async decryptWithPrivateKey(privateKey: PrivKey, encryptedData: any) {
    const { ephemeralPublicKey, nonce, ciphertext } = encryptedData;
  
    // Compute shared secret using ECDH
    const sharedSecret = secp256k1.getSharedSecret(privateKey, ephemeralPublicKey);
  
    // Use a key derivation step to create a 256-bit key for XChaCha20
    const encryptionKey = sharedSecret.slice(0, 32); // First 32 bytes of the shared secret
  
    // Decrypt the ciphertext with XChaCha20-Poly1305
    const cipher = xchacha20poly1305(encryptionKey, nonce);
    const plaintext = cipher.decrypt(ciphertext);
  
    return new TextDecoder().decode(plaintext);
  }

  private async encryptWithPublicKey(publicKey: Hex, plaintext: string) {
    // Generate a random ephemeral private key
    const ephemeralPrivateKey = secp256k1.utils.randomPrivateKey();
    
    // Derive the ephemeral public key
    const ephemeralPublicKey = secp256k1.getPublicKey(ephemeralPrivateKey);
  
    // Compute shared secret using ECDH
    const sharedSecret = secp256k1.getSharedSecret(ephemeralPrivateKey, publicKey);
  
    // Use a key derivation step to create a 256-bit key for XChaCha20
    const encryptionKey = sharedSecret.slice(0, 32); // First 32 bytes of the shared secret
  
    // Create a random 192-bit nonce (24 bytes)
    const nonce = randomBytes(24);
  
    // Encrypt the plaintext with XChaCha20-Poly1305
    const cipher = xchacha20poly1305(encryptionKey, nonce);
    const ciphertext = cipher.encrypt(new TextEncoder().encode(plaintext));
    
    return {
      ephemeralPublicKey: bytesToHex(ephemeralPublicKey), // Include ephemeral public key for decryption
      nonce: bytesToHex(nonce), // Include nonce for decryption
      ciphertext: bytesToHex(ciphertext), // Include ciphertext for decryption
      publicKey
    };
  }

  /**
   * Encrypts data with the FreeID public key using AES-GCM algorithm
   * This is a simplified example. In a real implementation, we would use proper asymmetric encryption.
   */
  private async encryptData(data: any): Promise<string> {
    try {
      // Convert the data to a JSON string
      const jsonString = JSON.stringify(data);

      const encryptedPackage = await this.encryptWithPublicKey(this.freeIdPublicKey, jsonString);

      return JSON.stringify(encryptedPackage);
    } catch (error) {
      console.error('Encryption error:', error);
      throw new Error('Failed to encrypt data');
    }
  }

  async submitToApi(): Promise<void> {
    if (this.freeIdForm.invalid) {
      this.freeIdForm.markAllAsTouched();
      return;
    }

    this.verifying.set(true);
    this.submissionError.set(null);
    this.isRetrying.set(false); // Reset retry flag

    const formValue = this.freeIdForm.value;
    const applicationData: FreeIdApplication = {
      identifier: this.identity.value,
      name: formValue.name,
      sex: formValue.sex,
      dateOfBirth: formValue.dateOfBirth,
      placeOfBirth: formValue.placeOfBirth,
      email: formValue.email, // Include email in application data
      covenantAccepted: formValue.covenantAccepted,
      photo: this.photoPreviewUrl()
    };

    try {
      // Encrypt the application data
      const encryptedData = await this.encryptData(applicationData);

      // Use native fetch API instead of HttpClient
      const response = await fetch('https://freeid.azurewebsites.net/api/persist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: encryptedData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      // Store the application ID from the response
      if (data && data.id) {
        this.applicationId.set(data.id);
      }
      
      this.submissionSuccess.set(true);
      // Remove automatic dialog closing
    } catch (error) {
      console.error('Error submitting application:', error);
      this.submissionError.set('Failed to submit application. Please try again or save locally.');
      this.isRetrying.set(true); // Enable retry mode
    } finally {
      this.verifying.set(false);
    }
  }
  
  // Method to complete the verification process and close the dialog
  completeVerification(): void {
    this.dialogRef.close({
      identityId: this.identity.id,
      serviceId: this.verificationForm.get('serviceId')?.value,
      applicationSubmitted: this.submissionSuccess(),
      applicationId: this.applicationId()
    });
  }
  
  // Add method to copy application ID to clipboard
  copyApplicationId(): void {
    if (!this.applicationId()) return;
    
    navigator.clipboard.writeText(this.applicationId())
      .then(() => {
        // Show a toast notification instead of updating submissionError
        this.snackBar.open('Application ID copied to clipboard!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      })
      .catch(err => {
        console.error('Failed to copy application ID:', err);
        this.snackBar.open('Failed to copy application ID. Please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      });
  }
}
