import type {Metadata} from "next";
import type {ReactNode} from "react";

import "./globals.css";
import {iranSans} from "@/core/constant/fonts";
import {Toaster} from "@/shared/components/ui/sonner";
import {QueryProvider} from "@/shared/provider/React-query";

export const metadata: Metadata = {
  title: {
    default: "پاراف",
    template: "%s | پاراف",
  },
  description: "پاراف؛ بازار کالا و خدمات",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html className={iranSans.className} lang="fa" dir="rtl">
      <body className="overflow-x-hidden bg-background text-foreground">
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
