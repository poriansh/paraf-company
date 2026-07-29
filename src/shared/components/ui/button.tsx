import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {Slot} from "@radix-ui/react-slot";
import {CgSpinner} from "react-icons/cg";

import {cn} from "@/shared/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all select-none focus-visible:ring-1 focus-visible:ring-ring/40 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        "ghost-muted":
          "bg-transparent text-slate-500 shadow-none hover:bg-transparent hover:text-slate-700",
        "outline-primary":
          "border border-primary bg-background text-primary hover:bg-primary/10",
        "outline-secondary":
          "border border-border bg-background text-secondary-foreground hover:bg-secondary",
        "outline-sky":
          "border border-sky-400 bg-background text-sky-600 hover:bg-sky-50",
        sky: "bg-sky-500 text-white shadow-none hover:bg-sky-600",
        dark: "bg-slate-900 text-white shadow hover:bg-slate-700",
        danger:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
        pill: "rounded-full bg-slate-100 text-slate-600 shadow-none hover:bg-slate-200",
        "pill-active":
          "rounded-full bg-slate-800 text-white shadow-none hover:bg-slate-800",
        "header-icon":
          "bg-transparent text-inherit shadow-none hover:bg-transparent hover:text-[#0d94ca] [&_svg]:size-5",
        "outline-soft":
          "rounded-full border border-border bg-white text-gray-400 shadow-none hover:bg-white hover:text-gray-600",
        input:
          "border border-border bg-background text-foreground hover:bg-accent",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 py-2",
        default: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        xl: "h-11 px-5",
        icon: "size-9 rounded-md p-0",
        "icon-sm": "size-7 rounded-md p-0",
        rounded: "size-9 rounded-full p-0",
        "rounded-sm": "size-8 rounded-full p-0",
        pill: "h-auto rounded-full px-3 py-1.5 text-xs sm:text-sm",
        auto: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  name?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      children,
      name,
      icon,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({variant, size, className}))}
        disabled={disabled || isLoading}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {icon}
            {name}
            {isLoading ? <CgSpinner className="size-3 animate-spin" /> : null}
            {children}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export {Button, buttonVariants};
