import {cn} from "@/shared/lib/cn";
import Image from "next/image";

const SCORE_MAX = 200;

interface WalletBalanceProps {
  /**
   * Score/count that drives the visual wallet progress. Can be numeric or
   * stringified number.
   */
  count?: string | number;
}

/**
 * Parse a possibly-empty or string numeric value into a safe finite number.
 *
 * Returns `0` for undefined, empty or non-finite values.
 */
function parseScore(count?: string | number) {
  if (count === undefined || count === "") return 0;
  const numeric = typeof count === "number" ? count : Number(count);
  return Number.isFinite(numeric) ? numeric : 0;
}

/**
 * Compact wallet balance UI showing a progress bar and branded logo.
 *
 * - Accepts `count` and maps it to a `progress` percent within a capped
 *   `SCORE_MAX` range.
 * - Uses `role="progressbar"` for accessibility and animates width.
 */
export function WalletBalance({count}: WalletBalanceProps) {
  const score = parseScore(count);
  const progress = Math.min(Math.max(score / SCORE_MAX, 0), 1);

  return (
    <div
      className={cn(
        "relative flex h-9 w-40 items-center sm:h-10 sm:w-52 md:w-57.5",
        "rounded-full bg-white",
        "shadow-[0_4px_20px_rgba(0,0,0,0.12)]",
        "px-1",
      )}
    >
      {/* Progress — starts under the logo, grows leftward */}
      <div
        role="progressbar"
        className={cn(
          "absolute top-1/2 right-1 z-0 flex h-6 -translate-y-1/2 items-center justify-center sm:h-7",
          "overflow-hidden rounded-full",
          "bg-linear-to-r from-[#8B5CF6] to-[#6D28D9]",
          "text-[10px] font-medium text-white sm:text-xs",
          "transition-[width] duration-500 ease-out",
        )}
        style={{width: `calc((100% - 0.5rem) * ${progress})`}}
      >
        <span className="px-2 pe-8 whitespace-nowrap sm:pe-9">{count}</span>
      </div>
      <div className="absolute right-1 z-10 flex size-7 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm sm:size-8">
        <Image
          src="/image/Breadcrumb/logoboronz.png"
          alt="avatar"
          width={32}
          height={32}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
