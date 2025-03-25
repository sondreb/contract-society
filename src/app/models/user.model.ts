export interface UserIdentity {
  id: string;
  name: string;
  provider: string;
  verifiedAt: Date;
  isVerified: boolean;
  icon: string;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  identities: UserIdentity[];
}
