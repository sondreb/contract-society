import { Injectable, signal } from '@angular/core';
import { User, UserIdentity } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Mock user data with verified identities
  private currentUserSignal = signal<User>({
    id: 'user1',
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    identities: [
      {
        id: 'mtl-id-1',
        name: 'MTL Identity',
        provider: 'Montelibero',
        verifiedAt: new Date('2023-05-15'),
        isVerified: true,
        icon: 'verified_user'
      },
      {
        id: 'free-id-1',
        name: 'Free ID',
        provider: 'FreeID Network',
        verifiedAt: new Date('2023-08-22'),
        isVerified: true,
        icon: 'fingerprint'
      }
    ]
  });

  // Signal to track the selected identity for society joining
  private selectedIdentitySignal = signal<string | null>(null);

  constructor() {}

  // Get current user
  getCurrentUser() {
    return this.currentUserSignal;
  }

  // Get user's verified identities
  getUserIdentities() {
    return this.currentUserSignal().identities.filter(identity => identity.isVerified);
  }

  // Select an identity for joining
  selectIdentity(identityId: string) {
    this.selectedIdentitySignal.set(identityId);
  }

  // Get selected identity
  getSelectedIdentity() {
    return this.selectedIdentitySignal;
  }

  // Clear selected identity
  clearSelectedIdentity() {
    this.selectedIdentitySignal.set(null);
  }

  // Add new identity (would be more complex in a real app)
  async addIdentity(identity: Partial<UserIdentity>): Promise<boolean> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newIdentity: UserIdentity = {
      id: `identity-${Date.now()}`,
      name: identity.name || 'New Identity',
      provider: identity.provider || 'Unknown Provider',
      verifiedAt: new Date(),
      isVerified: true,
      icon: identity.icon || 'account_circle'
    };
    
    const currentUser = this.currentUserSignal();
    this.currentUserSignal.set({
      ...currentUser,
      identities: [...currentUser.identities, newIdentity]
    });
    
    return true;
  }
}
