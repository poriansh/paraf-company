import Image from "next/image";
import type { FeatureItem } from "@/features/FeaturesSection/constants/mockData";

interface FeatureCardBackProps {
  feature: FeatureItem;
}

export function FeatureCardBack({ feature }: FeatureCardBackProps) {
  return (
    <>
      <div className="mb-4 flex size-20 items-center justify-center sm:mb-6 sm:size-28">
        <Image
          src={feature.backImageSrc}
          alt={feature.backTitle}
          width={112}
          height={112}
          className="size-full object-contain"
        />
      </div>

      <h3 className="mb-2 text-base font-bold text-slate-800 sm:text-lg">
        {feature.backTitle}
      </h3>
      <p className="mb-3 max-w-[16rem] text-xs leading-relaxed text-slate-400 sm:text-sm">
        {feature.backDescription}
      </p>
      <span className="text-xs font-medium text-[#7C3AED] sm:text-sm">
        {feature.backHint}
      </span>
    </>
  );
}
