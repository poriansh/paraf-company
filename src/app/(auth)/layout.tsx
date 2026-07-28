import type {ReactNode} from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="bg-linear-to-br h-screen from-primary/10 via-background to-secondary/40 p-4">
      <div className="w-full flex h-full  justify-center items-center">
        {children}
      </div>
    </div>
  );
}
