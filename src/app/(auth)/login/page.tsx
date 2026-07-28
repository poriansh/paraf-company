import {Gem} from "lucide-react";

import {LoginForm} from "@/features/auth/login";

export const metadata = {
  title: "ورود",
  description: "ورود به باشگاه مشتریان پارف",
};

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center px-1">
      <div className="mb-5 flex flex-col items-center gap-2.5 text-center sm:mb-6 sm:gap-3">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <Gem className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          باشگاه مشتریان پارف
        </h1>
        <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">
          برای دسترسی به داشبورد باشگاه، وارد حساب کاربری خود شوید.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
