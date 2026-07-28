import Image from "next/image";
import {ClipboardList, Flag} from "lucide-react";

import {Button} from "@/shared/components/ui/button";
import {ImagePlaceholder} from "@/features/CustomerClub/components/ImagePlaceholder";
import type {ClubProfileData} from "@/features/CustomerClub/constants/mockData";

interface LevelProgressProps {
  data: ClubProfileData;
}

export function LevelProgress({data}: LevelProgressProps) {
  const reversedLevels = [...data.levels].reverse();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-[28px] bg-[#D8C9F8]/70 p-4 sm:p-5 lg:flex-row-reverse lg:items-center lg:gap-5 lg:p-6">
        <div className="min-w-0 flex-1 px-1 pt-2 sm:px-4">
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute top-[28px] right-8 left-8 h-2.5 rounded-full bg-white/70 sm:top-[32px]" />
            <div
              className="absolute top-[28px] left-8 h-2.5 rounded-full bg-[#7B5CF5] sm:top-[32px]"
              style={{width: `calc(${data.progressPercent}% - 2rem)`}}
            />

            <div className="relative z-10 flex flex-row-reverse items-start justify-between">
              <div className="flex w-20 flex-col-reverse items-center gap-2 sm:w-24">
                <div className="flex size-12 items-center justify-center rounded-full bg-white shadow-sm sm:size-14">
                  <Flag className="size-5 rotate-180 text-slate-400 sm:size-6" />
                </div>
                <span className="text-center text-[11px] text-slate-600 sm:text-xs">
                  {data.startLabel}
                </span>
              </div>

              <div className="relative flex w-24 flex-col-reverse items-center gap-2 sm:w-28">
                <span className="absolute -bottom-1 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#7B5CF5] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
                  {data.pointsValue}
                </span>
                {data.currentLevelIconUrl ? (
                  <Image
                    src={data.currentLevelIconUrl}
                    alt={data.currentLevelLabel}
                    width={64}
                    height={64}
                    className="size-14 rounded-full bg-white object-cover shadow-sm sm:size-16"
                    unoptimized
                  />
                ) : (
                  <ImagePlaceholder
                    className="size-14 rounded-full border-0 bg-white shadow-sm sm:size-16"
                    label="current-level"
                  />
                )}
                <span className="text-center text-[11px] font-medium text-slate-700 sm:text-xs">
                  {data.currentLevelLabel}
                </span>
              </div>

              <div className="flex w-24 flex-col-reverse items-center gap-2 sm:w-28">
                {data.nextLevelIconUrl ? (
                  <Image
                    src={data.nextLevelIconUrl}
                    alt={data.nextLevelLabel}
                    width={64}
                    height={64}
                    className="size-14 rounded-full bg-white/80 object-cover shadow-sm sm:size-16"
                    unoptimized
                  />
                ) : (
                  <ImagePlaceholder
                    className="size-14 rounded-full border-0 bg-white/80 shadow-sm sm:size-16"
                    label="next-level"
                  />
                )}
                <span className="text-center text-[11px] text-slate-600 sm:text-xs">
                  {data.nextLevelLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col-reverse items-center gap-3 rounded-[24px] bg-[#C8E8F8]/90 px-5 py-4 sm:min-w-[160px]">
          <p className="max-w-[9rem] text-center text-xs leading-relaxed text-slate-700 sm:text-sm">
            {data.pointsToNext}{" "}
            {data.pointsNeeded ? (
              <span className="font-bold text-sky-600">{data.pointsNeeded}</span>
            ) : null}
          </p>
          <Button
            variant="outline-primary"
            className="h-10 flex-row-reverse rounded-xl border-sky-400 bg-white px-5 text-sm text-sky-600 hover:bg-sky-50"
            icon={<ClipboardList className="size-4" />}
          >
            {data.missionsButton}
          </Button>
        </div>
      </div>

      <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-3 rounded-2xl bg-white/60 px-4 py-3 sm:justify-between sm:gap-2 sm:px-8">
        {reversedLevels.map((level, index) => (
          <div
            key={level.id}
            className="flex flex-row-reverse items-center gap-3 sm:gap-4"
          >
            <div className="flex flex-row-reverse items-center gap-2">
              {level.iconUrl ? (
                <Image
                  src={level.iconUrl}
                  alt={level.label}
                  width={36}
                  height={36}
                  className="size-8 rounded-full object-cover sm:size-9"
                  unoptimized
                />
              ) : (
                <ImagePlaceholder
                  className="size-8 rounded-full border-0 bg-slate-100 sm:size-9"
                  label={level.id}
                />
              )}
              <span className="text-xs text-slate-600 sm:text-sm">
                {level.label}
              </span>
            </div>
            {index < reversedLevels.length - 1 ? (
              <span
                aria-hidden
                className="hidden h-px w-8 bg-slate-300 sm:block lg:w-14"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
