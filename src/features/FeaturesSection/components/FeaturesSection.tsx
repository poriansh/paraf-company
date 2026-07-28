import {FeatureCard} from "@/features/FeaturesSection/components/FeatureCard";
import {
  featuresMock,
  featuresSectionMeta,
} from "@/features/FeaturesSection/constants/mockData";
import {Container} from "@/shared/components/layout/container";

export function FeaturesSection() {
  return (
    <section className="pb-10 sm:pb-16 md:pb-20">
      <Container>
        <h2 className="mb-5 text-right text-lg font-bold text-slate-800 sm:mb-8 sm:text-xl md:text-2xl">
          {featuresSectionMeta.titlePrefix}{" "}
          <span className="text-[#7C3AED]">{featuresSectionMeta.titleBrand}</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featuresMock.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
