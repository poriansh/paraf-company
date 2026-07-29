import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {IoCopyOutline, IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

import {cn} from "@/shared/lib/cn";
import {Label} from "@/shared/components/ui/label";
import {Button} from "@/shared/components/ui/button";
import {showToast} from "@/shared/lib/toast";

export type InputSizeType_global = "sm" | "md" | "lg";

const inputVariants = cva(
  "w-full min-w-0 text-base file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm outline-none transition-[border-color,box-shadow]",
  {
    variants: {
      variant: {
        default:
          "rounded-lg border-2 border-border bg-transparent px-2.5 py-1 text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:border-primary disabled:border-border/60",
        search:
          "h-10 rounded-full border border-[#cbd3d7] bg-[#f1f4f5] pr-11 pl-5 text-sm text-[#53656c] placeholder:text-[#aab4b8] focus:border-[#83bad0] focus-visible:border-[#83bad0]",
      },
      inputSize: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-10 text-sm",
      },
    },
    compoundVariants: [
      {
        variant: "search",
        class: "h-10 text-sm",
      },
    ],
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  },
);

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    showPasswordToggle?: boolean;
    enableCopy?: boolean;
    label?: string;
    labelClassName?: string;
    error?: string;
    startIcon?: React.ReactNode;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant = "default",
      inputSize = "md",
      showPasswordToggle = false,
      enableCopy = false,
      label,
      required = false,
      labelClassName = "",
      error,
      value,
      id,
      startIcon,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputId = id 

    const isPasswordField = type === "password" && showPasswordToggle;
    const showAccessory = enableCopy || isPasswordField;

    const handleCopy = async () => {
      if (value) {
        try {
          await navigator.clipboard.writeText(String(value));
          showToast.success("کپی شد");
        } catch {
          showToast.error("خطا در کپی");
        }
      }
    };

    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <Label
            htmlFor={inputId}
            className={cn("text-sm font-medium", labelClassName)}
          >
            {label}
            {required && <span className="mr-1 text-red-500">*</span>}
          </Label>
        )}

        <div className="relative">
          {startIcon ? (
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#647780]">
              {startIcon}
            </span>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            autoComplete="off"
            type={isPasswordField ? (showPassword ? "text" : "password") : type}
            data-slot="input"
            value={value}
            className={cn(
              inputVariants({
                variant,
                inputSize: variant === "search" ? null : inputSize,
              }),
              showAccessory && "pl-10",
              error &&
                "border-red-500 focus:border-red-500 focus-visible:border-red-500",
              className,
            )}
            {...props}
          />

          {enableCopy && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={handleCopy}
              className="absolute inset-y-0 left-2 my-auto text-gray-500 hover:bg-transparent hover:text-gray-700"
              aria-label="کپی"
            >
              <IoCopyOutline size={18} />
            </Button>
          )}

          {isPasswordField && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 left-2 my-auto text-gray-500 hover:bg-transparent hover:text-gray-700"
              aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
            >
              {showPassword ? (
                <IoEyeOffOutline size={18} />
              ) : (
                <IoEyeOutline size={18} />
              )}
            </Button>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export {Input, inputVariants};
