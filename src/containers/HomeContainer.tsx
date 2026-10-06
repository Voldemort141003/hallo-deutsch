import Hero from "@/components/presenters/Hero";
import FeatureList from "@/components/presenters/FeatureList";
import LevelList from "@/components/presenters/LevelList";
import { features, levels } from "@/services/homeData";

export default function HomeContainer() {
  return (
    <>
      <Hero />
      <FeatureList features={features} />
      <LevelList levels={levels} />
    </>
  );
}
