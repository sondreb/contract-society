import { Injectable, signal, computed, inject } from '@angular/core';
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
  
  // Computed signal for whether the introduction should be shown
  public showIntroduction = computed(() => {
    return !this.introService.introductionCompleted();
  });
  
  // Additional overlay signals can be added here as needed
  
  // Computed signal to determine if any overlay is currently active
  public hasActiveOverlay = computed(() => {
    return this.showIntroduction();
    // Add other overlay conditions if they're added in the future
  });

  constructor() {}
}
