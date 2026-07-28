"use client";

import type {ComponentPropsWithoutRef, ElementRef} from "react";
import {forwardRef} from "react";

import {
  Tabs as UiTabs,
  TabsContent as UiTabsContent,
  TabsList as UiTabsList,
  TabsTrigger as UiTabsTrigger,
} from "@/shared/components/ui/tabs";

export type TabsProps = ComponentPropsWithoutRef<typeof UiTabs>;
export type TabsListProps = ComponentPropsWithoutRef<typeof UiTabsList>;
export type TabsTriggerProps = ComponentPropsWithoutRef<typeof UiTabsTrigger>;
export type TabsContentProps = ComponentPropsWithoutRef<typeof UiTabsContent>;

export const Tabs = UiTabs;

export const TabsList = forwardRef<
  ElementRef<typeof UiTabsList>,
  TabsListProps
>(function TabsList(props, ref) {
  return <UiTabsList ref={ref} {...props} />;
});

export const TabsTrigger = forwardRef<
  ElementRef<typeof UiTabsTrigger>,
  TabsTriggerProps
>(function TabsTrigger(props, ref) {
  return <UiTabsTrigger ref={ref} {...props} />;
});

export const TabsContent = forwardRef<
  ElementRef<typeof UiTabsContent>,
  TabsContentProps
>(function TabsContent(props, ref) {
  return <UiTabsContent ref={ref} {...props} />;
});
