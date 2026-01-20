import * as dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export class EnvConfig {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'https://demoqa.com';
  }

  static getBookStoreUserName(): string {
    const username = process.env.BOOK_STORE_USERNAME;
    if (!username) {
      throw new Error('BOOK_STORE_USERNAME environment variable is not defined');
    }
    return username;
  }

  static getBookStorePassword(): string {
    const password = process.env.BOOK_STORE_PASSWORD;
    if (!password) {
      throw new Error('BOOK_STORE_PASSWORD environment variable is not defined');
    }
    return password;
  }

  static getBookStoreDeletedUserName(): string {
    const username = process.env.BOOK_STORE_DELETED_USERNAME;
    if (!username) {
      throw new Error('BOOK_STORE_DELETED_USERNAME environment variable is not defined');
    }
    return username;
  }

  static getBookStoreDeletedPassword(): string {
    const password = process.env.BOOK_STORE_DELETED_PASSWORD;
    if (!password) {
      throw new Error('BOOK_STORE_DELETED_PASSWORD environment variable is not defined');
    }
    return password;
  }

  static getDefaultTimeout(): number {
    return parseInt(process.env.DEFAULT_TIMEOUT || '10000', 10);
  }

  static isHeadless(): boolean {
    return process.env.HEADLESS === 'true';
  }

  static getBrowser(): 'chromium' | 'firefox' {
    const browser = process.env.BROWSER?.toLowerCase();
    if (browser === 'firefox') return 'firefox';
    return 'chromium';
  }
}
