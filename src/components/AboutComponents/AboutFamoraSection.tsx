/** @format */

import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const AboutFamoraSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="About Famora"
            titleClassName="mx-auto max-w-4xl text-3xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl lg:text-[56px]"
            descriptionClassName="mx-auto max-w-2xl text-base leading-8 text-secondary sm:text-lg"
            title="We believe every family deserves a better day."
            description="Famora was founded by parents who were tired of juggling a dozen apps to manage the family schedule. We built the assistant we always wished existed and now thousands of families use it every day."
          />
        </MotionReveal>
      </div>
    </section>
  );
};

export default AboutFamoraSection;
