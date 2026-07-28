"use client";

import {CircleAlert} from "lucide-react";

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

        <button
          type="button"
          onClick={reset}
          className="mt-8 cursor-pointer inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
        >
          تلاش مجدد
        </button>
      </section>
    </main>
  );
}
