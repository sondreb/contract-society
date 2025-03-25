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

import { Identity, VerificationService } from '../../../models/identity.model';
import { MatIconModule } from '@angular/material/icon';

interface DialogData {
  identity: Identity;
  verificationServices: VerificationService[];
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
    MatIconModule
  ],
  templateUrl: './verify-identity-dialog.component.html',
  styleUrls: ['./verify-identity-dialog.component.scss']
})
export class VerifyIdentityDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<VerifyIdentityDialogComponent>);
  private data: DialogData = inject(MAT_DIALOG_DATA);
  
  identity = this.data.identity;
  verificationServices = this.data.verificationServices;
  
  verificationForm: FormGroup = this.fb.group({
    serviceId: ['', Validators.required]
  });

  verifying = signal(false);
  verificationStep = signal(1);
  qrCodeUrl = signal('');

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
}
