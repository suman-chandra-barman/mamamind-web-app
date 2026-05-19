/** @format */

import React from "react";
import SimpleSetupSection from "@/components/HowItWorksComponents/SimpleSetupSection";
import SeeItInActionSection from "@/components/HowItWorksComponents/SeeItInActionSection";
import ReadyToGetStartSection from "@/components/HowItWorksComponents/ReadyToGetStartSection";

const HowItWorksPage = () => {
  return (
    <main className="w-full bg-transparent">
      <SimpleSetupSection />
      <SeeItInActionSection />
      <ReadyToGetStartSection />
    </main>
  );
};

export default HowItWorksPage;
