/** @format */

import { Lock, Users } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const cards = [
  {
    title: "Shared Events",
    description:
      "Visible to all connected family members. Perfect for appointments, family plans, and group reminders.",
    icon: Users,
    label: "Family Plan feature",
  },
  {
    title: "Private Events",
    description:
      "Only you can see it. Personal reminders, private appointments, sensitive information kept just for you.",
    icon: Lock,
    label: "All plans",
  },
];

const PrivacyAndControllSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading title="Your privacy. Your control." />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-5 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <MotionStaggerItem key={card.title}>
                <article className="rounded-2xl border border-button-bg/18 bg-card-bg p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-button-bg/25 text-button-bg md:mb-6">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-secondary md:mt-3 md:leading-6">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex rounded-full bg-button-bg/16 px-4 py-1 text-xs font-medium text-button-bg">
                    {card.label}
                  </span>
                </article>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
};

export default PrivacyAndControllSection;
