/** @format */

"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  period: string;
  cta: string;
  isPopular?: boolean;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Individual",
    description: "1 Person",
    price: 9,
    period: "/month",
    cta: "Get Started",
    color: "bg-white border border-gray-200",
  },
  {
    name: "Family",
    description: "Up to 2 members",
    price: 19,
    period: "/month",
    cta: "Start Free Trial",
    isPopular: true,
    color: "bg-[#2d2420]",
  },
  {
    name: "Premium Family",
    description: "Up to 5 members",
    price: 34,
    period: "/month",
    cta: "Contact Us",
    color: "bg-white border border-gray-200",
  },
];

const SimplePricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <MotionReveal>
          <SectionHeading
            semiTitle="SIMPLE PRICING"
            title="Simple, transparent pricing"
            titleClassName="text-3xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl lg:text-[56px]"
            description="No hidden fees. Cancel anytime. Data retained for 30 days after cancellation."
          />
        </MotionReveal>

        {/* Toggle */}
        <MotionReveal delay={0.15}>
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
            <span
              className={cn(
                "text-base font-medium transition-colors",
                isAnnual ? "text-secondary" : "text-primary",
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative cursor-pointer inline-flex h-8 w-16 items-center rounded-full transition-colors",
                isAnnual ? "bg-button-bg" : "bg-gray-300",
              )}
            >
              <span
                className={cn(
                  "inline-block h-6 w-6 transform rounded-full bg-white transition-transform",
                  isAnnual ? "translate-x-9" : "translate-x-1",
                )}
              />
            </button>
            <span
              className={cn(
                "text-base font-medium transition-colors",
                isAnnual ? "text-primary" : "text-secondary",
              )}
            >
              Annual
            </span>
          </div>
        </MotionReveal>

        {/* Pricing Cards */}
        <MotionStagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
          stagger={0.1}
          delayChildren={0.2}
        >
          {pricingPlans.map((plan) => (
            <MotionStaggerItem key={plan.name} className="relative h-full">
              <div
                className={cn(
                  "rounded-2xl p-8 md:p-10 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1",
                  plan.isPopular ? plan.color : plan.color,
                  plan.isPopular
                    ? "md:scale-105 shadow-2xl"
                    : "hover:shadow-lg",
                )}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-button-bg text-[#2d2420] px-4 py-1 rounded-full text-[13px] font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-grow">
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold",
                      plan.isPopular ? "text-button-bg" : "text-primary",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm md:text-base mt-2",
                      plan.isPopular ? "text-gray-400" : "text-secondary",
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 md:mt-8">
                    <span
                      className={cn(
                        "text-4xl md:text-5xl font-bold",
                        plan.isPopular ? "text-button-bg" : "text-primary",
                      )}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={cn(
                        "text-sm md:text-base ml-2",
                        plan.isPopular ? "text-gray-400" : "text-secondary",
                      )}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={cn(
                    "w-full py-1 cursor-pointer md:py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 mt-8",
                    plan.isPopular
                      ? "bg-button-bg text-[#2d2420] hover:bg-opacity-90!"
                      : "border-2 border-primary text-primary hover:bg-primary! hover:text-white!",
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default SimplePricingSection;
