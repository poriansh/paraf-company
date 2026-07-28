"use client";

import {forwardRef, type ComponentPropsWithoutRef} from "react";

import {
  Input as UiInput,
  type InputSizeType_global,
} from "@/shared/components/ui/input";

export type {InputSizeType_global};

export type InputProps = ComponentPropsWithoutRef<typeof UiInput>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return <UiInput ref={ref} {...props} />;
  },
);
