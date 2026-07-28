import {ActivityChartCard} from "@/features/ActivitySection/components/ActivityChartCard";
import {RecentActivitiesCard} from "@/features/ActivitySection/components/RecentActivitiesCard";
import {Container} from "@/shared/components/layout/container";

export function ActivitySection() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        {/* RTL: first column (activities) sits on the right; chart on the left */}
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.05fr)] lg:items-stretch">
          <RecentActivitiesCard />
          <ActivityChartCard />
        </div>
      </Container>
    </section>
  );
}
