export const clubLinks = [
  {label: "سوالات متداول شما", href: "#"},
  {label: "قوانین و مقررات", href: "#"},
] as const;

export const clubStaticCopy = {
  missionAlert: "وقت کمی مونده، ماموریتت رو همین الان انجام بده",
  missionCta: "مشاهده ماموریت",
  missionsButton: "ماموریت‌ها",
  recentLabel: "۳۰ روز اخیر",
} as const;

export interface ClubProfileData {
  name: string;
  title: string;
  missionsCompleted: string;
  missionAlert: string;
  missionCta: string;
  coins: string;
  coinsValue: string;
  level: string;
  points: string;
  pointsValue: string;
  recentLabel: string;
  recentCoins: string;
  pointsToNext: string;
  pointsNeeded: string;
  missionsButton: string;
  currentLevelLabel: string;
  nextLevelLabel: string;
  startLabel: string;
  progressPercent: number;
  levels: {id: string; label: string; iconUrl?: string | null}[];
  profileImageUrl?: string | null;
  currentLevelIconUrl?: string | null;
  nextLevelIconUrl?: string | null;
  isVerified?: boolean;
}
