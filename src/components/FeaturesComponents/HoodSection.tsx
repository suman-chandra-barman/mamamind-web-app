/** @format */

import { Clock3, Globe, ShieldCheck, Sparkles, Timer, Zap } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const hoodCards = [
  {
    title: "Instant AI Responses",
    description:
      "Famora responds to every message in seconds, powered by advanced language models trained for family organisation.",
    icon: Zap,
  },
  {
    title: "24/7 Availability",
    description:
      "Your family assistant never sleeps, never takes a day off, and never misses a message day or night.",
    icon: Clock3,
  },
  {
    title: "Bank-Grade Security",
    description:
      "All data is encrypted in transit and at rest. We are GDPR compliant and never sell family information.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Language Support",
    description:
      "Famora understands and responds in major global languages, perfect for multilingual households.",
    icon: Globe,
  },
  {
    title: "AI Personalisation",
    description:
      "The more your family uses Famora, the smarter it gets with routines, preferences, and communication style.",
    icon: Sparkles,
  },
  {
    title: "Task Completion Tracking",
    description:
      "Mark tasks directly in WhatsApp and keep track of what is completed and what is still pending.",
    icon: Timer,
  },
];

const HoodSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Under The Hood"
            title="Advanced intelligence, simple experience"
            description="Famora is powered by cutting-edge AI, but you only feel simplicity through WhatsApp."
          />
        </MotionReveal>

        <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {hoodCards.map((card) => {
            const Icon = card.icon;

            return (
              <MotionStaggerItem key={card.title}>
                <article className="h-full rounded-2xl border border-button-bg/20 bg-card-bg p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-button-bg/16 text-button-bg">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-primary md:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-7 text-secondary md:text-sm">
                    {card.description}
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

export default HoodSection;
