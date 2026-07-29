import {forwardRef, type HTMLAttributes} from "react";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        outline: "text-foreground",
        muted:
          "rounded-full border-transparent bg-slate-100 px-2.5 py-1 text-xs font-normal text-slate-500",
        status:
          "rounded-full border-transparent bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600",
        "status-sm":
          "rounded-full border-transparent bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600",
        bronze:
          "border-transparent bg-amber-700/15 text-amber-700 dark:text-amber-300",
        silver:
          "border-transparent bg-slate-500/15 text-slate-600 dark:text-slate-300",
        gold: "border-transparent bg-yellow-500/15 text-yellow-700 dark:text-yellow-300",
        diamond:
          "border-transparent bg-sky-500/15 text-sky-700 dark:text-sky-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({className, variant, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(badgeVariants({variant}), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";

export {Badge, badgeVariants};
