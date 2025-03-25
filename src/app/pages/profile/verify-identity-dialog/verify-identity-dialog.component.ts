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
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Identity, VerificationService } from '../../../models/identity.model';
import { MatIconModule } from '@angular/material/icon';

interface DialogData {
  identity: Identity;
  verificationServices: VerificationService[];
}

interface FreeIdApplication {
  identityId: string;
  identityValue: string;
  name: string;
  sex: 'Male' | 'Female';
  dateOfBirth: Date;
  placeOfBirth: string;
  photoUrl?: string;
  covenantAccepted: boolean;
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
    HttpClientModule
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
  private http = inject(HttpClient);
  
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
    covenantAccepted: [false, Validators.requiredTrue]
  });

  verifying = signal(false);
  verificationStep = signal(1);
  qrCodeUrl = signal('');
  photoPreviewUrl = signal('');
  submissionError = signal<string | null>(null);
  submissionSuccess = signal(false);

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
        identityValue: this.identity.value,
        name: formValue.name,
        sex: formValue.sex,
        dateOfBirth: formValue.dateOfBirth,
        placeOfBirth: formValue.placeOfBirth,
        photoUrl: this.photoPreviewUrl(),
        covenantAccepted: formValue.covenantAccepted
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

  submitToApi(): void {
    if (this.freeIdForm.invalid) {
      this.freeIdForm.markAllAsTouched();
      return;
    }

    this.verifying.set(true);
    this.submissionError.set(null);

    const formValue = this.freeIdForm.value;
    const applicationData: FreeIdApplication = {
      identityId: this.identity.id,
      identityValue: this.identity.value,
      name: formValue.name,
      sex: formValue.sex,
      dateOfBirth: formValue.dateOfBirth,
      placeOfBirth: formValue.placeOfBirth,
      photoUrl: this.photoPreviewUrl(),
      covenantAccepted: formValue.covenantAccepted
    };

    // API endpoint would be replaced with actual endpoint in production
    this.http.post('https://api.freeid.network/applications', applicationData)
      .subscribe({
        next: (response) => {
          this.submissionSuccess.set(true);
          // After successful submission, close after delay
          setTimeout(() => {
            this.dialogRef.close({
              identityId: this.identity.id,
              serviceId: this.verificationForm.get('serviceId')?.value,
              applicationSubmitted: true
            });
          }, 3000);
        },
        error: (error) => {
          console.error('Error submitting application:', error);
          this.submissionError.set('Failed to submit application. Please try again or save locally.');
          this.verifying.set(false);
        }
      });
  }
}
