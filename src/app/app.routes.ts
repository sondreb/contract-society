import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: '', redirectTo: '/settings', pathMatch: 'full' }, // Redirect to settings page for now
];
