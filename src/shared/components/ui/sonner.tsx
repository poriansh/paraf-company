import {Toaster as SonnerToaster} from "sonner";


export function Toaster() {
  return (
    <SonnerToaster
      closeButton
      richColors
      position="top-center"
      dir="rtl"
      className="text-center"
      duration={3000}
    />
  );
}
