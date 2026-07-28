# Authentication

## Feature Goal

Authentication verifies a user's identity with a mobile number and password, then permits access to protected application areas only after a successful login. It prevents unauthenticated users from accessing dashboard pages and data.

The flow is implemented in `src/features/auth/login`: the login form submits the request, shared utilities persist the token, and `AuthGuard` in `src/shared/provider/AuthGuard` checks authentication before rendering dashboard routes. Axios removes the token and redirects to `/login` when a `401` response is received.

## APIs

### User login

- **HTTP method:** `POST`
- **Endpoint:** `/api/users/login`
- **Request body:**

```json
{
  "phone": "string",
  "password": "string"
}
```

- **Response:** The application receives the response in the shared API envelope; the token is in `result`:

```json
{
  "result": {
    "accessToken": "string"
  },
  "message": "string"
}
```

  The feature uses `result.accessToken`.

- **Description:** Validates the mobile number and password, then returns an access token on success.
- **Implementation:** The request is defined in `src/features/auth/login/services/useLoginMutation.ts` with `POST` and the relative URL `users/login`; the default `BASE_URL` ends with `/api`.
- **Consumer:** The TanStack React Query hook is `useAdminLogin`, built on `useMutate` in `src/infrastructure/client/api/useMutate.ts` and consumed by `LoginForm`.

## States

- **Authentication state:** `AuthGuard` manages local React state with `isAuthenticated` and `checking`. It checks for a token on mount and renders `LoadingScreen` while the check is in progress.
- **Token state:** The access token is managed by `getToken`, `setToken`, and `removeToken` in `src/shared/utils/token.ts`, and persisted in `localStorage` under the `paraf_access_token` key. It survives a browser refresh.
- **Login mutation state:** TanStack React Query, through `useAdminLogin`, manages mutation states such as `isPending`, `isSuccess`, and `isError`. The form currently uses `isPending` to show a loading button.
- **Form and validation state:** React Hook Form manages form values and validation errors. Zod's `loginSchema` validates an Iranian mobile number and a password with at least eight characters.
- **Error state:** React Query retains request errors. `useMutate` can show an error toast, but login configures `hideToast: true`. The Axios interceptor removes the token and redirects after a `401` response.

## User Flow

1. The user opens `/login`.
2. The user enters a mobile number and password in `LoginForm`.
3. React Hook Form manages the values and Zod validates them.
4. If the form is valid, the `useAdminLogin` mutation sends the login request.
5. The API returns the access token in `result.accessToken`.
6. The form saves the token to `localStorage` and redirects the user to `/`.
7. `AuthGuard` in the dashboard layout checks for the token, then renders the protected route.

```text
User
  ↓
Login Form
  ↓
React Hook Form + Zod
  ↓
Login API
  ↓
Store accessToken
  ↓
AuthGuard
  ↓
Dashboard
```

## Edge Cases

- **Invalid credentials:** The mutation stores the request error and the user remains on the login page. Toasts are disabled for this mutation, so the UI should display the mutation error when needed.
- **`401` response:** The Axios interceptor removes the local token and redirects to `/login` unless the user is already there.
- **Missing token:** `AuthGuard` stops the protected page from rendering and redirects the user to `/login`.
- **Token manually removed from `localStorage`:** On the next page load or refresh, the guard detects the missing token and redirects.
- **Expired token:** The client does not validate or refresh tokens itself. If the server returns `401`, the token-removal and re-login flow runs.
- **Network error during login:** The mutation enters an error state, no token is stored, and the user can retry.
- **Browser refresh:** The token is read from `localStorage`; `AuthGuard` checks it before showing the protected page.
- **Direct access to a protected route:** The dashboard layout applies `AuthGuard`; a user without a token is redirected to `/login`.
