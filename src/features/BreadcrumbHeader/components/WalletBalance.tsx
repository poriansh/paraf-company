import {cn} from "@/shared/lib/cn";
import Image from "next/image";

const SCORE_MAX = 200;

interface WalletBalanceProps {
  count?: string | number;
}

function parseScore(count?: string | number) {
  if (count === undefined || count === "") return 0;
  const numeric = typeof count === "number" ? count : Number(count);
  return Number.isFinite(numeric) ? numeric : 0;
}

export function WalletBalance({count}: WalletBalanceProps) {
  const score = parseScore(count);
  const progress = Math.min(Math.max(score / SCORE_MAX, 0), 1);

  return (
    <div
      className={cn(
        "relative flex h-10 w-57.5 items-center",
        "rounded-full bg-white",
        "shadow-[0_4px_20px_rgba(0,0,0,0.12)]",
        "px-1",
      )}
    >
      {/* Progress — starts under the logo, grows leftward */}
      <div
        role="progressbar"
        className={cn(
          "absolute top-1/2 right-1 z-0 flex h-7 -translate-y-1/2 items-center justify-center",
          "overflow-hidden rounded-full",
          "bg-linear-to-r from-[#8B5CF6] to-[#6D28D9]",
          "text-xs font-medium text-white",
          "transition-[width] duration-500 ease-out",
        )}
        style={{width: `calc((100% - 0.5rem) * ${progress})`}}
      >
        <span className="px-2 pe-9 whitespace-nowrap">{count}</span>
      </div>
      <div className="absolute right-1 z-10 flex size-8 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm">
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
