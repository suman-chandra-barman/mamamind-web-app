/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const StillHaveQuestionSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="Still have questions?"
            description="Our team is happy to help. Reach out and we'll get back to you as quickly as possible."
            className="max-w-2xl"
            descriptionClassName="mt-4 text-[13px] leading-6 text-secondary md:text-[15px] md:leading-7"
          />
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-8 text-center">
          <Button
            asChild
            className="h-10 rounded-full bg-custom-green px-5 text-[13px] font-medium text-white hover:bg-custom-green/90 md:h-11 md:px-7 md:text-sm"
          >
            <Link href="#" className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </Link>
          </Button>
        </MotionReveal>
      </div>
    </section>
  );
};

export default StillHaveQuestionSection;
