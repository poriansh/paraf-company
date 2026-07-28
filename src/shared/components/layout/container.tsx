import type {ComponentProps} from "react";

import {cn} from "@/shared/lib/cn";

const containerSizes = {
  content: "max-w-[1728px]",
  narrow: "max-w-5xl",
  full: "max-w-none",
} as const;

type ContainerSize = keyof typeof containerSizes;

interface ContainerProps extends ComponentProps<"div"> {
  /** Controls the maximum content width while retaining responsive gutters. */
  size?: ContainerSize;
}

/**
 * Centers page content and prevents it from touching the viewport edges.
 * Use it inside full-width sections so backgrounds and borders can still span
 * the viewport while their content remains aligned.
 */
export function Container({
  className,
  size = "content",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12",
        containerSizes[size],
        className,
      )}
      {...props}
    />
  );
}

export type {ContainerProps, ContainerSize};
