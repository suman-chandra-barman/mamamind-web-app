/** @format */

import React from "react";
import AboutFamoraSection from "@/components/AboutComponents/AboutFamoraSection";
import MissionSection from "@/components/AboutComponents/MissionSection";
import StandForSection from "@/components/AboutComponents/StandForSection";
import StorySection from "@/components/AboutComponents/StorySection";
import TeamSection from "@/components/AboutComponents/TeamSection";
import AboutStatsSection from "@/components/AboutComponents/AboutStatsSection";

const AboutPage = () => {
  return (
    <main className="w-full bg-transparent">
      <AboutFamoraSection />
      <MissionSection />
      <StandForSection />
      <StorySection />
      <TeamSection />
      <AboutStatsSection />
    </main>
  );
};

export default AboutPage;
