import { Injectable, inject, signal } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private swUpdate = inject(SwUpdate);
  
  // Signal to track if an update is available
  updateAvailable = signal(false);

  constructor() {
    // Only setup listeners if service worker updates are available
    if (this.swUpdate.isEnabled) {
      // Check for updates every 6 hours
      setInterval(() => {
        this.checkForUpdate();
      }, 6 * 60 * 60 * 1000);
      
      // Initial check
      this.checkForUpdate();
      
      // Listen for available updates
      this.swUpdate.versionUpdates
        .pipe(
          filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
        )
        .subscribe(() => {
          this.updateAvailable.set(true);
        });
    }
  }

  /**
   * Check for available updates
   */
  async checkForUpdate(): Promise<void> {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    try {
      const updateFound = await this.swUpdate.checkForUpdate();
      console.log('Update checked:', updateFound ? 'available' : 'not available');
    } catch (err) {
      console.error('Failed to check for updates:', err);
    }
  }

  /**
   * Apply available update and reload the app
   */
  async applyUpdate(): Promise<void> {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    try {
      await this.swUpdate.activateUpdate();
      // Reload the page to apply the update
      document.location.reload();
    } catch (err) {
      console.error('Failed to apply update:', err);
    }
  }
}
