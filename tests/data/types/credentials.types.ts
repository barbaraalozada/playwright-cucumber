export interface Credentials {
  username: string;
  password: string;
}

export type CredentialType = 'valid' | 'invalid' | 'empty' | 'non-existent';
