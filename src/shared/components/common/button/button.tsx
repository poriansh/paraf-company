"use client";

import {
  Button as UiButton,
  buttonVariants,
  type ButtonProps as UiButtonProps,
} from "@/shared/components/ui/button";

export type ButtonProps = UiButtonProps;

export function Button(props: ButtonProps) {
  return <UiButton {...props} />;
}

export {buttonVariants};
