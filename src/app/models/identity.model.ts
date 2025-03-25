export interface Identity {
  id: string;
  type: IdentityType;
  value: string;
  label?: string;
  isVerified: boolean;
  verifiedBy?: string[];
  createdAt: Date;
  lastVerified?: Date;
}

export type IdentityType = 'did:stellar' | 'did:is' | 'did:key';

export interface VerificationService {
  id: string;
  name: string;
  icon: string;
  description: string;
  supportedTypes: IdentityType[];
}
