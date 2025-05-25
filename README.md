# Storybook-React

A minimal React project template with [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/).

## About

This project is a boilerplate for developing and testing React components in isolation using Storybook, with Vite as the build tool. It comes with sample stories and is configured to use some essential Storybook addons, Chromatic integration for visual testing, and basic linting/testing setup.

## Libraries & Tooling

- **React** – UI library
- **Storybook** – For developing and showcasing components
  - `@storybook/react-vite`
  - `@storybook/addon-essentials`
  - `@storybook/addon-onboarding`
  - `@chromatic-com/storybook`
  - `@storybook/experimental-addon-test`
- **Vite** – Fast dev server and bundler
- **TypeScript** – Static typing (if you use `.ts`/`.tsx` files)
- **Vitest** – Unit testing (`.storybook/vitest.setup.ts`)
- **ESLint** – Linting with React and TypeScript support

## Project Setup

### Prerequisites

- Node.js (v16+ recommended)
- Yarn (recommended, see `.yarnrc.yml`) or npm

### Install dependencies

```bash
yarn install
# or
npm install
```

### Start Storybook

```bash
yarn storybook
# or
npm run storybook
```

### Start Main App (if needed)

```bash
yarn dev
# or
npm run dev
```

### Build

```bash
yarn build
# or
npm run build
```

### Lint

```bash
yarn lint
# or
npm run lint
```

### Test (with Vitest)

```bash
yarn test
# or
npm run test
```

## Folder Structure

- `src/` — Main source code and React components
- `src/stories/` — Example Storybook stories
- `.storybook/` — Storybook configuration files

## Notes

- This template is intentionally minimal. Add your own components and stories to expand it.
- See `.storybook/main.ts` for Storybook configuration and enabled addons.

---

> Reference: For Yarn PnP issues, see [volta-cli/volta#1830](https://github.com/volta-cli/volta/issues/1830)