import {
  BellRing,
  ChevronDown,
  Grid2X2,
  Languages,
  Search,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

import {Button} from "@/shared/components/common/button/button";
import {Input} from "@/shared/components/common/input/input";
import {Container} from "@/shared/components/layout/container";

const navigationItems = [
  {label: "کالا", hasMenu: true},
  {label: "خدمات", hasMenu: true},
  {label: "فروشندگان"},
  {label: "نمایندگی‌ها"},
];

export function DashboardHeader() {
  return (
    <header className="border-b border-[#e7ebed] bg-white">
      <Container className="flex h-14 items-center gap-2 sm:h-16 sm:gap-5 md:h-18.5">
        <div className="flex w-full items-center justify-between gap-2 sm:gap-5">
          <a aria-label="پاراف" className="shrink-0" href="#">
            <Image
              alt="پاراف؛ بازار کالا و خدمات"
              className="h-7 w-auto max-w-28 object-contain sm:h-9 sm:max-w-none md:h-10"
              height={40}
              priority
              src="/logo/logo.png"
              width={206}
            />
          </a>

          <nav
            aria-label="ناوبری اصلی"
            className=" hidden items-center gap-8 text-[15px] font-semibold text-[#58686f] lg:flex"
          >
            {navigationItems.map(({label, hasMenu}) => (
              <a
                key={label}
                className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#0d94ca]"
                href="#"
              >
                {label}
                {hasMenu && (
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 stroke-[1.5]"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="relative mx-auto hidden w-full max-w-87.5 xl:block">
            <Input
              aria-label="جستجو در آگهی‌ها"
              variant="search"
              placeholder="جستجو در آگهی‌ها..."
              type="search"
              startIcon={
                <Search
                  aria-hidden="true"
                  className="size-5 stroke-[1.7]"
                />
              }
            />
          </div>

          <div
            className="hidden cursor-pointer shrink-0 items-center gap-1 text-[13px] font-semibold text-[#9ba7aa] md:flex"
            dir="ltr"
          >
            <Languages aria-hidden="true" className="size-4 text-[#b7c0c3]" />
            <span>فارسی</span>
            <span className="text-[#ccd2d4]">/</span>
            <span>IRT</span>
          </div>

          <a
            className="hidden shrink-0 border-r border-[#e7ebed] pr-8 text-[15px] font-bold text-[#172125] md:block"
            href="#"
          >
            ثبت آگهی جدید
          </a>

          <div className="flex shrink-0 items-center gap-2.5 border-r border-[#e7ebed] pr-2.5 text-[#20272a] sm:gap-5 sm:pr-6">
            <Button
              aria-label="اعلان‌ها"
              variant="header-icon"
              size="auto"
              type="button"
            >
              <BellRing className="size-5 stroke-[1.8]" />
            </Button>
            <Button
              aria-label="سبد خرید"
              variant="header-icon"
              size="auto"
              type="button"
            >
              <ShoppingCart className="size-5 stroke-[1.8]" />
            </Button>
            <Button
              aria-label="منو"
              variant="header-icon"
              size="auto"
              type="button"
            >
              <Grid2X2 className="size-4.75 stroke-2" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
