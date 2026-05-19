/** @format */

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";
import { Button } from "@/components/ui/button";

const ReadyToJoinSection = () => {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="Ready to join thousands of organised families?"
            description="Start your free 7-day trial and experience what a personal AI family assistant can do for your household."
            className="max-w-4xl"
            descriptionClassName="mx-auto mt-5 max-w-2xl text-sm leading-7 text-secondary md:text-base"
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 w-full rounded-full bg-button-bg px-10 text-sm font-medium text-white hover:bg-button-bg/90! sm:w-auto"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-full border-primary/35 bg-transparent px-8 text-sm font-medium text-primary hover:bg-primary/5! sm:w-auto"
            >
              <Link href="#" className="inline-flex items-center gap-2">
                Get in Touch
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ReadyToJoinSection;
