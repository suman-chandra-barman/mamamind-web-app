/** @format */

"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const chatCards = [
  {
    id: "chat-1",
    src: "/ChatMockup-1.png",
    alt: "Famora reminder conversation preview",
    className: "md:col-span-1",
  },
  {
    id: "chat-2",
    src: "/ChatMockup-2.png",
    alt: "Famora meal planning conversation preview",
    className: "md:col-span-1",
  },
  {
    id: "chat-3",
    src: "/ChatMockup-3.png",
    alt: "Famora conflict detection conversation preview",
    className: "md:col-span-1",
  },
  {
    id: "chat-4",
    src: "/ChatMockup-4.png",
    alt: "Famora location search conversation preview",
    className: "md:col-span-1 md:max-w-[360px]",
  },
];

const SeeItInActionSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="See It In Action"
            title="Real conversations, real results."
            className="max-w-4xl"
          />
        </MotionReveal>

        <MotionStagger
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 md:mt-12"
          stagger={0.08}
        >
          {chatCards.map((card) => (
            <MotionStaggerItem key={card.id} className={card.className}>
              <div className="overflow-hidden rounded-xl border border-button-bg/12 bg-white/40 shadow-[0_8px_24px_rgba(44,36,32,0.08)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={520}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default SeeItInActionSection;
