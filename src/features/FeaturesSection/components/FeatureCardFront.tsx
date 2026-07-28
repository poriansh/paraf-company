import Image from "next/image";
import type { FeatureItem } from "@/features/FeaturesSection/constants/mockData";

interface FeatureCardFrontProps {
  feature: FeatureItem;
}

export function FeatureCardFront({ feature }: FeatureCardFrontProps) {
  return (
    <>
      <div className="mb-5 flex size-24 items-center justify-center sm:mb-6 sm:size-28">
        <Image
          src={feature.imageSrc}
          alt={feature.title}
          width={112}
          height={112}
          className="size-full object-contain"
        />
      </div>

      <h3 className="mb-2 text-base font-bold text-slate-800 sm:text-lg">
        {feature.title}
      </h3>
      <p className="max-w-[16rem] text-xs leading-relaxed text-slate-400 sm:text-sm">
        {feature.description}
      </p>
    </>
  );
}
