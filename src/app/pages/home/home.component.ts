import { Component, signal } from '@angular/core';
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
      description: 'Create and govern multiple societies with customizable rules and transparent decision-making processes.',
      icon: 'groups',
      route: '/societies'
    },
    {
      title: 'Digital Identities',
      description: 'Build your digital presence with verifiable credentials that establish trust across your social networks.',
      icon: 'fingerprint',
      route: '/profile'
    },
    {
      title: 'Smart Agreements',
      description: 'Define clear terms and conditions that automatically execute when conditions are met.',
      icon: 'handshake',
      route: '/agreements'
    },
    {
      title: 'Secure Voting',
      description: 'Participate in fair, transparent decision-making processes within your societies.',
      icon: 'how_to_vote',
      route: '/societies'
    }
  ];

  benefits = [
    'Transparent governance for communities and organizations',
    'Simplified conflict resolution with clear agreements',
    'Build reputation across multiple social contexts',
    'Secure and private identity management'
  ];
}
