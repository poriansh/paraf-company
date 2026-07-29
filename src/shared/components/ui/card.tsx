import {forwardRef, type HTMLAttributes} from "react";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/cn";

const cardVariants = cva("text-card-foreground", {
  variants: {
    variant: {
      default: "rounded-xl border bg-card shadow-sm",
      elevated:
        "rounded-2xl border-0 bg-white shadow-[0_8px_30px_rgba(80,100,160,0.08)] sm:rounded-3xl",
      soft: "rounded-[28px] border-0 bg-white/70",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({className, variant, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({variant}), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
