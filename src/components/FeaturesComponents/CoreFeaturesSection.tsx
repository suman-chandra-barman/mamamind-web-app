/** @format */

import {
  Bell,
  Calendar,
  CircleCheck,
  Lock,
  MapPin,
  MessageSquare,
  Users,
  Utensils,
  Workflow,
} from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const coreFeatures = [
  {
    title: "Shared Family Calendar",
    description:
      "Keep your family perfectly coordinated with one shared WhatsApp thread for appointments, plans, and updates.",
    bullets: [
      "Real-time event sync for all members",
      "Natural language event creation",
      "Recurring reminders in seconds",
    ],
    icon: Calendar,
  },
  {
    title: "Smart Reminders",
    description:
      "Set reminders once and let Famora remember everything from school forms to dentist visits.",
    bullets: [
      "Advanced date recognition",
      "Repeat schedules for routines",
      "Private reminder mode",
    ],
    icon: Bell,
  },
  {
    title: "Conflict Detection",
    description:
      "Famora checks family schedules automatically to highlight overlaps before they become problems.",
    bullets: [
      "Instant clash alerts",
      "Members affected shown clearly",
      "Conflict history visibility",
    ],
    icon: Workflow,
  },
  {
    title: "Meal Planning",
    description:
      "Generate practical weekly meal plans tailored to your family preferences and dietary needs.",
    bullets: [
      "Weekly meal generation",
      "Diet preference support",
      "Shopping list ready outputs",
    ],
    icon: Utensils,
  },
  {
    title: "School Messages",
    description:
      "Draft letters, notes, and permission messages for school quickly and confidently.",
    bullets: [
      "Absence and late notes",
      "Teacher communication drafts",
      "Simple template prompts",
    ],
    icon: MessageSquare,
  },
  {
    title: "Location Services",
    description:
      "Find nearby hospitals, pharmacies, and clinics with instant directions and contact details.",
    bullets: [
      "Nearest options shown first",
      "Open/closed status visibility",
      "One-tap direction support",
    ],
    icon: MapPin,
  },
  {
    title: "Private Events",
    description:
      "Create personal reminders that only you can see while still using the shared family assistant.",
    bullets: [
      "Per-event privacy controls",
      "Invisible to family members",
      "Secure encrypted storage",
    ],
    icon: Lock,
  },
  {
    title: "Multi-Member Support",
    description:
      "Built for real families with multiple members, each with personalized access and views.",
    bullets: [
      "Up to 10 members supported",
      "Individual preference memory",
      "Simple member management",
    ],
    icon: Users,
  },
  {
    title: "WhatsApp Native",
    description:
      "No new app needed. Famora works directly in WhatsApp where your family already communicates.",
    bullets: [
      "No installation required",
      "Works across iOS and Android",
      "Fast responses any time",
    ],
    icon: MessageSquare,
  },
];

const CoreFeaturesSection = () => {
  return (
    <section
      id="core-features"
      className="w-full bg-transparent py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Core Features"
            title="Every tool your family needs"
            description="From scheduling to meal planning, Famora covers the full spectrum of family organisation through simple WhatsApp messages."
          />
        </MotionReveal>

        <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {coreFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <MotionStaggerItem key={feature.title}>
                <article className="h-full rounded-2xl border border-button-bg/20 bg-card-bg p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-button-bg/16 text-button-bg">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-secondary md:text-base">
                    {feature.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-xs text-secondary md:text-sm"
                      >
                        <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-button-bg" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
