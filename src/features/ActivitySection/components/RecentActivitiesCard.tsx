"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  Eye,
  Link2,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";

import {
  activityFilters,
  recentActivitiesMeta,
  recentActivitiesMock,
  type ActivityFilter,
  type ActivityItem,
  type ActivityType,
} from "@/features/ActivitySection/constants/mockData";
import { cn } from "@/shared/lib/cn";

const iconStyles: Record<
  ActivityType,
  { wrap: string; Icon: typeof Zap }
> = {
  score: { wrap: "bg-teal-50 text-teal-500", Icon: Zap },
  coin: { wrap: "bg-sky-50 text-sky-500", Icon: Link2 },
  dual: { wrap: "bg-violet-50 text-violet-500", Icon: Sparkles },
  withdraw: { wrap: "bg-amber-50 text-amber-500", Icon: Wallet },
  transfer: { wrap: "bg-rose-50 text-rose-500", Icon: ArrowLeftRight },
};

function ActivityRow({ item }: { item: ActivityItem }) {
  const { wrap, Icon } = iconStyles[item.type];

  return (
    <li className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-b-0">
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full",
          wrap,
        )}
      >
        <Icon className="size-4" />
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <p className="shrink-0 text-sm font-bold text-slate-800">{item.amount}</p>
        <p className="min-w-0 flex-1 truncate text-right text-xs text-slate-500 sm:text-sm">
          {item.description}
        </p>
      </div>

      <span className="hidden shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600 sm:inline-block">
        {item.status}
      </span>

      <time className="w-24 shrink-0 text-left text-[11px] text-slate-400 sm:w-28 sm:text-xs">
        {item.time}
      </time>
    </li>
  );
}

export function RecentActivitiesCard() {
  const [filter, setFilter] = useState<ActivityFilter>("all");

  const items =
    filter === "all"
      ? recentActivitiesMock
      : recentActivitiesMock.filter((item) => item.type === filter);

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-white p-5 shadow-[0_8px_30px_rgba(80,100,160,0.08)] sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="text-right">
          <h3 className="text-base font-bold text-slate-800 sm:text-lg">
            {recentActivitiesMeta.title}
          </h3>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {recentActivitiesMeta.subtitle}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-slate-700 sm:text-sm"
        >
          <Eye className="size-4" />
          {recentActivitiesMeta.fullListLabel}
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {activityFilters.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setFilter(tab.value)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
              filter === tab.value
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul className="min-h-0 flex-1 overflow-y-auto">
        {items.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
