# BrowserStack Appium Tests

Automated tests for Wikipedia Android app using WebdriverIO + Appium + BrowserStack.

## Stack
- WebdriverIO
- Appium
- BrowserStack App Automate
- GitHub Actions

## Test Cases
- TC01 - Search button is visible on launch
- TC02 - Search field opens on tap
- TC03 - Search returns results
- TC04 - Article opens from search results
- TC05 - Back button returns to main screen

## How to run

Install dependencies:
```bash
npm install
```

Run tests:
```bash
npm test
```

## CI/CD
Tests run automatically on every push to `main` via GitHub Actions.

## Test App
Wikipedia Android Sample APK — [download here](https://www.browserstack.com/app-automate/sample-apps/android/WikipediaSample.apk)