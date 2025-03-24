import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Manage Societies',
      description: 'Create and manage multiple societies with custom rules.',
      icon: 'groups',
      route: '/societies'
    },
    {
      title: 'QR Code Scanner',
      description: 'Scan QR codes to quickly interact with other members.',
      icon: 'qr_code_scanner',
      route: '/scan'
    },
    {
      title: 'Profile Management',
      description: 'Set up your profile and manage your personal information.',
      icon: 'person',
      route: '/profile'
    }
  ];
}
