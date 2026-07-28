import {ArrowRight, ChevronLeft, CircleQuestionMark} from "lucide-react";
import {WalletBalance} from "./WalletBalance";
import {Container} from "@/shared/components/layout/container";

export function BreadcrumbHeader() {
  return (
    <div className="h-14 w-full border-b bg-[rgb(245,247,247)]   flex  items-center justify-between">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 text-sm text-gray-400">
            <button className="flex cursor-pointer items-center gap-2 text-gray-700 text-sm">
              <ArrowRight size={18} />
              برگشت
            </button>
            <div className="flex gap-2.5 items-center">
              <span>صفحه اصلی</span>
              <ChevronLeft />
              <span className="text-gray-700">بارافک</span>
            </div>
          </div>

          {/* Left Side */}
          <div className="flex items-center gap-6">
            {/* Wallet */}
            <div className="h-10 px-4 rounded-xl border border-gray-200 flex bg-white items-center gap-2 text-sm">
              <span className="text-gray-400">کیف پول:</span>
              <span className="font-bold text-gray-700">۱۷۳,۷۹۵,۰۵۰</span>
              <span className="text-gray-400 text-xs">تومان</span>
            </div>

            {/* Help */}
            <div className="w-8 h-8 cursor-pointer rounded-full border flex items-center justify-center bg-white text-gray-400">
              <CircleQuestionMark size={15}/>
            </div>

            {/* Counter */}
            <WalletBalance />
          </div>
        </div>
      </Container>
    </div>
  );
}
