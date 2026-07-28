import * as React from "react";

import {cn} from "@/shared/lib/cn";
import {Label} from "@/shared/components/ui/label";
import {showToast} from "@/shared/lib/toast";
import { IoCopyOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoEyeOutline } from 'react-icons/io5';

export type InputSizeType_global = "sm" | "md" | "lg";

const inputBorderClasses =
  "border-2 border-panel-text/25 outline-none transition-[border-color,box-shadow] focus:border-panel-primary focus-visible:border-panel-primary disabled:border-panel-text/15";

const inputSizeClasses: Record<InputSizeType_global, string> = {
  sm: "h-8 text-xs",
  md: "h-9 text-sm",
  lg: "h-10 text-sm",
};

type InputProps = React.ComponentProps<"input"> & {
  inputSize?: InputSizeType_global;
  showPasswordToggle?: boolean;
  enableCopy?: boolean;
  label?: string;
  labelClassName?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      inputSize = "md",
      showPasswordToggle = false,
      enableCopy = false,
      label,
      required = false,
      labelClassName = "",
      error,
      value,
      id,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputId =
      id || props.name || `input-${Math.random().toString(36).slice(2, 9)}`;

    const isPasswordField = type === "password" && showPasswordToggle;

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
          <input
            ref={ref}
            id={inputId}
            autoComplete="off"
            type={isPasswordField ? (showPassword ? "text" : "password") : type}
            data-slot="input"
            value={value}
            className={cn(
              "w-full min-w-0 rounded-lg bg-transparent px-2.5 py-1 text-base text-panel-text file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-panel-text/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              inputBorderClasses,
              inputSizeClasses[inputSize],
              (enableCopy || isPasswordField) && "pl-10",
              error &&
                "border-red-500 focus:border-red-500 focus-visible:border-red-500",
              className,
            )}
            {...props}
          />

          {enableCopy && (
            <button
              type="button"
              onClick={handleCopy}
              className="absolute inset-y-0 left-2 flex cursor-pointer items-center text-gray-500"
            >
              <IoCopyOutline size={18} />
            </button>
          )}

          {isPasswordField && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 left-2 flex cursor-pointer items-center text-gray-500"
            >
              {showPassword ? (
                <IoEyeOffOutline size={18} />
              ) : (
                <IoEyeOutline size={18} />
              )}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export {Input};
