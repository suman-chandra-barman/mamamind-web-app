/** @format */

import React from "react";
import SimplePricingSection from "@/components/PricingComponents/SimplePricingSection";
import FeatureComparisnSection from "@/components/PricingComponents/FeatureComparisnSection";
import BillingQuestionsSection from "@/components/PricingComponents/BillingQuestionsSection";

const PricingPage = () => {
  return (
    <main className="w-full bg-transparent">
      <SimplePricingSection />
      <FeatureComparisnSection />
      <BillingQuestionsSection />
    </main>
  );
};

export default PricingPage;
