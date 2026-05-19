/** @format */

import FeaturesSection from "@/components/HomeComponents/FeaturesSection";
import FeedbackSection from "@/components/HomeComponents/FeedbackSection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import PricingSection from "@/components/HomeComponents/PricingSection";
import PrivacyAndControllSection from "@/components/HomeComponents/PrivacyAndControllSection";
import QuestionsSection from "@/components/HomeComponents/QuestionsSection";
import SetupGuidelineSection from "@/components/HomeComponents/SetupGuidelineSection";

export default function Home() {
  return (
    <div className="w-full bg-transparent">
      <HeroSection />
      <SetupGuidelineSection />
      <FeaturesSection />
      <PrivacyAndControllSection />
      <PricingSection />
      <FeedbackSection />
      <QuestionsSection />
    </div>
  );
}
