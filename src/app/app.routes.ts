import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'settings',
    loadComponent: () => 
      import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  // We can keep this route for direct access if needed, but normal usage will show it as an overlay
  {
    path: 'introduction',
    loadComponent: () => 
      import('./pages/introduction/introduction.component').then(m => m.IntroductionComponent)
  },
  {
    path: 'profile',
    loadComponent: () => 
      import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'societies',
    loadComponent: () => 
      import('./pages/societies/societies.component').then(m => m.SocietiesComponent)
  },
  {
    path: 'societies/:id',
    loadComponent: () => 
      import('./pages/society-detail/society-detail.component').then(m => m.SocietyDetailComponent)
  },
  {
    path: 'scan',
    loadComponent: () => 
      import('./pages/scan/scan.component').then(m => m.ScanComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
