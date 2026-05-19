/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const ReadyToGetStartSection = () => {
  return (
    <section className="w-full  py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="Ready to get started?"
            description="It only takes 5 minutes to set up your family's AI assistant."
            className="max-w-3xl"
            descriptionClassName="mt-4 text-[13px] text-secondary md:text-[15px]"
          />
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-8 text-center">
          <Button
            asChild
            className="h-10 rounded-full bg-button-bg px-6 text-[13px] font-medium text-white hover:bg-button-bg/90 md:h-11 md:px-8 md:text-sm"
          >
            <Link href="/pricing">Start Your Free Trial</Link>
          </Button>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ReadyToGetStartSection;
