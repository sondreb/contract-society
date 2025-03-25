import { Injectable, signal, computed } from '@angular/core';
import { Identity, IdentityType, VerificationService } from '../models/identity.model';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private identities = signal<Identity[]>([
    {
      id: '1',
      type: 'did:stellar',
      value: 'did:stellar:GDMBM7P2ZVD64DSMQJIR67CZFWU7EQRI4YMRLZ2XOYT3V7YUBGZ4RXHF',
      label: 'Primary Stellar Identity',
      isVerified: true,
      verifiedBy: ['mtl-id'],
      createdAt: new Date('2023-09-15'),
      lastVerified: new Date('2024-05-20')
    },
    {
      id: '2',
      type: 'did:is',
      value: 'did:is:0xabcdef1234567890',
      label: 'Identity Server',
      isVerified: false,
      createdAt: new Date('2024-01-10')
    },
    {
      id: '3',
      type: 'did:key',
      value: 'did:key:z6MkgbqNU4uF9NKSz9pJnuZMGzFEYQhLJZxhCbNYj6UbbvcP',
      isVerified: false,
      createdAt: new Date('2024-03-22')
    }
  ]);

  private verificationServices = signal<VerificationService[]>([
    {
      id: 'mtl-id',
      name: 'MTL ID',
      icon: 'verified_user',
      description: 'Identity verification provided by Montelibero',
      supportedTypes: ['did:stellar', 'did:key']
    },
    {
      id: 'free-id',
      name: 'FreeID',
      icon: 'verified',
      description: 'Identity verification provided by Liberstad',
      supportedTypes: ['did:stellar', 'did:is', 'did:key']
    }
  ]);

  getAllIdentities = computed(() => this.identities());
  
  getVerificationServices = computed(() => this.verificationServices());

  getVerifiedIdentities = computed(() => 
    this.identities().filter(identity => identity.isVerified)
  );

  getUnverifiedIdentities = computed(() => 
    this.identities().filter(identity => !identity.isVerified)
  );

  getCompatibleVerificationServices(identityType: IdentityType) {
    return this.verificationServices().filter(service => 
      service.supportedTypes.includes(identityType)
    );
  }

  async addIdentity(identity: Omit<Identity, 'id' | 'isVerified' | 'createdAt'>): Promise<Identity> {
    const newIdentity: Identity = {
      ...identity,
      id: crypto.randomUUID(),
      isVerified: false,
      createdAt: new Date()
    };

    this.identities.update(current => [...current, newIdentity]);
    return newIdentity;
  }

  async verifyIdentity(identityId: string, serviceId: string): Promise<boolean> {
    // This would typically make an API call to the verification service
    // For now, we'll simulate a successful verification
    
    return new Promise((resolve) => {
      setTimeout(() => {
        this.identities.update(current => 
          current.map(identity => {
            if (identity.id === identityId) {
              // Add the service to verifiedBy if it doesn't exist
              const verifiedBy = identity.verifiedBy || [];
              if (!verifiedBy.includes(serviceId)) {
                verifiedBy.push(serviceId);
              }
              
              return {
                ...identity,
                isVerified: true,
                verifiedBy,
                lastVerified: new Date()
              };
            }
            return identity;
          })
        );
        resolve(true);
      }, 2000); // Simulate network delay
    });
  }

  async removeIdentity(id: string): Promise<boolean> {
    this.identities.update(current => 
      current.filter(identity => identity.id !== id)
    );
    return true;
  }

  getIdentityById(id: string): Identity | undefined {
    return this.identities().find(identity => identity.id === id);
  }
}
