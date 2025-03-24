import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService, ThemeMode } from './services/theme.service';
import { IntroductionService } from './services/introduction.service';
import { OverlayService } from './services/overlay.service';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';

interface NavItem {
  label: string;
  icon: string;
  route?: string;
  action?: () => void;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    IntroductionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private themeService = inject(ThemeService);
  private introductionService = inject(IntroductionService);
  overlayService = inject(OverlayService);
  private router = inject(Router);
  
  title = 'Contract Society';
  isSidenavOpen = signal(false);
  
  navItems: NavItem[] = [
    { label: 'Profile', icon: 'person', route: '/profile' },
    { label: 'Societies', icon: 'groups', route: '/societies' },
    { label: 'Scan', icon: 'qr_code_scanner', route: '/scan' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ];

  // For the bottom mobile navigation
  mobileNavItems: NavItem[] = this.navItems;

  themeOptions = this.themeService.getThemeOptions();
  isDarkTheme = this.themeService.isDarkTheme;
  selectedTheme = this.themeService.themeMode;

  constructor() {
    // Check if the user has completed the introduction
    effect(() => {
      // Only show the introduction overlay if it hasn't been completed
      if (!this.introductionService.introductionCompleted()) {
        this.overlayService.showIntroduction();
      }
    });
  }

  toggleSidenav() {
    this.isSidenavOpen.update(current => !current);
  }

  closeSidenav() {
    this.isSidenavOpen.set(false);
  }

  changeTheme(theme: ThemeMode) {
    this.themeService.setTheme(theme);
  }
}
