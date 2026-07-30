/**
 * Base API URL used across the client and server.
 *
 * Pulled from `NEXT_PUBLIC_API_URL` at runtime. Fall back behavior is
 * handled by callers that may provide a default when the value is undefined.
 */
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
