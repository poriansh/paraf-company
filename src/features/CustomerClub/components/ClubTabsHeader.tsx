import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { clubLinks } from "@/features/CustomerClub/constants/mockData";
import type { VitrinUser } from "@/features/CustomerClub/types/vitrin.types";

interface ClubTabsHeaderProps {
  users: VitrinUser[];
}

export function ClubTabsHeader({ users }: ClubTabsHeaderProps) {
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
      <div className="flex flex-row-reverse flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-slate-600">
          انتخاب باشگاه مشتریان
        </span>

        <TabsList className="h-auto flex-row-reverse gap-0 rounded-xl bg-slate-200/70 p-1">
          {[...users].reverse().map((user) => (
            <TabsTrigger
              key={user.id}
              value={String(user.id)}
              className="
                rounded-lg cursor-pointer px-4 py-2.5 text-sm font-medium text-slate-500 shadow-none
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

      <div className="flex flex-row-reverse flex-wrap items-center gap-5 text-sm text-slate-500">
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
