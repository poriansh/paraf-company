import { toast as sonnerToast } from "sonner";

type ToastOptions = Parameters<typeof sonnerToast.success>[1];

export const showToast = {
  success(message: string, options?: ToastOptions) {
    return sonnerToast.success(message, options);
  },

  error(message: string, options?: ToastOptions) {
    return sonnerToast.error(message, options);
  },
};
