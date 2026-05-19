/** @format */

import {
  Bell,
  Calendar,
  GitCompareArrows,
  MapPin,
  PencilLine,
  Utensils,
} from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const features = [
  {
    title: "Shared Family Calendar",
    description:
      "All family members stay in sync. Share events, appointments, and plans in real time.",
    icon: Calendar,
  },
  {
    title: "Smart Reminders",
    description:
      "Set reminders once. The bot remembers and notifies you automatically even months in advance.",
    icon: Bell,
  },
  {
    title: "Conflict Detection",
    description:
      "If two family members have overlapping events, the bot flags it instantly.",
    icon: GitCompareArrows,
  },
  {
    title: "Meal Planning",
    description:
      "Ask the bot for a weekly meal plan tailored to your family's preferences.",
    icon: Utensils,
  },
  {
    title: "School Messages",
    description: "Generate letters, notes, and messages for school in seconds.",
    icon: PencilLine,
  },
  {
    title: "Location Services",
    description:
      "Find the nearest hospital, pharmacy, or clinic with directions and contact details.",
    icon: MapPin,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Everything Your Family Needs"
            title="One bot. Endless possibilities."
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <MotionStaggerItem key={feature.title}>
                <article className="rounded-2xl border border-button-bg/20 bg-card-bg p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-button-bg text-white md:mb-6">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-secondary md:mt-2 md:text-[15px] md:leading-6">
                    {feature.description}
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

export default FeaturesSection;
