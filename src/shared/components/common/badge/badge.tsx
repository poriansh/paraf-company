"use client";

import {forwardRef} from "react";

import {
  Badge as UiBadge,
  badgeVariants,
  type BadgeProps as UiBadgeProps,
} from "@/shared/components/ui/badge";

export type BadgeProps = UiBadgeProps;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  function Badge(props, ref) {
    return <UiBadge ref={ref} {...props} />;
  },
);

export {badgeVariants};
