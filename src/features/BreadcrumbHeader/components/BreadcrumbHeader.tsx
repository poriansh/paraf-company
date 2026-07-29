"use client";

import {ArrowRight, ChevronLeft, CircleQuestionMark} from "lucide-react";

import {Button} from "@/shared/components/common/button/button";
import {Container} from "@/shared/components/layout/container";
import {useCurrentUser} from "@/shared/services/useCurrentUser";

import {WalletBalance} from "./WalletBalance";

export function BreadcrumbHeader() {
  const {data: user} = useCurrentUser();

  return (
    <div className="min-h-14 w-full border-b bg-[rgb(245,247,247)] py-2">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 text-sm text-gray-400 sm:gap-5">
            <Button
              type="button"
              variant="ghost"
              size="auto"
              className="gap-2 text-sm text-gray-700 hover:bg-transparent hover:text-gray-900"
              icon={<ArrowRight size={18} />}
            >
              برگشت
            </Button>
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

            <Button
              type="button"
              aria-label="راهنما"
              variant="outline-soft"
              size="rounded-sm"
            >
              <CircleQuestionMark size={15} />
            </Button>

            <WalletBalance count={user?.scores} />
          </div>
        </div>
      </Container>
    </div>
  );
}
