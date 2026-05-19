/** @format */

import CoreFeaturesSection from "@/components/FeaturesComponents/CoreFeaturesSection";
import FeaturesHeroSection from "@/components/FeaturesComponents/FeaturesHeroSection";
import HoodSection from "@/components/FeaturesComponents/HoodSection";
import StatsSection from "@/components/FeaturesComponents/StatsSection";
import WhatsAppSection from "@/components/FeaturesComponents/WhatsAppSection";

const FeaturesPage = () => {
  return (
    <main className="w-full bg-transparent">
      <FeaturesHeroSection />
      <StatsSection />
      <CoreFeaturesSection />
      <HoodSection />
      <WhatsAppSection />
    </main>
  );
};

export default FeaturesPage;
