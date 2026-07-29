"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/cn";

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva(
  "inline-flex items-center justify-center text-muted-foreground",
  {
    variants: {
      variant: {
        default: "h-10 gap-1 rounded-md bg-muted p-1",
        club: "h-auto min-w-min flex-row-reverse gap-0 rounded-xl bg-slate-200/70 p-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-sm px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        club: "shrink-0 cursor-pointer rounded-lg px-3 py-2 text-xs font-medium text-slate-500 shadow-none sm:px-4 sm:py-2.5 sm:text-sm data-[state=active]:bg-white data-[state=active]:text-sky-600 data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-sky-400/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>;

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({className, variant, ...props}, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({variant}), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>;

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({className, variant, ...props}, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({variant}), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({className, ...props}, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {Tabs, TabsList, TabsTrigger, TabsContent};
