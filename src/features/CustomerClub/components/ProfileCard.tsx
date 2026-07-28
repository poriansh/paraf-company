import Image from "next/image";
import {BadgeCheck, CircleAlert, ExternalLink, SquareCheck} from "lucide-react";

import {Button} from "@/shared/components/common/button/button";

import type {ClubProfileData} from "@/features/CustomerClub/constants/mockData";

interface ProfileCardProps {
  data: ClubProfileData;
}

export function ProfileCard({data}: ProfileCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(80,100,160,0.08)] sm:rounded-[28px] sm:p-6 lg:p-7">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.95fr_1.15fr] lg:items-center lg:gap-4 xl:gap-6">
        <div className="order-2 flex flex-col gap-3 lg:order-0">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="flex flex-row-reverse items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 px-2.5 py-2.5 sm:gap-2.5 sm:px-3 sm:py-3">
              <div className="min-w-0 text-left">
                <p className="text-sm font-bold text-slate-800 sm:text-base">
                  {data.coins}
                </p>
                <p className="truncate text-[11px] text-slate-400 sm:text-xs">
                  {data.coinsValue}
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 px-2.5 py-2.5 sm:gap-2.5 sm:px-3 sm:py-3">
              {data.currentLevelIconUrl ? (
                <Image
                  src={data.currentLevelIconUrl}
                  alt={data.level}
                  width={48}
                  height={48}
                  className="size-10 shrink-0 rounded-xl object-cover sm:size-12"
                  unoptimized
                />
              ) : null}
              <div className="min-w-0 text-left">
                <p className="truncate text-sm font-bold text-slate-800 sm:text-base">
                  {data.level}
                </p>
                <p className="truncate text-[11px] text-slate-400 sm:text-xs">
                  {data.points}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse flex-wrap items-center justify-end gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-2.5 py-1">
              {data.recentLabel}
            </span>
            <span>{data.recentCoins}</span>
          </div>
        </div>

        <div className="order-3 flex flex-col-reverse items-stretch gap-3 lg:order-0 lg:items-center">
          <div className="flex flex-row-reverse items-start gap-2 rounded-xl bg-rose-50 px-3 py-2.5 text-xs leading-relaxed text-rose-600 sm:items-center sm:text-sm">
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-rose-500 sm:mt-0" />
            <span>{data.missionAlert}</span>
          </div>

          <Button
            variant="primary"
            className="h-11 w-full flex-row-reverse rounded-xl bg-sky-500 px-6 text-sm font-medium shadow-none hover:bg-sky-600 lg:w-auto"
            icon={<ExternalLink className="size-4" />}
          >
            {data.missionCta}
          </Button>
        </div>

        <div className="order-1 flex flex-row-reverse items-center gap-3 sm:gap-4 lg:order-0">
          {data.profileImageUrl ? (
            <Image
              src={data.profileImageUrl}
              alt={data.name}
              width={96}
              height={96}
              className="size-16 shrink-0 rounded-2xl object-cover sm:size-20 md:size-24"
              unoptimized
            />
          ) : null}

          <div className="min-w-0 flex-1 text-left">
            <div className="mb-1 flex flex-row-reverse items-center justify-end gap-1.5">
              {data.isVerified ? (
                <BadgeCheck className="size-5 shrink-0 fill-sky-500 text-white" />
              ) : null}
              <h2 className="truncate text-base font-bold text-slate-800 sm:text-lg md:text-xl">
                {data.name}
              </h2>
            </div>
            <p className="mb-2 truncate text-xs text-slate-500 sm:text-sm">
              {data.title}
            </p>
            <div className="flex flex-row-reverse items-center justify-end gap-1.5 text-xs text-slate-600 sm:text-sm">
              <span>{data.missionsCompleted}</span>
              <SquareCheck className="size-4 shrink-0 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
