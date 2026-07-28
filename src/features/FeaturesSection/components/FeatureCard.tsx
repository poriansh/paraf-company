"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { FeatureItem } from "@/features/FeaturesSection/constants/mockData";
import { FeatureCardBack } from "@/features/FeaturesSection/components/FeatureCardBack";
import { FeatureCardFront } from "@/features/FeaturesSection/components/FeatureCardFront";

interface FeatureCardProps {
  feature: FeatureItem;
}

const cardFaceClassName =
  "flex h-full w-full flex-col items-center rounded-2xl bg-white px-4 py-6 text-center shadow-[0_8px_30px_rgba(80,100,160,0.08)] sm:rounded-3xl sm:px-6 sm:py-10";

const flipTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const,
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHoverStart = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsFlipped(true);
    }
  };

  const handleHoverEnd = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="h-full perspective-[1000px]"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={flipTransition}
        style={{ transformStyle: "preserve-3d" }}
      >
        <article
          className={cardFaceClassName}
          style={{ backfaceVisibility: "hidden" }}
        >
          <FeatureCardFront  feature={feature} />
        </article>

        <article
          className={`absolute inset-0 ${cardFaceClassName}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <FeatureCardBack feature={feature} />
        </article>
      </motion.div>
    </div>
  );
}
