/** @format */

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";
import SectionHeading from "../CommonComponents/SectionHeading";

const HeroSection = () => {
  return (
    <section id="home" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="AI-Powered Family Assistant"
            titleClassName="max-w-4xl text-3xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl lg:text-[56px]"
            descriptionClassName="max-w-2xl text-base leading-7 text-secondary sm:text-lg"
            title="One AI Bot. Your Entire Family. All on WhatsApp."
            description="Manage appointments, share reminders, plan meals, and stay organised all through a simple WhatsApp message."
          />
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-10 md:h-12 w-full rounded-full bg-button-bg px-7 text-sm font-medium text-white hover:bg-[#9f8046]! sm:w-auto"
            >
              <Link href="/pricing">Start Your Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 md:h-12 w-full rounded-full border-primary/45 bg-transparent px-7 text-sm font-medium text-primary hover:bg-primary/5! sm:w-auto"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.26}>
          <div className="mt-6 sm:mt-12 cursor-pointer transition-transform duration-300 hover:scale-101 ">
            <Image
              src="/PhoneMockup.png"
              alt="Famora AI WhatsApp phone mockup"
              width={500}
              height={750}
              priority
              className="h-auto  w-68 drop-shadow-[0_24px_42px_rgba(44,36,32,0.25)] sm:w-80"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default HeroSection;
