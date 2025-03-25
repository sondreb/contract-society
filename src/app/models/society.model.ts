export interface Society {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  memberCount: number;
  contractCount: number;
  location?: string;
  founded?: Date;
  website?: string;
}

export type IdentityVerificationMethod = 'MTL ID' | 'FreeID';

export interface IdentityVerificationOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}
