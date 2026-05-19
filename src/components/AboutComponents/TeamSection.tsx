/** @format */

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const teamMembers = [
  {
    name: "Amara Osei",
    role: "CEO & Co-Founder",
    description:
      "Former product lead at a leading family tech startup. Mum of two. Built Famora after spending years trying to coordinate her family's schedule across four different apps.",
    image: "/team=1.jpg",
  },
  {
    name: "Luca Ferreira",
    role: "CTO & Co-Founder",
    description:
      "10+ years in AI and natural language processing. Dad of three. Leads all engineering and AI development. Believes technology should disappear into everyday life.",
    image: "/team-2.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="The Team"
            title="People who live this problem every day"
            description="We're a small team of parents, engineers, and designers who believe deeply in what we're building."
            className="max-w-4xl"
            descriptionClassName="mx-auto mt-4 max-w-2xl text-sm text-secondary md:text-base"
          />
        </MotionReveal>

        <MotionStagger
          className="mx-auto mt-10 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-2"
          stagger={0.12}
        >
          {teamMembers.map((member) => (
            <MotionStaggerItem key={member.name}>
              <article className="overflow-hidden rounded-2xl border border-button-bg/18 bg-white shadow-[0_12px_28px_rgba(44,36,32,0.1)] transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={720}
                  height={480}
                  className="h-auto w-full object-cover"
                />

                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-primary md:text-xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-button-bg md:text-sm">
                    {member.role}
                  </p>
                  <p className="mt-4 text-xs leading-7 text-secondary md:text-sm md:leading-8">
                    {member.description}
                  </p>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default TeamSection;
