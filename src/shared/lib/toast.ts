import { toast as sonnerToast } from "sonner";

type ToastOptions = Parameters<typeof sonnerToast.success>[1];

/**
 * Small wrapper around `sonner` toast utilities to centralize usage and types.
 *
 * Methods intentionally mirror `sonner` and accept the same `options` shape.
 */
export const showToast = {
  /**
   * Show a success toast.
   *
   * @param message - Message to display to the user.
   * @param options - Optional `sonner` toast options.
   */
  success(message: string, options?: ToastOptions) {
    return sonnerToast.success(message, options);
  },

  /**
   * Show an error toast.
   *
   * @param message - Error message to display.
   * @param options - Optional `sonner` toast options.
   */
  error(message: string, options?: ToastOptions) {
    return sonnerToast.error(message, options);
  },
};
