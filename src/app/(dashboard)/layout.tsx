import type {Metadata} from "next";
import type {ReactNode} from "react";

import {DashboardHeader} from "@/shared/components/layout/Header/dashboard-header";

export const metadata: Metadata = {
  title: "داشبورد",
};

interface RootLayoutProps {
  children: ReactNode;
}

function HomeLayout({children}: RootLayoutProps) {
  return (
    <section>
      <DashboardHeader />
      <main>{children}</main>
    </section>
  );
}

export default HomeLayout;
