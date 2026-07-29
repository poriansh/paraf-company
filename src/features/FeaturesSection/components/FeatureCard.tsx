"use client";

import {useState} from "react";
import {motion} from "motion/react";

import type {FeatureItem} from "@/features/FeaturesSection/constants/mockData";
import {FeatureCardBack} from "@/features/FeaturesSection/components/FeatureCardBack";
import {FeatureCardFront} from "@/features/FeaturesSection/components/FeatureCardFront";
import {Card} from "@/shared/components/common/card/card";

interface FeatureCardProps {
  feature: FeatureItem;
}

const cardFaceClassName =
  "flex h-full w-full flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-10";

const flipTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const,
};

export function FeatureCard({feature}: FeatureCardProps) {
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
        animate={{rotateY: isFlipped ? 180 : 0}}
        transition={flipTransition}
        style={{transformStyle: "preserve-3d"}}
      >
        <Card
          variant="elevated"
          className={cardFaceClassName}
          style={{backfaceVisibility: "hidden"}}
        >
          <FeatureCardFront feature={feature} />
        </Card>

        <Card
          variant="elevated"
          className={`absolute inset-0 ${cardFaceClassName}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <FeatureCardBack feature={feature} />
        </Card>
      </motion.div>
    </div>
  );
}
