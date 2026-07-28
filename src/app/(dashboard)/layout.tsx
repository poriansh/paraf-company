import { DashboardHeader } from "@/shared/components/layout/Header/dashboard-header";
import {AuthGuard} from "@/shared/provider/AuthGuard";
import {ReactNode} from "react";
 

interface RootLayoutProps {
  children: ReactNode;
}

function HomeLayout({children}: RootLayoutProps) {
  return (
    <AuthGuard>
      <DashboardHeader />
      <main>{children}</main>
    </AuthGuard>
  );
}

export default HomeLayout;
