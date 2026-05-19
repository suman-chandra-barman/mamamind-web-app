/** @format */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";
import SectionHeading from "../CommonComponents/SectionHeading";

const FeaturesHeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient bg-linear-to-r from-[#2D2521] to-[#3C2E27] py-20 text-center sm:py-24 md:py-28">
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-button-bg/12  sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-button-bg/18  sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Everything Famora Can Do"
            title="Built for real families. Designed for real life."
            description="Famora isn't just a reminder app. It's a fully intelligent family assistant that lives inside WhatsApp and grows smarter with every message."
            titleClassName="max-w-4xl text-3xl leading-[1.08] font-bold tracking-tight text-[#EDE0CC] sm:text-5xl lg:text-[56px]"
            descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#b7a998] sm:text-lg"
          />
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <Button
            asChild
            className="mt-8 h-11 rounded-full bg-button-bg px-10 text-sm font-medium text-white hover:bg-[#9f8046]!"
          >
            <Link href="#core-features">Get Started</Link>
          </Button>
        </MotionReveal>
      </div>
    </section>
  );
};

export default FeaturesHeroSection;
