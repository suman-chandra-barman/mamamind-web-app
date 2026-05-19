/** @format */

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const pricingPlans = [
  {
    name: "Individual",
    subtitle: "1 user",
    price: "$9",
    period: "/month",
    features: [
      "AI reminders",
      "Private events",
      "Location services",
      "Meal planning",
      "School messages",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Family",
    subtitle: "Up to 5 family members",
    price: "$19",
    period: "/month",
    features: [
      "All Individual features",
      "Shared family calendar",
      "Conflict detection",
      "Family reminders",
      "Shared events",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Premium Family",
    subtitle: "Up to 10 members",
    price: "$34",
    period: "/month",
    features: [
      "All Family features",
      "Priority support",
      "Extended data storage",
      "Advanced AI personalisation",
      "Custom onboarding",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Simple Pricing"
            title="Plans that grow with your family"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <MotionStaggerItem key={plan.name}>
              <article
                className={`relative rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-button-bg bg-tertiary-background text-white shadow-[0_16px_36px_rgba(44,36,32,0.34)]"
                    : "border-button-bg/22 bg-card-bg text-primary"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-button-bg px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold md:text-[22px]">
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-xs md:text-[13px] ${
                    plan.highlight ? "text-white/70" : "text-secondary"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="mt-4 flex items-end gap-1 md:mt-6">
                  <span
                    className={`text-4xl font-bold md:text-[44px] ${
                      plan.highlight ? "text-button-bg" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-2 text-xs md:text-sm ${
                      plan.highlight ? "text-white/70" : "text-secondary"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-3 md:mt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-xs md:text-sm"
                    >
                      <Check className="h-4 w-4 shrink-0 text-button-bg" />
                      <span
                        className={
                          plan.highlight ? "text-[#EDE0CC]" : "text-secondary"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.highlight ? "default" : "outline"}
                  className={`mt-6 h-10 w-full rounded-full text-sm font-medium md:mt-9 md:h-11 ${
                    plan.highlight
                      ? "bg-button-bg text-white hover:bg-[#9f8046]!"
                      : "border-primary/35 bg-transparent text-primary hover:bg-primary/5!"
                  }`}
                >
                  <Link href="/get-started">{plan.cta}</Link>
                </Button>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default PricingSection;
