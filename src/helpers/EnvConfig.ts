import * as dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export class EnvConfig {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'https://demoqa.com';
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
