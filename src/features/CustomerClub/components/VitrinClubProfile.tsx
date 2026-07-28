"use client";

import {useVitrinDetail} from "@/features/CustomerClub/services/useVitrinDetail";
import {useLevels} from "@/features/CustomerClub/services/useLevels";
import {useCustomerClubSummaryVitrin} from "@/features/CustomerClub/services/useCustomerClubSummaryVitrin";
import {ProfileCard} from "@/features/CustomerClub/components/ProfileCard";
import {LevelProgress} from "@/features/CustomerClub/components/LevelProgress";
import {clubStaticCopy} from "@/features/CustomerClub/constants/mockData";
import type {ClubProfileData} from "@/features/CustomerClub/constants/mockData";
import {buildLevelProgress} from "@/features/CustomerClub/utils/buildLevelProgress";
import {formatPersianNumber} from "@/shared/lib/format";
import {getFileUrl} from "@/shared/utils/image";

interface VitrinClubProfileProps {
  userVitrinId: number;
}

export function VitrinClubProfile({userVitrinId}: VitrinClubProfileProps) {
  const {data: vitrin, isLoading: vitrinLoading} = useVitrinDetail(userVitrinId);
  const {data: levels, isLoading: levelsLoading} = useLevels(userVitrinId);
  const {data: summary} = useCustomerClubSummaryVitrin(userVitrinId);

  const score = vitrin?.scores ?? vitrin?.level?.scores;
  const progress = buildLevelProgress(levels, score);
  const missions = summary?.numberTasksCompleted ?? 0;
  const monthlyScore = summary?.totalScoreMonthly ?? 0;

  const cityName = vitrin?.citiesRow?.[0]?.name;
  const activityName =
    vitrin?.fieldOfActivity?.name ?? vitrin?.businessActivity?.name;
  const titleParts = [activityName, cityName].filter(Boolean);

  const data: ClubProfileData = {
    name: vitrin?.companyName ?? "—",
    title: titleParts.join(" / ") || "باشگاه مشتریان",
    missionsCompleted: `${formatPersianNumber(missions)} ماموریت انجام شده`,
    missionAlert: clubStaticCopy.missionAlert,
    missionCta: clubStaticCopy.missionCta,
    coins: `${formatPersianNumber(monthlyScore)} امتیاز`,
    coinsValue: clubStaticCopy.recentLabel,
    level: vitrin?.level?.name?.trim() || progress.level,
    points: progress.points,
    pointsValue: progress.pointsValue,
    recentLabel: clubStaticCopy.recentLabel,
    recentCoins: `${formatPersianNumber(monthlyScore)} امتیاز`,
    pointsToNext: progress.pointsToNext,
    pointsNeeded: progress.pointsNeeded,
    missionsButton: clubStaticCopy.missionsButton,
    currentLevelLabel: vitrin?.level?.name?.trim() || progress.currentLevelLabel,
    nextLevelLabel: progress.nextLevelLabel,
    startLabel: progress.startLabel,
    progressPercent: progress.progressPercent,
    levels: progress.levels,
    profileImageUrl:
      getFileUrl(vitrin?.logo?.link) ?? getFileUrl(vitrin?.user?.file?.link),
    currentLevelIconUrl:
      getFileUrl(vitrin?.level?.file?.link) ?? progress.currentLevelIconUrl,
    nextLevelIconUrl: progress.nextLevelIconUrl,
    isVerified: Boolean(vitrin?.isGoldenVerified || vitrin?.authenticatedVitrin),
  };

  if (vitrinLoading || levelsLoading) {
    return (
      <div className="rounded-[28px] bg-white/70 px-6 py-16 text-center text-sm text-slate-400">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ProfileCard data={data} />
      <LevelProgress data={data} />
    </div>
  );
}
