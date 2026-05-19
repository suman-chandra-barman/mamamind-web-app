/** @format */

"use client";

import SectionHeading from "../CommonComponents/SectionHeading";
import { MotionReveal } from "../CommonComponents/MotionReveal";

const GetInTouchSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="GET IN TOUCH"
            title="We'd love to hear from you"
            description="Have a question about Famora? Need help with your account? Or just want to share feedback? Our team is here and happy to help."
            className="mb-0"
          />
        </MotionReveal>
      </div>
    </section>
  );
};

export default GetInTouchSection;
