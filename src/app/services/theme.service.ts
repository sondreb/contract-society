import { Injectable, signal, effect, computed } from '@angular/core';

export type ThemeMode = 'auto' | 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  private storedTheme = localStorage.getItem('theme') as ThemeMode || 'auto';
  
  public themeMode = signal<ThemeMode>(this.storedTheme);
  public isDarkTheme = computed(() => {
    if (this.themeMode() === 'auto') {
      return this.prefersDarkTheme.matches;
    }
    return this.themeMode() === 'dark';
  });

  constructor() {
    // Apply theme on initialization
    this.applyTheme();

    // Watch for OS theme changes
    this.prefersDarkTheme.addEventListener('change', (e) => {
      if (this.themeMode() === 'auto') {
        this.applyTheme();
      }
    });

    // Apply theme whenever themeMode changes
    effect(() => {
      const currentTheme = this.themeMode();
      localStorage.setItem('theme', currentTheme);
      this.applyTheme();
    });
  }

  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
  }

  private applyTheme(): void {
    if (this.isDarkTheme()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  getThemeOptions(): { value: ThemeMode, label: string }[] {
    return [
      { value: 'auto', label: 'Auto (System)' },
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
    ];
  }
}
