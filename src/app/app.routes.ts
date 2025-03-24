import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page as default
];
