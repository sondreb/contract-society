import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

import { IdentityService } from '../../services/identity.service';
import { Identity, IdentityType, VerificationService } from '../../models/identity.model';
import { AddIdentityDialogComponent } from './add-identity-dialog/add-identity-dialog.component';
import { VerifyIdentityDialogComponent } from './verify-identity-dialog/verify-identity-dialog.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDividerModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private identityService = inject(IdentityService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  // Identity related signals
  identities = this.identityService.getAllIdentities;
  verifiedIdentities = this.identityService.getVerifiedIdentities;
  unverifiedIdentities = this.identityService.getUnverifiedIdentities;
  verificationServices = this.identityService.getVerificationServices;

  // UI state
  isLoading = signal(false);
  selectedTab = signal(0);

  constructor() {}

  openAddIdentityDialog(): void {
    const dialogRef = this.dialog.open(AddIdentityDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(async (result: Partial<Identity> | undefined) => {
      if (result) {
        this.isLoading.set(true);
        try {
          await this.identityService.addIdentity(result as Omit<Identity, 'id' | 'isVerified' | 'createdAt'>);
          this.snackBar.open('Identity added successfully!', 'Close', { duration: 3000 });
        } catch (error) {
          this.snackBar.open('Failed to add identity', 'Close', { duration: 3000 });
          console.error('Error adding identity:', error);
        } finally {
          this.isLoading.set(false);
        }
      }
    });
  }

  openVerifyIdentityDialog(identity: Identity): void {
    // Get compatible verification services
    const compatibleServices = this.identityService.getCompatibleVerificationServices(identity.type);
    
    const dialogRef = this.dialog.open(VerifyIdentityDialogComponent, {
      width: '500px',
      data: {
        identity,
        verificationServices: compatibleServices
      }
    });

    dialogRef.afterClosed().subscribe(async (result: { identityId: string, serviceId: string } | undefined) => {
      if (result) {
        this.isLoading.set(true);
        try {
          await this.identityService.verifyIdentity(result.identityId, result.serviceId);
          this.snackBar.open('Identity verified successfully!', 'Close', { duration: 3000 });
        } catch (error) {
          this.snackBar.open('Failed to verify identity', 'Close', { duration: 3000 });
          console.error('Error verifying identity:', error);
        } finally {
          this.isLoading.set(false);
        }
      }
    });
  }

  async removeIdentity(identity: Identity): Promise<void> {
    if (confirm(`Are you sure you want to remove the identity: ${identity.label || identity.value}?`)) {
      this.isLoading.set(true);
      try {
        await this.identityService.removeIdentity(identity.id);
        this.snackBar.open('Identity removed successfully!', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Failed to remove identity', 'Close', { duration: 3000 });
        console.error('Error removing identity:', error);
      } finally {
        this.isLoading.set(false);
      }
    }
  }

  getIdentityTypeLabel(type: IdentityType): string {
    switch (type) {
      case 'did:stellar': return 'Stellar DID';
      case 'did:is': return 'Identity Server';
      case 'did:key': return 'Cryptographic Key';
      default: return type;
    }
  }

  getVerificationServiceById(id: string): VerificationService | undefined {
    return this.verificationServices().find(service => service.id === id);
  }

  formatDate(date: Date | undefined): string {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString();
  }
}
