import {Trophy} from "lucide-react";

import {ActivityChart} from "@/features/ActivitySection/components/ActivityChart";
import {chartMeta} from "@/features/ActivitySection/constants/mockData";
import {Button} from "@/shared/components/common/button/button";

export function ActivityChartCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(80,100,160,0.08)] sm:rounded-3xl sm:p-6">
      <h3 className="mb-4 text-right text-base font-bold text-slate-800 sm:text-lg">
        {chartMeta.title}
      </h3>

      <div className="mb-5 rounded-2xl bg-slate-50 px-4 py-3.5">
        <p className="mb-3 flex items-start gap-1.5 text-right text-xs leading-relaxed text-slate-600 sm:text-sm">
          <span>{chartMeta.alert}</span>
          <Trophy className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
        </p>
        <div className="flex flex-wrap justify-start gap-2">
          <Button
            variant="outline-primary"
            size="sm"
            className="h-8 rounded-lg border-sky-400 px-3 text-xs text-sky-600 hover:bg-sky-50"
          >
            {chartMeta.inviteCta}
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            className="h-8 rounded-lg border-sky-400 px-3 text-xs text-sky-600 hover:bg-sky-50"
          >
            {chartMeta.surveyCta}
          </Button>
        </div>
      </div>

      <p className="mb-1 text-right text-xs text-slate-500 sm:text-sm">
        {chartMeta.subtitle}
      </p>
      <p className="mb-4 text-right text-xs text-slate-600 sm:text-sm">
        {chartMeta.changePrefix}{" "}
        <span className="font-bold text-rose-500">{chartMeta.changeHighlight}</span>{" "}
        {chartMeta.changeSuffix}
      </p>

      <div className="mt-auto">
        <ActivityChart />
      </div>
    </div>
  );
}
