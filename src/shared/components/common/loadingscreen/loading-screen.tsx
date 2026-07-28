import {Loader2} from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Glow animation */}
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />

          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />

          {/* Spinning ring */}
          <div className="absolute inset-1 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />

          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
