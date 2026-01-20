import credentials from './credentials.json';
import type { Credentials, CredentialType } from './types/credentials.types';

class CredentialsFactory {
  private data: Credentials;

  constructor(type: CredentialType) {
    const raw = credentials[type as keyof typeof credentials];
    if (!raw) {
      throw new Error(`Credential type not supported: ${type}`);
    }
    this.data = { ...raw };
  }

  withWhitespace(): this {
    this.data.username = `  ${this.data.username}  `;
    this.data.password = `  ${this.data.password}  `;
    return this;
  }

  withUpperCase(): this {
    this.data.username = this.data.username.toUpperCase();
    return this;
  }

  withLowerCase(): this {
    this.data.username = this.data.username.toLowerCase();
    return this;
  }

  withCustomUsername(username: string): this {
    this.data.username = username;
    return this;
  }

  withCustomPassword(password: string): this {
    this.data.password = password;
    return this;
  }

  build(): Credentials {
    return this.data;
  }
}

export const getCredentials = (type: CredentialType): Credentials => {
  return new CredentialsFactory(type).build();
};

export const buildCredentials = (type: CredentialType): CredentialsFactory => {
  return new CredentialsFactory(type);
};

export const getAllInvalidCredentials = (): Credentials[] => {
  return Object.entries(credentials)
    .filter(([key]) => key !== 'valid')
    .map(([, value]) => value as Credentials);
};
