/** @format */

"use client";

import React from "react";
import {
  MousePointer,
  CreditCard,
  UserPlus,
  Mail,
  MessageCircle,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

type SetupStep = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: SetupStep[] = [
  {
    id: "choose-plan",
    index: "01",
    title: "Choose your plan on the website",
    description:
      "Browse our Individual, Family, and Premium Family plans. Select the one that best fits your household size and needs.",
    icon: MousePointer,
  },
  {
    id: "payment",
    index: "02",
    title: "Enter payment details",
    description:
      "Complete a secure Stripe checkout in seconds. We accept all major cards, Apple Pay, and Google Pay.",
    icon: CreditCard,
  },
  {
    id: "account",
    index: "03",
    title: "Account is automatically created",
    description:
      "Your Famora account is provisioned instantly behind the scenes. No manual setup required on our end.",
    icon: UserPlus,
  },
  {
    id: "email",
    index: "04",
    title: "You receive a confirmation email",
    description:
      "Check your inbox for a welcome email with your plan details and a direct link to activate your WhatsApp bot.",
    icon: Mail,
  },
  {
    id: "redirect",
    index: "05",
    title: "Click link to be redirected to WhatsApp",
    description:
      "A single tap opens WhatsApp and connects you directly to your personal Famora AI assistant.",
    icon: MessageCircle,
  },
  {
    id: "start-chatting",
    index: "06",
    title: "Start chatting with your AI family assistant",
    description:
      "Say hello and start adding reminders, planning meals, setting up shared events, and exploring everything Famora can do.",
    icon: Zap,
  },
];

const SimpleSetupSection = () => {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Simple Setup"
            title="How Famora works"
            description="From sign-up to your first WhatsApp message in under 5 minutes."
            descriptionClassName="text-xs text-secondary md:text-sm"
          />
        </MotionReveal>

        <MotionStagger
          className="mx-auto mt-10 max-w-4xl md:mt-12"
          stagger={0.08}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <MotionStaggerItem key={step.id}>
                <article className="flex gap-4 py-5 md:gap-6 md:py-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-button-bg text-white md:h-12 md:w-12">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <span className="mt-1 text-[10px] font-semibold tracking-wide text-button-bg/90 md:text-[11px]">
                      {step.index}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary md:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary md:text-base md:leading-7">
                      {step.description}
                    </p>
                  </div>
                </article>

                {idx !== steps.length - 1 && (
                  <div className=" border-b border-button-bg/18 " />
                )}
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
};

export default SimpleSetupSection;
