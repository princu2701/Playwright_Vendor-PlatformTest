<div align="center">

# 🎭 Playwright Vendor Platform Test

**Automated End-to-End Testing for the Vendor Platform**  
*Built with Playwright + TypeScript + GitHub Actions CI/CD*

[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

</div>

---

## 📖 What is This Project?

This project automates testing of the **Vendor Platform** using [Playwright](https://playwright.dev) — a powerful browser automation tool. Instead of manually clicking through the app, these tests do it automatically and tell you instantly if something is broken. 🚀

---

## 📁 Project Structure

```
Playwright_Vendor-PlatformTest/
│
├── 📂 .github/
│   └── 📂 workflows/           # ⚙️ GitHub Actions CI/CD pipelines (auto-run tests)
│
├── 📂 tests/                   # 🧪 All test files live here
│   └── *.spec.ts               # Individual test files
│
├── 📄 playwright.config.ts     # ⚙️ Playwright configuration (browsers, timeouts, etc.)
├── 📄 tsconfig.json            # TypeScript configuration
├── 📄 package.json             # Project dependencies & scripts
├── 📄 package-lock.json        # Locked dependency versions
└── 📄 .gitignore               # Files ignored by Git
```

---

## ✅ Prerequisites — What You Need First

Before running this project, make sure you have these installed on your computer:

| Tool | Why You Need It | Download |
|------|----------------|----------|
| 🟢 **Node.js** (v18+) | Runs JavaScript/TypeScript on your computer | [nodejs.org](https://nodejs.org) |
| 📦 **npm** | Installs packages (comes with Node.js) | Included with Node.js |
| 🐙 **Git** | Downloads this project from GitHub | [git-scm.com](https://git-scm.com) |

### 🔍 Check if you already have them:

```bash
node --version    # Should show v18.0.0 or higher
npm --version     # Should show 8.0.0 or higher
git --version     # Should show any version
```

---

## 🚀 Getting Started — Step by Step

### Step 1️⃣ — Clone the Repository

```bash
git clone https://github.com/princu2701/Playwright_Vendor-PlatformTest.git
```

### Step 2️⃣ — Go Into the Project Folder

```bash
cd Playwright_Vendor-PlatformTest
```

### Step 3️⃣ — Install All Dependencies

```bash
npm install
```

> ⏳ This will download all the required packages. It might take a minute!

### Step 4️⃣ — Install Playwright Browsers

```bash
npx playwright install
```

> 🌐 This downloads Chrome, Firefox, and WebKit (Safari engine) for Playwright to use.

---

## ▶️ Running the Tests

### 🔵 Run All Tests (Headless — No Browser Window)

```bash
npx playwright test
```

### 🖥️ Run Tests with a Browser Window (Headed Mode)

```bash
npx playwright test --headed
```

### 🎨 Run Tests in Interactive UI Mode (Best for Beginners!)

```bash
npx playwright test --ui
```

> 💡 UI mode opens a visual dashboard where you can click on individual tests and watch them run!

### 🔍 Run a Specific Test File

```bash
npx playwright test tests/your-test-file.spec.ts
```

### 🌐 Run Tests on a Specific Browser

```bash
# Chrome only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# Safari (WebKit) only
npx playwright test --project=webkit
```

---

## 📊 Viewing Test Reports

After tests run, view a beautiful HTML report:

```bash
npx playwright show-report
```

> 📈 This opens a detailed report in your browser showing passed ✅, failed ❌, and skipped ⏭️ tests — with screenshots and traces for any failures!

---

## 🔧 Configuration

The `playwright.config.ts` file controls how tests behave:

```ts
// Key settings in playwright.config.ts
{
  testDir: './tests',        // 📂 Where tests are located
  timeout: 30000,            // ⏱️ 30 seconds per test
  retries: 2,                // 🔁 Retry failed tests twice
  reporter: 'html',          // 📊 Generate HTML report
  use: {
    headless: true,          // 🕶️ Run without visible browser
    screenshot: 'on',        // 📸 Capture screenshots
    video: 'retain-on-failure', // 🎥 Record video on failure
    trace: 'on-first-retry', // 🔍 Capture trace on retry
  }
}
```

---

## ⚙️ GitHub Actions CI/CD

This project automatically runs tests on every **push** and **pull request** via GitHub Actions!

The workflow file is located at `.github/workflows/` and:
- 🔄 Triggers on every `push` to `master` and every `pull request`
- 🐧 Runs on `ubuntu-latest`
- 📦 Installs Node.js and dependencies
- 🎭 Installs Playwright browsers
- 🧪 Runs all tests
- 📊 Uploads the HTML report as an artifact

```yaml
# How CI works (simplified)
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js
      - npm install
      - npx playwright install
      - npx playwright test
      - Upload HTML report
```

> 📎 Go to the **Actions** tab in GitHub to see past test runs and download reports!

---

## 🛠️ Useful Commands Cheat Sheet

```bash
# 📦 Install everything
npm install && npx playwright install

# ▶️ Run all tests
npx playwright test

# 🖥️ Run with visible browser
npx playwright test --headed

# 🎨 Open visual test runner
npx playwright test --ui

# 📊 See the HTML report
npx playwright show-report

# 🐞 Debug a test interactively
npx playwright test --debug

# 📝 Generate code by recording your actions
npx playwright codegen <url>

# 🏷️ Run tests matching a specific tag/name
npx playwright test -g "login"
```

---

## 🧑‍💻 Tech Stack

| Technology | Purpose |
|-----------|---------|
| 🎭 **Playwright** | Browser automation & E2E testing |
| 📘 **TypeScript** | Type-safe JavaScript for writing tests |
| 🟢 **Node.js** | JavaScript runtime environment |
| ⚙️ **GitHub Actions** | Automated CI/CD pipeline |

---

## 🤝 Contributing

1. **Fork** this repository
2. Create a new branch: `git checkout -b feature/my-test`
3. Add your test files in the `tests/` folder
4. Commit your changes: `git commit -m "Add: new vendor test"`
5. Push and open a **Pull Request**

---

## 📜 License

This project is open source. Feel free to use, learn from, and improve it!

---

<div align="center">

Made with ❤️ using [Playwright](https://playwright.dev)

⭐ **If this helped you, give it a star!** ⭐

</div>
