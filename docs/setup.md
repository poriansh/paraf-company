# Setup Guide

## 1. Requirements

Install the following tools before working on the project:

- **Node.js:** Node.js 20.9 or later is recommended for Next.js 16.
- **pnpm:** pnpm 9 or later is recommended. The repository uses `pnpm-lock.yaml` to lock dependency versions.
- **Git:** Required to clone the repository and work with branches.

The project does not currently declare Node.js or pnpm versions in `package.json`; keep the team’s runtime versions aligned to avoid lockfile or build differences.

## 2. Installation

Clone the repository and enter the project directory:

```bash
git clone <repository-url>
cd paraf
```

Install dependencies:

```bash
pnpm install
```

Use pnpm rather than npm or Yarn because the project includes a pnpm lockfile. It installs the exact dependency graph recorded for the project and avoids unintended lockfile changes.

## 3. Environment Variables

Create a `.env.local` file in the repository root, next to `package.json`. It is ignored by Git and is intended for developer-specific values. Use `.env.example` as the starting point:

```bash
cp .env.example .env.local
```

The required API configuration is:

```env
NEXT_PUBLIC_API_URL=https://wholesaler-core-v2.paraf.app/api/
```

`NEXT_PUBLIC_API_URL` is the base URL for the backend API. Client-side Axios uses this value, while server-side fetching reads the same variable from `src/core/config/env.ts`. Development and production local environment files can also be placed in the repository root as `.env.development.local` and `.env.production.local`.

Do not commit `.env.local` or other `.env*.local` files.

## 4. Development

Start the development server:

```bash
pnpm dev
```

This runs the Next.js development server with hot reloading. Open [http://localhost:3000](http://localhost:3000) in a browser. The application redirects unauthenticated dashboard access to `/login`.

## 5. Production Build

Create an optimized production build:

```bash
pnpm build
```

Run the production server after a successful build:

```bash
pnpm start
```

`pnpm dev` prioritizes fast feedback and hot reloading. `pnpm build` validates and optimizes the application for deployment, and `pnpm start` serves that generated production build.

## 6. Code Quality

Run ESLint:

```bash
pnpm lint
```

The lint command runs the project’s Next.js ESLint integration and should be used before submitting changes.

TypeScript strict mode is enabled in `tsconfig.json`. There is no dedicated `typecheck` script at present; run the compiler without emitting files when a standalone type check is needed:

```bash
pnpm exec tsc --noEmit
```

## 7. Project Conventions

- Organize business capabilities in `src/features/<feature-name>` and keep feature-specific UI, services, schemas, and types together.
- Name React components in PascalCase and keep their files aligned with the component name, for example `LoginForm.tsx`.
- Use the configured import aliases instead of long relative paths: `@/`, `@core/`, `@features/`, `@infrastructure/`, and `@shared/`.
- Maintain TypeScript strict mode and define explicit types for public component props, request payloads, and API responses.
- Do not place business logic or direct Axios calls in components. Put request and feature behavior in hooks or services, then consume them from UI components.

## 8. Common Issues

- **Dependency installation fails:** Confirm Node.js and pnpm meet the recommended versions, then remove only the local `node_modules` directory and run `pnpm install` again. Do not replace `pnpm-lock.yaml` with a lockfile from another package manager.
- **Environment variable is missing:** Confirm `.env.local` is in the repository root and contains `NEXT_PUBLIC_API_URL`. Restart `pnpm dev` after changing environment files because Next.js reads them at startup.
- **Build fails:** Run `pnpm lint` and `pnpm exec tsc --noEmit` to identify lint or type errors. Also verify that required environment variables are available in the build environment.
- **Stale build or development behavior:** Stop the server, remove the local `.next` directory, then restart `pnpm dev` or rerun `pnpm build`. Reinstall dependencies only if the issue persists.
