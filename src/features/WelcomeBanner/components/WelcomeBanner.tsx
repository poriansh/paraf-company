"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useCurrentUser } from "@/shared/services/useCurrentUser";
import { Container } from "@/shared/components/layout/container";

const fadeInTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

const floatTransition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

/**
 * Animated welcome banner shown on the dashboard.
 *
 * - Uses `motion` for entrance and float animations and `next/image` for
 *   optimized images.
 * - Reads the current user via `useCurrentUser` to personalize the message.
 */
export function WelcomeBanner() {
  const { data: user } = useCurrentUser();
  return (
    <Container>
      <section className="relative mx-auto h-36 max-w-230 sm:h-44 md:h-50">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...fadeInTransition, duration: 1 }}
        >
          <motion.div
            animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/image/wellcombanner/FadeIn.png"
              alt=""
              width={350}
              height={350}
              className="size-48 object-contain sm:size-72 md:size-[350px]"
              aria-hidden
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10 rounded-[40px] bg-white sm:rounded-[70px] md:rounded-[100px]"
          initial={{ opacity: 0, scaleX: 0.92 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ ...fadeInTransition, duration: 0.7, delay: 0.1 }}
        />

        <motion.div
          className="absolute -bottom-1.5 -left-2 z-20 h-32 w-36 sm:-bottom-2 sm:-left-10 sm:h-44 sm:w-52 md:-bottom-2.5 md:-left-20 lg:-left-28 lg:h-57.5 lg:w-65"
          initial={{ opacity: 0, x: -40, y: 24, rotate: -8 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ ...fadeInTransition, delay: 0.25 }}
        >
          <motion.div
            className="h-full w-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ ...floatTransition, delay: 1 }}
          >
            <Image
              src="/image/wellcombanner/cup.png"
              alt="welcome trophy"
              width={360}
              height={360}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-6 left-2 z-20 hidden h-32 w-32 sm:-bottom-8 sm:left-6 sm:block sm:h-40 sm:w-40 md:-bottom-12 md:left-10 md:h-50 md:w-50"
          initial={{ opacity: 0, x: -24, y: 32, rotate: 6 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ ...fadeInTransition, delay: 0.4 }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ ...floatTransition, delay: 1.3, duration: 3.4 }}
          >
            <Image
              src="/image/wellcombanner/kiseh.png"
              alt="welcome coins"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-3 z-30 max-w-[58%] -translate-y-1/2 text-right sm:right-8 sm:max-w-[55%] md:right-12 md:max-w-none lg:right-16"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...fadeInTransition, delay: 0.45 }}
        >
          <motion.p
            className="mb-1.5 text-sm font-medium text-gray-700 sm:mb-2 sm:text-base md:mb-3 md:text-[20px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fadeInTransition, delay: 0.55 }}
          >
            {user?.firstName} عزیز
          </motion.p>

          <motion.h1
            className="text-base leading-snug font-bold text-[#7447F5] sm:text-xl md:text-2xl lg:text-[32px] lg:leading-normal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fadeInTransition, delay: 0.7 }}
          >
            به پاراف کلاب
            <span className="font-medium"> (باشگاه مشتریان پاراف)</span>
            <span>خوش آمدی!</span>
          </motion.h1>
        </motion.div>
      </section>
    </Container>
  );
}
