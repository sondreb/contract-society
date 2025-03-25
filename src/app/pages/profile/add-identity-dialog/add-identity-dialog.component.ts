import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Identity, IdentityType } from '../../../models/identity.model';

@Component({
  selector: 'app-add-identity-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './add-identity-dialog.component.html',
  styleUrls: ['./add-identity-dialog.component.scss']
})
export class AddIdentityDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AddIdentityDialogComponent>);
  
  identityForm: FormGroup = this.fb.group({
    type: ['did:stellar', Validators.required],
    value: ['', Validators.required],
    label: ['']
  });

  identityTypes: { value: IdentityType, label: string }[] = [
    { value: 'did:stellar', label: 'Stellar DID' },
    { value: 'did:is', label: 'Identity Server' },
    { value: 'did:key', label: 'Cryptographic Key' }
  ];

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.identityForm.valid) {
      this.dialogRef.close(this.identityForm.value);
    } else {
      this.identityForm.markAllAsTouched();
    }
  }
}
