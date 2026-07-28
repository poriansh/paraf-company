import type {LevelItem} from "@/features/CustomerClub/types/level.types";
import {getFileUrl} from "@/shared/utils/image";
import {formatPersianNumber} from "@/shared/lib/format";

export interface ClubLevelView {
  id: string;
  label: string;
  iconUrl: string | null;
  scores: number;
}

export interface LevelProgressView {
  levels: ClubLevelView[];
  currentLevelLabel: string;
  nextLevelLabel: string;
  currentLevelIconUrl: string | null;
  nextLevelIconUrl: string | null;
  pointsValue: string;
  points: string;
  level: string;
  pointsToNext: string;
  pointsNeeded: string;
  progressPercent: number;
  startLabel: string;
}

function parseScore(value?: string | number | null): number {
  if (value === undefined || value === null || value === "") return 0;
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

export function buildLevelProgress(
  levels: LevelItem[] | undefined,
  rawScore: string | number | null | undefined,
): LevelProgressView {
  const score = parseScore(rawScore);
  const sorted = [...(levels ?? [])]
    .map((level) => ({
      id: String(level.id),
      label: level.name.trim(),
      iconUrl: getFileUrl(level.file?.link),
      scores: parseScore(level.scores),
    }))
    .sort((a, b) => a.scores - b.scores);

  const currentIndex = sorted.reduce(
    (acc, level, index) => (score >= level.scores ? index : acc),
    -1,
  );

  const current = currentIndex >= 0 ? sorted[currentIndex] : null;
  const next =
    currentIndex + 1 < sorted.length ? sorted[currentIndex + 1] : null;

  const floor = current?.scores ?? 0;
  const ceiling = next?.scores ?? current?.scores ?? 1;
  const range = Math.max(ceiling - floor, 1);
  const progressPercent = next
    ? Math.min(100, Math.max(0, ((score - floor) / range) * 100))
    : current
      ? 100
      : 0;

  const pointsNeeded = next ? Math.max(next.scores - score, 0) : 0;

  return {
    levels: sorted,
    currentLevelLabel: current?.label ?? "سطح اولیه",
    nextLevelLabel: next?.label ?? current?.label ?? "سطح نهایی",
    currentLevelIconUrl: current?.iconUrl ?? null,
    nextLevelIconUrl: next?.iconUrl ?? current?.iconUrl ?? null,
    pointsValue: formatPersianNumber(score),
    points: `${formatPersianNumber(score)} امتیاز`,
    level: current?.label ?? "بدون سطح",
    pointsToNext: next
      ? `امتیاز لازم تا ${next.label}`
      : "شما در بالاترین سطح هستید",
    pointsNeeded: next ? `+${formatPersianNumber(pointsNeeded)}` : "",
    progressPercent,
    startLabel: "کاربر عادی",
  };
}
