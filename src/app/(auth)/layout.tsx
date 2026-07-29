import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به باشگاه مشتریان پاراف",
};

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="min-h-dvh bg-linear-to-br from-primary/10 via-background to-secondary/40 p-4 sm:p-6">
      <div className="flex min-h-[calc(100dvh-2rem)] w-full items-center justify-center sm:min-h-[calc(100dvh-3rem)]">
        {children}
      </div>
    </div>
  );
}
