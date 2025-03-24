import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { IntroductionService } from './introduction.service';

/**
 * Service to manage overlay states across the application
 * This handles which overlays are visible and their ordering
 */
@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private introService = inject(IntroductionService);
  
  // Signal to track if introduction is manually shown
  private manuallyShowIntroduction = signal<boolean>(false);
  
  // Computed signal for whether the introduction should be shown
  public showIntroduction = computed(() => {
    return !this.introService.introductionCompleted() || this.manuallyShowIntroduction();
  });
  
  // Additional overlay signals can be added here as needed
  
  // Computed signal to determine if any overlay is currently active
  public hasActiveOverlay = computed(() => {
    return this.showIntroduction();
    // Add other overlay conditions if they're added in the future
  });

  constructor() {
    // Toggle body class when overlay state changes
    effect(() => {
      if (this.hasActiveOverlay()) {
        this.disableScrolling();
      } else {
        this.enableScrolling();
      }
    });
  }

  /**
   * Disable scrolling on the body when overlay is active
   */
  private disableScrolling(): void {
    document.body.classList.add('overlay-active');
  }

  /**
   * Enable scrolling on the body when no overlays are active
   */
  private enableScrolling(): void {
    document.body.classList.remove('overlay-active');
  }

  /**
   * Manually show the introduction overlay
   */
  public openIntroduction(): void {
    this.introService.reopenIntroduction();
    this.manuallyShowIntroduction.set(true);
  }

  /**
   * Hide the introduction overlay 
   * (called when the user completes or skips the introduction)
   */
  public closeIntroduction(): void {
    this.manuallyShowIntroduction.set(false);
  }
}
