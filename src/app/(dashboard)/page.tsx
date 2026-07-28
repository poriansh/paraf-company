import {BreadcrumbHeader} from "@/features/BreadcrumbHeader/components/BreadcrumbHeader";
import { WelcomeBanner } from "@/features/WelcomeBanner/components/WelcomeBanner";

function HomePage() {
  return (
    <section>
      <BreadcrumbHeader />
      <div
        style={{
          background: "linear-gradient(161.69deg, #D1EDFA 0%, #E5DBFC 99.46%)",
        }}
      >
        <div className="py-20">
          <WelcomeBanner />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
