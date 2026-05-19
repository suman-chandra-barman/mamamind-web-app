/** @format */

"use client";

import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  individual: boolean;
  family: boolean;
  premiumFamily: boolean;
}

const features: Feature[] = [
  { name: "AI reminders", individual: true, family: true, premiumFamily: true },
  {
    name: "Private events",
    individual: true,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Location services",
    individual: true,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Meal planning",
    individual: true,
    family: true,
    premiumFamily: true,
  },
  {
    name: "School messages",
    individual: true,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Shared family calendar",
    individual: false,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Conflict detection",
    individual: false,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Family reminders",
    individual: false,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Shared events",
    individual: false,
    family: true,
    premiumFamily: true,
  },
  {
    name: "Priority support",
    individual: false,
    family: false,
    premiumFamily: true,
  },
  {
    name: "Extended data storage",
    individual: false,
    family: false,
    premiumFamily: true,
  },
  {
    name: "Advanced AI personalisation",
    individual: false,
    family: false,
    premiumFamily: true,
  },
  {
    name: "Custom onboarding",
    individual: false,
    family: false,
    premiumFamily: true,
  },
];

const Checkmark = () => (
  <svg
    className="w-5 h-5 md:w-6 md:h-6 text-button-bg mx-auto"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Cross = () => (
  <span className="text-secondary text-xl md:text-2xl font-light">−</span>
);

const FeatureComparisnSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <MotionReveal>
          <SectionHeading
            title="Full feature comparison"
            className="mb-12 md:mb-16"
          />
        </MotionReveal>

        {/* Table Container */}
        <MotionReveal delay={0.15}>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-primary">
                    Feature
                  </th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold text-primary">
                    Individual
                  </th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold text-button-bg">
                    Family
                  </th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold text-primary">
                    Premium Family
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={cn(
                      "border-b border-gray-200 transition-colors hover:bg-gray-50",
                      idx % 2 === 0 ? "bg-white" : "bg-gray-0",
                    )}
                  >
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm font-medium text-primary">
                      {feature.name}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      {feature.individual ? <Checkmark /> : <Cross />}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center bg-gray-50/50">
                      {feature.family ? <Checkmark /> : <Cross />}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      {feature.premiumFamily ? <Checkmark /> : <Cross />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default FeatureComparisnSection;
