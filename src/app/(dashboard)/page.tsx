import { BreadcrumbHeader } from "@/features/BreadcrumbHeader/components/BreadcrumbHeader";
import { WelcomeBanner } from "@/features/WelcomeBanner/components/WelcomeBanner";
import { CustomerClubSection } from "@/features/CustomerClub";
import { BannerSection } from "@/features/BannerSection";
import { ActivitySection } from "@/features/ActivitySection";
import { FeaturesSection } from "@/features/FeaturesSection";

function HomePage() {
  return (
    <section>
      <BreadcrumbHeader />
      <div
        style={{
          background: "linear-gradient(161.69deg, #D1EDFA 0%, #E5DBFC 99.46%)",
        }}
      >
        <div className="py-10 sm:py-14 md:py-20">
          <WelcomeBanner />
        </div>
        <CustomerClubSection />
        <BannerSection />
        <ActivitySection />
        <FeaturesSection />
      </div>
    </section>
  );
}

export default HomePage;
