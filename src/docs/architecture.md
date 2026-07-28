# Architecture

## 1. Project Overview

This project is a customer-club web application. It provides authenticated user access and is structured to grow by adding isolated business features.

The application uses Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui, TanStack React Query, Axios, React Hook Form, and Zod. Zustand is installed for global client state when needed; no active Zustand store is currently present in the codebase.

The architecture combines Next.js route-based composition with feature-based modules. Routes and layouts live in `app`, business capabilities live in `features`, reusable code lives in `shared`, application configuration lives in `core`, and HTTP/data-access concerns live in `infrastructure`.

## 2. Folder Structure

```text
src/
├── app/
├── core/
├── features/
├── infrastructure/
└── shared/
```

- **`app/`**: Next.js App Router routes, route groups, layouts, global styles, and application-level provider composition. The `(auth)` and `(dashboard)` groups separate public and protected route layouts.
- **`features/`**: Business features and their feature-specific components, services, schemas, and types. The current authentication feature is located in `features/auth/login`.
- **`shared/`**: Reusable UI components, providers, utilities, constants, shared hooks, types, and client-side helpers such as token storage.
- **`core/`**: Application-wide configuration and constants, including environment configuration and fonts.
- **`infrastructure/`**: Communication with external systems. It contains the Axios client, TanStack Query request helpers, API response models, and server-side fetch utilities.

## 3. Feature Based Architecture

Features are organized by business capability so that related UI, validation, request logic, and types remain together. This limits cross-feature coupling, makes ownership clear, and allows a feature to evolve without spreading its implementation across unrelated folders.

Create a new feature under `src/features/<feature-name>`. Keep business-specific UI in `components`, reusable data-fetching behavior in `hooks` or service hooks, API orchestration in `services`, validation contracts in `schemas`, and TypeScript contracts in `types`. Re-export the intended public API from `index.ts`.

```text
features/
└── feature-name/
    ├── components/
    ├── hooks/
    ├── services/
    ├── schemas/
    ├── types/
    └── index.ts
```

Components are responsible for presentation and user interaction. Hooks and services own request execution, server-state behavior, and feature-specific business logic; components should not call Axios or backend APIs directly.

## 4. Data Flow

```text
Component
  ↓
Feature hook or service hook
  ↓
TanStack React Query
  ↓
Shared request helper
  ↓
Axios API client
  ↓
Backend API
```

For client-side requests, feature hooks use the shared `useRequest` or `useMutate` helpers in `infrastructure/client/api`. These helpers call the configured Axios client and normalize access to the shared `ApiResponse` envelope. `useRequest` returns `data.result` for query consumers, while mutations expose the full response to their callers.

Components must consume hooks rather than call APIs directly. Place business rules, request options, transformations, and callbacks in feature hooks or services so UI code stays focused on rendering and interaction.

## 5. UI Architecture

The project uses shadcn/ui-style components in `shared/components/ui`, composed from Radix UI primitives and styled with Tailwind CSS. Feature components compose these primitives into feature-specific screens, such as `LoginForm`.

Shared UI components are the project’s wrapper layer for buttons, inputs, cards, dialogs, tables, and other common controls. They centralize styling, variants, accessibility behavior, and local conventions. For example, the shared `Button` component is imported from `shared/components/ui/button` rather than reimplemented by each feature.

This wrapper layer keeps the UI consistent and contains the impact of a future UI-library change to shared components instead of every feature.

## 6. State Management

- **Server state:** TanStack React Query manages client-side API request lifecycle, caching, retries, stale data, and query or mutation states. `QueryProvider` configures the shared query client.
- **Client state:** Use local React state for component-scoped behavior. Use Zustand only for cross-route client state when it is introduced; it is available as a dependency but has no active store in the current project.
- **Form state:** React Hook Form owns form values, submission handling, and field errors. Zod schemas validate form input through `zodResolver`.
- **Authentication state:** The access token is persisted in `localStorage` through shared token utilities. `AuthGuard` uses local React state to check token availability before rendering protected dashboard routes.

## 7. Error Handling

There is no global React ErrorBoundary or Next.js route `error.tsx` boundary in the current codebase. Add a global boundary or route-level `error.tsx` files when the application needs a fallback UI for render-time failures.

At feature level, components should surface form-validation errors and handle relevant query or mutation states. React Query exposes request errors to hooks, while `useMutate` extracts the API error message, calls an optional `errorCallback`, and displays an error toast unless `hideToast` is enabled.

Axios response interception handles authentication failures globally: on `401`, it removes the saved token and redirects browser users to `/login`. Other HTTP errors are rejected so React Query and the calling feature can handle them. Server-side `fetchData` throws for unsuccessful responses.

## 8. Development Principles

- Keep responsibilities separate: routes compose screens, components render UI, hooks and services own feature behavior, and infrastructure communicates with external systems.
- Prefer reusable shared components and utilities over duplicating common behavior in features.
- Use strict TypeScript contracts for request data, response data, props, and feature boundaries.
- Keep features isolated; expose only the public pieces required by routes or other approved consumers.
- Design additions to scale by following the same feature structure and shared data-access conventions.
- Keep logic testable by separating rendering from validation, request behavior, and data transformation.
