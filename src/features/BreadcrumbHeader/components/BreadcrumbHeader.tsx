"use client";

import { ArrowRight, ChevronLeft, CircleQuestionMark } from "lucide-react";
import { WalletBalance } from "./WalletBalance";
import { Container } from "@/shared/components/layout/container";
import { useCurrentUser } from "@/shared/services/useCurrentUser";

export function BreadcrumbHeader() {
  const { data: user } = useCurrentUser();

  return (
    <div className="min-h-14 w-full border-b bg-[rgb(245,247,247)] py-2">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 text-sm text-gray-400 sm:gap-5">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
            >
              <ArrowRight size={18} />
              برگشت
            </button>
            <div className="hidden items-center gap-2.5 sm:flex">
              <span>صفحه اصلی</span>
              <ChevronLeft className="size-4" />
              <span className="text-gray-700">بارافک</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-6">
            <div className="hidden h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-sm sm:flex md:px-4">
              <span className="text-gray-400">کیف پول:</span>
              <span className="font-bold text-gray-700">—</span>
              <span className="text-xs text-gray-400">
                {user?.defaultCurrency.name}
              </span>
            </div>

            <button
              type="button"
              aria-label="راهنما"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-400"
            >
              <CircleQuestionMark size={15} />
            </button>

            <WalletBalance count={user?.scores} />
          </div>
        </div>
      </Container>
    </div>
  );
}
