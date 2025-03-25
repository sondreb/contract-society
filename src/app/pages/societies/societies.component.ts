import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SocietyService } from '../../services/society.service';

@Component({
  selector: 'app-societies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  templateUrl: './societies.component.html',
  styleUrl: './societies.component.scss'
})
export class SocietiesComponent {
  private societyService = inject(SocietyService);
  private router = inject(Router);
  
  societies = this.societyService.getSocieties();
  
  viewSociety(societyId: string): void {
    this.router.navigate(['/societies', societyId]);
  }
}
