import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {Slot} from "@radix-ui/react-slot";
import {CgSpinner} from "react-icons/cg";

import {cn} from "@/shared/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all select-none focus-visible:ring-1 focus-visible:ring-panel-primary/40 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-panel-primary text-white shadow hover:bg-panel-secondary",
        secondary: "bg-panel-secondary text-white shadow hover:opacity-90",
        ghost:
          "bg-panel-bg text-panel-text hover:bg-panel-primary/10 hover:text-panel-primary",
        "outline-primary":
          "border border-panel-primary bg-panel-bg text-panel-primary hover:bg-panel-primary/10",
        "outline-secondary":
          "border border-panel-secondary bg-panel-bg text-panel-secondary hover:bg-panel-secondary/10",
        danger: "bg-red-700 text-white shadow hover:bg-red-800",
        input:
          "border border-panel-text/20 bg-panel-bg text-panel-text hover:bg-panel-primary/5",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 py-2",
        default: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        icon: "size-9 rounded-md p-0",
        "icon-sm": "size-7 rounded-md p-0",
        rounded: "size-9 rounded-full p-0",
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
