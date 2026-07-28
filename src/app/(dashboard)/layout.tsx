import {AuthGuard} from "@/shared/provider/AuthGuard";
import {ReactNode} from "react";
interface RootLayoutProps {
  children: ReactNode;
}
function HomeLayout({children}: RootLayoutProps) {
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
}

export default HomeLayout;
