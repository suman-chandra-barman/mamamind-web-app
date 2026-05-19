/** @format */

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const points = [
  "No app download required",
  "Works on any smartphone iOS or Android",
  "Instant notifications via WhatsApp",
  "Familiar, trusted interface",
  "Zero learning curve for any family member",
];

const WhatsAppSection = () => {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionReveal>
            <div className="text-center lg:text-left">
              <SectionHeading
                semiTitle="Why WhatsApp?"
                title="The app your family already uses"
                className="mx-0 max-w-none text-center lg:text-left"
                titleClassName="text-primary"
                description="WhatsApp is the most widely used messaging app in the world, with over 2 billion active users. Your family is already on it every day. Famora plugs directly into that habit — no training required, no new interface to learn."
                descriptionClassName="text-secondary text-sm md:text-base mt-5 text-center mx-auto lg:text-left"
              />

              <p className="mt-5 text-sm leading-8 text-secondary md:text-base ">
                By living inside WhatsApp, Famora achieves something no
                standalone app can: true adoption. When reminders and updates
                arrive in the same thread as family messages, they actually get
                seen and acted on.
              </p>

              <MotionStagger className="mt-5 space-y-3">
                {points.map((point) => (
                  <MotionStaggerItem key={point}>
                    <div className="flex items-center justify-center gap-2 text-center text-sm text-secondary md:text-base lg:justify-start lg:text-left lg:items-start">
                      <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-button-bg" />
                      <span>{point}</span>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>

              <MotionReveal delay={0.12}>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 h-11 rounded-full border-button-bg bg-transparent px-8 text-sm font-medium text-button-bg hover:bg-button-bg/10! md:text-base"
                >
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center gap-2"
                  >
                    See How It Works
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MotionReveal>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(44,36,32,0.16)] transition-transform duration-300 hover:scale-101 ">
              <Image
                src="/featuresWpBanner.jpg"
                alt="Family using WhatsApp on a smartphone"
                width={960}
                height={640}
                className="h-auto w-full object-cover cursor-pointer"
              />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
