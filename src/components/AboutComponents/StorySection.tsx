/** @format */

import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const story = [
  {
    year: "2022",
    yearShort: "22",
    title: "The Idea",
    description:
      "Famora was born out of a real problem: co-founders Amara and Luca were both struggling to manage their families' busy schedules across multiple disconnected apps.",
  },
  {
    year: "2023",
    yearShort: "23",
    title: "First Beta",
    description:
      "We launched a private beta with 50 families. Feedback was overwhelming families loved the WhatsApp experience and were using Famora daily within a week.",
  },
  {
    year: "2024",
    yearShort: "24",
    title: "Public Launch",
    description:
      "Famora opened to the public. Within three months we had over 2,000 active family subscriptions across 14 countries, with zero paid marketing.",
  },
  {
    year: "2025",
    yearShort: "25",
    title: "Growing Together",
    description:
      "Today, Famora serves thousands of families worldwide. We've added multi-language support, meal planning, conflict detection, and are continually expanding based on subscriber feedback.",
  },
];

const StorySection = () => {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Our Story"
            title="From kitchen table to thousands of families"
            className="max-w-4xl"
          />
        </MotionReveal>

        <MotionStagger
          className="mx-auto mt-10 max-w-3xl md:mt-12"
          stagger={0.1}
        >
          <div className="relative">
            <div className="absolute bottom-4 left-5.5 top-4 w-px bg-button-bg/28 md:left-6" />
            <div className="space-y-8 md:space-y-10">
              {story.map((item) => (
                <MotionStaggerItem
                  key={item.year}
                  className="grid items-start grid-cols-[44px_1fr] gap-4 md:grid-cols-[48px_1fr] md:gap-6"
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-button-bg text-xs font-semibold text-white md:h-12 md:w-12 md:text-sm">
                    <span>{item.yearShort}</span>
                  </div>
                  <article>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-button-bg uppercase md:text-xs">
                      {item.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-primary md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-secondary md:text-[15px] md:leading-8">
                      {item.description}
                    </p>
                  </article>
                </MotionStaggerItem>
              ))}
            </div>
          </div>
        </MotionStagger>
      </div>
    </section>
  );
};

export default StorySection;
