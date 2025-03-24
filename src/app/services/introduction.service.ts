import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {
  private readonly STORAGE_KEY = 'introductionCompleted';
  
  // Signal to track if the introduction has been completed
  public introductionCompleted = signal<boolean>(this.hasCompletedIntroduction());
  
  // Signal for the current step in the introduction
  public currentStep = signal<number>(0);
  
  // Total number of steps in the introduction
  public readonly totalSteps = 4;
  
  constructor() {}
  
  /**
   * Check if the user has completed the introduction
   */
  public hasCompletedIntroduction(): boolean {
    const completed = localStorage.getItem(this.STORAGE_KEY);
    return completed === 'true';
  }
  
  /**
   * Mark the introduction as completed
   */
  public completeIntroduction(): void {
    localStorage.setItem(this.STORAGE_KEY, 'true');
    this.introductionCompleted.set(true);
  }
  
  /**
   * Reset the introduction state (for testing purposes)
   */
  public resetIntroduction(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.introductionCompleted.set(false);
    this.currentStep.set(0);
  }
  
  /**
   * Go to the next step
   */
  public nextStep(): void {
    if (this.currentStep() < this.totalSteps - 1) {
      this.currentStep.update(step => step + 1);
    } else {
      this.completeIntroduction();
    }
  }
  
  /**
   * Go to the previous step
   */
  public previousStep(): void {
    if (this.currentStep() > 0) {
      this.currentStep.update(step => step - 1);
    }
  }
  
  /**
   * Go to a specific step
   */
  public goToStep(step: number): void {
    if (step >= 0 && step < this.totalSteps) {
      this.currentStep.set(step);
    }
  }
  
  /**
   * Prepare for showing the introduction again
   * Resets to the first step without marking as incomplete
   */
  public reopenIntroduction(): void {
    // Just reset to the first step without changing completion status
    this.currentStep.set(0);
  }
}
