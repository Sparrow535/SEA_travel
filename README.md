# Sea Travel - React App

Production-ready React + TypeScript environment using Vite.

## Requirements

- Node.js `22.13.0+` (use `.nvmrc`)
- npm `10+`

## Quick Start

```bash
npm install
npm run dev
```

App runs on `http://localhost:5173` by default.

Create your local env file before running the app:

- PowerShell: `Copy-Item .env.example .env`
- macOS/Linux: `cp .env.example .env`

## Scripts

- `npm run dev` - start local development server
- `npm run build` - run TypeScript project build and Vite production build
- `npm run preview` - preview production build locally
- `npm run typecheck` - run TypeScript checks only
- `npm run lint` - run ESLint with zero warnings allowed
- `npm run lint:fix` - auto-fix lint issues where possible
- `npm run format` - format files with Prettier
- `npm run format:check` - verify formatting without writing changes

## Environment Variables

Use `VITE_`-prefixed variables for browser-exposed config.

- `VITE_APP_NAME`
- `VITE_API_BASE_URL`
