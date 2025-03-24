import { Component, inject, HostListener, signal, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { IntroductionService } from '../../services/introduction.service';
import { OverlayService } from '../../services/overlay.service';
import { 
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(30px)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':enter', [
        animate('250ms 50ms cubic-bezier(0.2, 0.0, 0.1, 1)')
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.2, 0.0, 0.1, 1)', style({
          transform: 'translateX(-30px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.98)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition(':enter', [
        animate('200ms 80ms cubic-bezier(0.2, 0.0, 0.1, 1)')
      ]),
      transition(':leave', [
        animate('180ms cubic-bezier(0.2, 0.0, 0.1, 1)', style({
          opacity: 0,
          transform: 'scale(0.98)'
        }))
      ])
    ]),
    trigger('staggerItems', [
      transition(':enter', [
        query('.animate-item', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          stagger(70, [
            animate('200ms 100ms cubic-bezier(0.2, 0.0, 0.1, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class IntroductionComponent {
  private introductionService = inject(IntroductionService);
  private overlayService = inject(OverlayService);
  private router = inject(Router);
  
  @ViewChildren('step') stepElements!: QueryList<ElementRef>;
  
  // Track touch events
  touchStartX = 0;
  touchEndX = 0;
  
  // Minimum distance for swipe
  minSwipeDistance = 50;
  
  // Access signals from the service
  currentStep = this.introductionService.currentStep;
  totalSteps = this.introductionService.totalSteps;
  
  // Steps data with improved text
  steps = [
    {
      title: 'Welcome to Contract Society',
      content: 'An app for creating and managing all kinds of contracts to help a society function.',
      image: 'assets/intro-welcome.svg',
      icon: 'handshake'
    },
    {
      title: 'Create Societies',
      content: 'Form societies with shared values and goals. Define rules and agreements that work for everyone.',
      image: 'assets/intro-societies.svg',
      icon: 'groups'
    },
    {
      title: 'Manage Contracts',
      content: 'Create, sign, and manage contracts with other members. Track obligations and fulfillment.',
      image: 'assets/intro-contracts.svg',
      icon: 'description'
    },
    {
      title: 'Get Started',
      content: 'You\'re all set! Start exploring the app and creating your first society or joining an existing one.',
      image: 'assets/intro-getstarted.svg',
      icon: 'rocket_launch'
    }
  ];
  
  // Calculate progress percentage
  get progressValue(): number {
    return ((this.currentStep() + 1) / this.totalSteps) * 100;
  }
  
  // Touch event handlers
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }
  
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }
  
  // Add keyboard navigation support
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    switch(event.key) {
      case 'ArrowRight':
        this.nextStep();
        break;
      case 'ArrowLeft':
        this.previousStep();
        break;
      case 'Escape':
        this.skipIntroduction();
        break;
      case 'Enter':
        if (this.currentStep() === this.totalSteps - 1) {
          this.finishIntroduction();
        } else {
          this.nextStep();
        }
        break;
    }
  }
  
  // Handle swipe gestures
  private handleSwipe(): void {
    const distance = this.touchEndX - this.touchStartX;
    
    if (Math.abs(distance) > this.minSwipeDistance) {
      if (distance > 0) {
        // Swipe right - go to previous step
        this.previousStep();
      } else {
        // Swipe left - go to next step
        this.nextStep();
      }
    }
  }
  
  // Navigation methods
  nextStep(): void {
    this.introductionService.nextStep();
  }
  
  previousStep(): void {
    this.introductionService.previousStep();
  }
  
  skipIntroduction(): void {
    this.overlayService.closeIntroduction();
    if (!this.introductionService.introductionCompleted()) {
      this.introductionService.completeIntroduction();
    }
    this.router.navigate(['/']);
  }
  
  finishIntroduction(): void {
    this.overlayService.closeIntroduction();
    if (!this.introductionService.introductionCompleted()) {
      this.introductionService.completeIntroduction();
    }
    this.router.navigate(['/']);
  }
  
  navigateToStep(step: number): void {
    this.introductionService.goToStep(step);
  }
}
