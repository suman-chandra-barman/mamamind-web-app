/** @format */

import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const MissionSection = () => {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionReveal>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-button-bg uppercase md:text-[13px]">
                Our Mission
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-primary md:mt-3 md:text-[40px]">
                Reduce the mental load of running a family
              </h2>

              <p className="mt-6 text-sm leading-7 text-secondary md:text-base md:leading-8">
                The invisible labour of family life remembering appointments,
                tracking school events, managing meal plans, coordinating
                schedules falls disproportionately on one person. Famora exists
                to share that load.
              </p>
              <p className="mt-4 text-sm leading-7 text-secondary md:text-base md:leading-8">
                We&apos;ve built an AI assistant that handles the cognitive
                overhead of family coordination, so parents can spend less time
                managing logistics and more time being present with the people
                who matter most.
              </p>
              <p className="mt-1 text-sm leading-7 text-secondary md:text-base md:leading-8">
                We&apos;re not just building software. We&apos;re giving
                families their time back.
              </p>

              <MotionStagger className="mt-6 space-y-2.5" stagger={0.08}>
                {[
                  "Founded by parents, for parents",
                  "GDPR compliant and privacy-first",
                  "No ads, no data selling ever",
                  "Community-driven product roadmap",
                ].map((item) => (
                  <MotionStaggerItem key={item}>
                    <div className="flex items-center gap-2 text-sm text-primary md:text-base">
                      <CircleCheck className="h-4 w-4 shrink-0 text-button-bg" />
                      <span>{item}</span>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-button-bg/18 shadow-[0_20px_40px_rgba(44,36,32,0.14)]  transition-transform duration-300 hover:scale-101 cursor-pointer">
              <Image
                src="/mission-banner.jpg"
                alt="Family members using phone together"
                width={900}
                height={620}
                className="h-auto w-full object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
