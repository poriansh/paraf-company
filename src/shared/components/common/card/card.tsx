"use client";

import type {ComponentPropsWithoutRef, ElementRef} from "react";
import {forwardRef} from "react";

import {
  Card as UiCard,
  CardContent as UiCardContent,
  CardDescription as UiCardDescription,
  CardFooter as UiCardFooter,
  CardHeader as UiCardHeader,
  CardTitle as UiCardTitle,
} from "@/shared/components/ui/card";

export type CardProps = ComponentPropsWithoutRef<typeof UiCard>;
export type CardHeaderProps = ComponentPropsWithoutRef<typeof UiCardHeader>;
export type CardTitleProps = ComponentPropsWithoutRef<typeof UiCardTitle>;
export type CardDescriptionProps = ComponentPropsWithoutRef<
  typeof UiCardDescription
>;
export type CardContentProps = ComponentPropsWithoutRef<typeof UiCardContent>;
export type CardFooterProps = ComponentPropsWithoutRef<typeof UiCardFooter>;

export const Card = forwardRef<ElementRef<typeof UiCard>, CardProps>(
  function Card(props, ref) {
    return <UiCard ref={ref} {...props} />;
  },
);

export const CardHeader = forwardRef<
  ElementRef<typeof UiCardHeader>,
  CardHeaderProps
>(function CardHeader(props, ref) {
  return <UiCardHeader ref={ref} {...props} />;
});

export const CardTitle = forwardRef<
  ElementRef<typeof UiCardTitle>,
  CardTitleProps
>(function CardTitle(props, ref) {
  return <UiCardTitle ref={ref} {...props} />;
});

export const CardDescription = forwardRef<
  ElementRef<typeof UiCardDescription>,
  CardDescriptionProps
>(function CardDescription(props, ref) {
  return <UiCardDescription ref={ref} {...props} />;
});

export const CardContent = forwardRef<
  ElementRef<typeof UiCardContent>,
  CardContentProps
>(function CardContent(props, ref) {
  return <UiCardContent ref={ref} {...props} />;
});

export const CardFooter = forwardRef<
  ElementRef<typeof UiCardFooter>,
  CardFooterProps
>(function CardFooter(props, ref) {
  return <UiCardFooter ref={ref} {...props} />;
});
