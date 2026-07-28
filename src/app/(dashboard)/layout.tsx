import { DashboardHeader } from "@/shared/components/layout/Header/dashboard-header";

import { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: RootLayoutProps) {
  return (
    <section>
      <DashboardHeader />
      <main>{children}</main>
    </section>
  );
}

export default HomeLayout;
