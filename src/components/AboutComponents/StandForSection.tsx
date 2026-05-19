/** @format */

import React from "react";
import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  Globe,
  BadgeCheck,
} from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const values = [
  {
    icon: Heart,
    title: "Family First",
    description:
      "Every product decision we make starts with one question: does this make family life easier? We don't build features for features' sake we build them because real families asked for them.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Your family's data belongs to your family. We are GDPR compliant, never sell data to third parties, and have built privacy controls directly into the core of how Famora works.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity Over Complexity",
    description:
      "We obsess over reducing friction. If it takes more than a WhatsApp message to use a feature, we rethink it. The best technology is the kind you don't notice.",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "Famora works for every type of family large, small, multilingual, or blended. We design for real diversity, because no two families are the same.",
  },
  {
    icon: Globe,
    title: "Accessible Everywhere",
    description:
      "By choosing WhatsApp as our platform, Famora works on any smartphone worldwide, without requiring a separate app download, account setup, or technical know-how.",
  },
  {
    icon: BadgeCheck,
    title: "Continuous Improvement",
    description:
      "We release improvements every two weeks based directly on feedback from our subscribers. Our product roadmap is publicly shaped by our community of families.",
  },
];

const StandForSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="What We Stand For"
            title="Our values guide every decision"
            description="From how we write code to how we respond to support tickets, these principles are embedded in everything we do at Famora."
            className="max-w-4xl"
            descriptionClassName="mx-auto mt-4 max-w-2xl text-sm text-secondary md:text-base"
          />
        </MotionReveal>

        <MotionStagger
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5"
          stagger={0.08}
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <MotionStaggerItem key={value.title}>
                <article className="h-full rounded-2xl border border-button-bg/18 bg-white p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-background text-button-bg">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-primary md:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-secondary md:text-[15px] md:leading-8">
                    {value.description}
                  </p>
                </article>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
};

export default StandForSection;
