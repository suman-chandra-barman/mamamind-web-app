/** @format */

import React from "react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const stats = [
  { value: "5,000+", label: "Families using Famora" },
  { value: "14", label: "Countries" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "2 yrs", label: "Average subscription length" },
];

const AboutStatsSection = () => {
  return (
    <section className="w-full bg-tertiary-background py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionStagger
          className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:text-left"
          stagger={0.1}
        >
          {stats.map((stat) => (
            <MotionStaggerItem key={stat.label}>
              <MotionReveal>
                <p className="text-4xl font-bold tracking-tight text-button-bg md:text-[42px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-[#b9aa95] md:text-sm">
                  {stat.label}
                </p>
              </MotionReveal>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default AboutStatsSection;
