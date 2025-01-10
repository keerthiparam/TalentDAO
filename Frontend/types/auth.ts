export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  walletAddress?: string;
  accountType: 'buyer' | 'seller';
}

export interface AuthResponse {
  user: User;
  token: string;
}

