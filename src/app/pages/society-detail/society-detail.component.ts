import { Component, inject, OnInit, signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocietyService } from '../../services/society.service';
import { Society, IdentityVerificationOption } from '../../models/society.model';

@Component({
  selector: 'app-society-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule
  ],
  templateUrl: './society-detail.component.html',
  styleUrl: './society-detail.component.scss'
})
export class SocietyDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private societyService = inject(SocietyService);
  private dialog = inject(MatDialog);
  
  society = signal<Society | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  
  // Joining process
  joiningActive = this.societyService.getJoiningProcessActive();
  verificationOptions = this.societyService.getVerificationOptions();
  selectedVerificationMethod = this.societyService.getSelectedVerificationMethod();
  
  // Processing state
  processingVerification = signal(false);
  joinSuccess = signal(false);
  
  // Current step in joining process
  currentStep = signal(0);
  
  // Computed value for whether user can proceed to verification
  canProceedToVerification = computed(() => {
    return this.selectedVerificationMethod() !== null;
  });
  
  constructor() {
    // Reset joining state when component is created
    this.societyService.cancelJoiningProcess();
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const societyId = params.get('id');
      
      if (societyId) {
        const society = this.societyService.getSocietyById(societyId);
        
        if (society) {
          this.society.set(society);
          this.societyService.setSelectedSociety(society);
        } else {
          this.error.set('Society not found');
        }
      }
      
      this.loading.set(false);
    });
  }
  
  startJoining(): void {
    this.societyService.startJoiningProcess();
    this.currentStep.set(0);
  }
  
  cancelJoining(): void {
    this.societyService.cancelJoiningProcess();
  }
  
  selectVerificationMethod(methodId: string): void {
    this.societyService.selectVerificationMethod(methodId);
  }
  
  proceedToVerification(): void {
    if (this.selectedVerificationMethod()) {
      this.currentStep.set(1);
    }
  }
  
  async completeVerification(): Promise<void> {
    this.processingVerification.set(true);
    
    try {
      const success = await this.societyService.completeJoiningProcess();
      if (success) {
        this.joinSuccess.set(true);
      }
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      this.processingVerification.set(false);
    }
  }
  
  returnToSocieties(): void {
    this.router.navigate(['/societies']);
  }
  
  formatDate(date: Date | undefined): string {
    if (!date) return 'Unknown';
    return new Date(date).toLocaleDateString();
  }
}
