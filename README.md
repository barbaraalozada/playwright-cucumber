# Playwright + Cucumber Test Automation Project

A BDD test automation framework using Playwright for browser automation and Cucumber for behavior-driven development.

---

## 👨‍💻 About

This project demonstrates a modern test automation approach combining:

- **Playwright** - Fast, reliable end-to-end testing
- **Cucumber** - BDD with Gherkin syntax for readable test scenarios
- **TypeScript** - Type safety and better developer experience
- **Page Object Model** - Clean separation between test logic and page interactions

---

## 🏗️ Project Structure

```ini
playwright-cucumber/
├── src/
│   ├── helpers/
│   │   └── EnvConfig.ts    # Environment configuration
│   └── support/
│       ├── hooks.ts        # Cucumber hooks (Before/After)
│       └── World.ts        # Custom World with Playwright
├── tests/
│   ├── features/           # Gherkin feature files
│   ├── pageObjects/        # Page Object classes
│   └── stepDefinitions/    # Step definition files
├── cucumber.cjs            # Cucumber configuration
├── tsconfig.json
└── package.json
```

---

## 🎯 Design Decisions

### Locators Inside Methods

Locators are intentionally declared inside each method rather than as class properties:

```typescript
// ✅ This approach - locators inside methods
async fillFullNameInput(fullName: string): Promise<void> {
  await this.page.locator('#userName').fill(fullName);
}

// ❌ Not this - locators as class properties
readonly fullNameInput = this.page.locator('#userName');
```

**Why?**

- **Readability** - Each method is self-contained and easy to understand
- **Maintainability** - No need to scroll up to find locator definitions
- **Simplicity** - Avoids potential initialization issues with class properties

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```sh
# Clone the repository
git clone https://github.com/barbaraalozada/playwright-cucumber.git

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

```sh
# Run all tests
npm test

# Run tests with specific tags
npm run test:tags "@textbox"

# Run with multiple tags
npm run test:tags "@forms and @textbox"
```

---

## 📊 Tech Stack

| Category | Technology |
|----------|------------|
| Browser Automation | Playwright |
| BDD Framework | Cucumber |
| Language | TypeScript |
| Runtime | Node.js with tsx |
| Linting | ESLint |

---

## ✨ Key Features

- **Custom World** - Shared browser context across steps
- **Automatic Screenshots** - Captures screenshots on test failures
- **Environment Config** - Configurable browser, headless mode, and timeouts
- **HTML Reports** - Generated in `reports/cucumber-report/`
