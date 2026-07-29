"use client";

import {CircleAlert} from "lucide-react";

import {Button} from "@/shared/components/common/button/button";

interface GlobalErrorProps {
  error: Error & {digest?: string};
  reset: () => void;
}

export default function GlobalError({error, reset}: GlobalErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8 sm:px-6">
      <section
        aria-labelledby="error-title"
        className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-950/5 sm:p-10"
      >
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-red-100 text-red-600">
          <CircleAlert aria-hidden="true" className="size-7" />
        </div>

        <h1
          id="error-title"
          className="mt-6 text-2xl font-semibold tracking-tight text-slate-900"
        >
          مشکلی پیش آمده است
        </h1>

        <p className="mt-3 wrap-break-word text-sm leading-6 text-slate-600">
          {error.message ||
            "خطایی غیرمنتظره رخ داده است. لطفاً دوباره تلاش کنید."}
        </p>

        <Button
          type="button"
          variant="dark"
          size="xl"
          onClick={reset}
          className="mt-8 min-h-11 rounded-lg"
        >
          تلاش مجدد
        </Button>
      </section>
    </main>
  );
}
