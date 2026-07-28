import type {ReactNode} from "react";

import "./globals.css";
import {iranSans} from "@/core/constant/fonts";
import {QueryProvider} from "@/shared/provider/React-query";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html className={iranSans.className} lang="fa" dir="rtl">
      <body className="overflow-x-hidden bg-background text-foreground">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
