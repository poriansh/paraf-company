import {cn} from "@/shared/lib/cn";
import Image from "next/image";

interface WalletBalanceProps {
  balance?: string;
  count?: number;
}

export function WalletBalance({count = 150}: WalletBalanceProps) {
  return (
    <div
      className={cn(
        "relative flex items-center h-10 w-57.5",
        "rounded-full bg-white",
        "shadow-[0_4px_20px_rgba(0,0,0,0.12)]",
        "px-2",
      )}
    >
      {/* Avatar */}
      <div className="absolute right-1 w-8 h-8 rounded-full bg-white shadow-sm border flex items-center justify-center overflow-hidden">
        <Image
          src="/image/Breadcrumb/logoboronz.png"
          alt="avatar"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Count */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          h-7 px-5
          rounded-full
          bg-linear-to-r from-[#8B5CF6] to-[#6D28D9]
          text-white
          flex items-center justify-center
          text-xs font-medium
        "
      >
        {count}
      </div>

      {/* Empty space for future actions */}
      <div className="flex-1" />
    </div>
  );
}
