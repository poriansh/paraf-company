import {Gem} from "lucide-react";

import {LoginForm} from "@/features/auth/login";

export const metadata = {
  title: "ورود",
  description: "ورود به باشگاه مشتریان پارف",
};

export default function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center flex-col max-w-md">
      <div className="mb-6 flex flex-col items-center gap-3 text-center">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <Gem className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          باشگاه مشتریان پارف
        </h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          برای دسترسی به داشبورد باشگاه، وارد حساب کاربری خود شوید.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
