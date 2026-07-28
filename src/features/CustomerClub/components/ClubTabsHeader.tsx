import {TabsList, TabsTrigger} from "@/shared/components/common/tabs/tabs";
import { clubLinks } from "@/features/CustomerClub/constants/mockData";
import type { VitrinUser } from "@/features/CustomerClub/types/vitrin.types";

interface ClubTabsHeaderProps {
  users: VitrinUser[];
}

export function ClubTabsHeader({ users }: ClubTabsHeaderProps) {
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-col-reverse items-stretch gap-3 sm:flex-row-reverse sm:items-center sm:justify-end">
        <span className="shrink-0 text-center text-sm font-medium text-slate-600 sm:text-right">
          انتخاب باشگاه مشتریان
        </span>

        <div className="-mx-1 overflow-x-auto px-1 scrollbar-none">
          <TabsList className="inline-flex h-auto min-w-min flex-row-reverse gap-0 rounded-xl bg-slate-200/70 p-1">
            {[...users].reverse().map((user) => (
              <TabsTrigger
                key={user.id}
                value={String(user.id)}
                className="
                  shrink-0 cursor-pointer rounded-lg px-3 py-2 text-xs font-medium text-slate-500 shadow-none
                  sm:px-4 sm:py-2.5 sm:text-sm
                  data-[state=active]:bg-white data-[state=active]:text-sky-600
                  data-[state=active]:shadow-sm
                  data-[state=active]:ring-1 data-[state=active]:ring-sky-400/70
                "
              >
                {user?.companyName ?? "پروفایل شخصی"}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:justify-start sm:gap-5 sm:text-sm">
        {[...clubLinks].reverse().map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-slate-700"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
