"use client";

import {useState} from "react";
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
import {Badge} from "@/shared/components/common/badge/badge";
import {Button} from "@/shared/components/common/button/button";
import {Card} from "@/shared/components/common/card/card";
import {cn} from "@/shared/lib/cn";

const iconStyles: Record<ActivityType, {wrap: string; Icon: typeof Zap}> = {
  score: {wrap: "bg-teal-50 text-teal-500", Icon: Zap},
  coin: {wrap: "bg-sky-50 text-sky-500", Icon: Link2},
  dual: {wrap: "bg-violet-50 text-violet-500", Icon: Sparkles},
  withdraw: {wrap: "bg-amber-50 text-amber-500", Icon: Wallet},
  transfer: {wrap: "bg-rose-50 text-rose-500", Icon: ArrowLeftRight},
};

function ActivityRow({item}: {item: ActivityItem}) {
  const {wrap, Icon} = iconStyles[item.type];

  return (
    <li className="border-b border-slate-100 py-3 last:border-b-0">
      <div className="flex items-start gap-2.5 sm:items-center sm:gap-3">
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full sm:size-9",
            wrap,
          )}
        >
          <Icon className="size-3.5 sm:size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
            <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <p className="shrink-0 text-sm font-bold text-slate-800">
                {item.amount}
              </p>
              <p className="min-w-0 text-right text-xs leading-relaxed text-slate-500 sm:truncate sm:text-sm">
                {item.description}
              </p>
            </div>

            <Badge
              variant="status"
              className="hidden shrink-0 sm:inline-flex"
            >
              {item.status}
            </Badge>

            <time className="hidden w-24 shrink-0 text-left text-[11px] text-slate-400 sm:block sm:w-28 sm:text-xs">
              {item.time}
            </time>
          </div>

          <div className="mt-1.5 flex items-center justify-between gap-2 sm:hidden">
            <Badge variant="status-sm">{item.status}</Badge>
            <time className="text-[10px] text-slate-400">{item.time}</time>
          </div>
        </div>
      </div>
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
    <Card
      variant="elevated"
      className="flex h-full flex-col p-4 sm:p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 text-right">
          <h3 className="text-base font-bold text-slate-800 sm:text-lg">
            {recentActivitiesMeta.title}
          </h3>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {recentActivitiesMeta.subtitle}
          </p>
        </div>

        <Button
          type="button"
          variant="ghost-muted"
          size="auto"
          className="shrink-0 gap-1.5 text-xs sm:text-sm"
          icon={<Eye className="size-4" />}
        >
          <span className="max-sm:sr-only">
            {recentActivitiesMeta.fullListLabel}
          </span>
        </Button>
      </div>

      <div className="-mx-1 mb-4 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
        {activityFilters.map((tab) => (
          <Button
            key={tab.value}
            type="button"
            size="pill"
            variant={filter === tab.value ? "pill-active" : "pill"}
            onClick={() => setFilter(tab.value)}
            className="shrink-0"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <ul className="min-h-0 max-h-80 flex-1 overflow-y-auto sm:max-h-none">
        {items.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
}
