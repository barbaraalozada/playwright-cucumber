# Playwright + Cucumber Test Automation Project

A BDD test automation framework using Playwright for browser automation and Cucumber for behavior-driven development.

---

## 👨‍💻 About the Project

This project demonstrates a modern test automation approach combining:

- **Playwright** - Fast, reliable end-to-end testing
- **Cucumber** - BDD with Gherkin syntax for readable test scenarios
- **TypeScript** - Type safety and better developer experience
- **Page Object Model** - Clean separation between test logic and page interactions

---

## 🏗️ Project Structure

```ini
playwright-cucumber/
├── .github/
│   └── workflows/
│       └── cucumber.yml    # GitHub Actions workflow
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
├── eslint.config.ts        # ESLint configuration
├── tsconfig.json
└── package.json
```

---

## ✨ Key Features

- **Custom World** - Shared browser context across steps
- **Automatic Screenshots** - Captures screenshots on test failures
- **Environment Config** - Configurable browser, headless mode, and timeouts
- **Allure Reports** - Rich test reports
- **ESLint** - Code linting for consistent code style and quality

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

# Run Allure report
npm run allure:report

# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix
```

---

## 🧭 Testing Strategy

This project follows a **risk-based testing approach**, focusing validation efforts on critical user flows and high-impact scenarios.

- Priority is given to core functionalities and business-critical paths.
- Automated tests cover stable and repetitive scenarios.
- Exploratory testing is used to validate edge cases and new behaviors.
- Not all scenarios are automated by design, balancing coverage, cost, and execution time.

> Note:
> This repository intentionally includes a limited number of scenarios to demonstrate structure, tagging strategy, and CI integration.
> The framework is designed to scale as additional critical, regression, and edge-case scenarios are added.

---

## 🐞 Defect Reporting Scope
This project uses a **publicly available demo website** for testing purposes.

Because the application is **not owned or maintained by this repository**, real defects are **not reported to the application owners**.

Any issues identified during testing are:
- Used **only for demonstration and learning purposes**.
- Documented as example scenarios to showcase defect analysis and reporting skills.
- Not tracked as real production defects.

In a real production environment, defects would be reported through the agreed tracking system following team-defined severity and priority criteria.

---

## 🔄 CI/CD Strategy & Quality Gates (GitHub Actions)

This project integrates automated tests into a CI pipeline to support release quality and provide fast feedback.

### CI Scope & Execution Strategy
The workflow (.github/workflows/cucumber.yml) is currently executed manually via workflow dispatch.

> Rationale:
> In a production environment, test execution would typically be triggered on pull requests and merges.
> For this project, manual execution is intentionally used to control execution costs while still validating CI integration and quality ownership.

### Quality Gates (Ideal vs Demo Setup)
Ideal production setup:
- The pipeline fails when any critical smoke or regression test fails.
- Reproducible test failures block deployments.
- Test execution errors (timeouts, crashes) are treated as release blockers.

Current portfolio setup:
- CI runs focus on critical user flows.
- Pipeline execution is used as a quality signal, not as a strict deployment blocker.
- Full regression is expected before a release, but is not enforced on every run.

### Workflow Overview

| Step | Description |
|------|-------------|
| Checkout | Clones the repository |
| Setup Node.js | Installs Node.js LTS with npm caching |
| Install dependencies | Runs `npm ci` for clean install |
| Install Playwright | Downloads browser binaries |
| Run tests | Executes Cucumber tests in parallel for Chromium and Firefox |
| Generate Allure report | Creates HTML reports from test results |
| Upload artifacts | Stores reports for 7 days |
| Deploy to GitHub Pages | Publishes reports to `gh-pages` branch |

### Cross-Browser Strategy

Cross-browser execution is controlled via workflow inputs to balance coverage, execution time, and cost.

- A single browser can be selected for fast validation.
- Multiple browsers can be executed when broader coverage is required.

```yaml
strategy:
  matrix:
    browser: dynamic (chromium, firefox)
  fail-fast: false
```

> Cross-browser execution is intentionally limited in CI to reduce runtime and cost while still validating critical compatibility risks.

### Flaky Test Handling Policy
- Flaky tests are identified and documented.
- Limited retries are applied only to known flaky scenarios.
- Persistent flakiness is treated as technical debt and prioritized for stabilization.

### Quality Ownership & Reporting
- Automated tests act as a quality indicator for releases.
- Test results are reviewed before approving changes.
- Known issues and accepted risks are documented when applicable.

### Test Reports (GitHub Pages)

Allure reports are automatically published to GitHub Pages after each execution:

- [**Chromium - Latest Report**](https://barbaraalozada.github.io/playwright-cucumber/chromium/)
- [**Firefox - Latest Report**](https://barbaraalozada.github.io/playwright-cucumber/firefox/)

### GitHub Actions Used

| Action | Version | Purpose |
|--------|---------|---------|
| `actions/checkout` | v4 | Clone repository |
| `actions/setup-node` | v4 | Setup Node.js environment |
| `actions/upload-artifact` | v4 | Store test reports as artifacts |
| `peaceiris/actions-gh-pages` | v4 | Deploy reports to GitHub Pages |
