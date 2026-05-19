/** @format */

import { Star } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const feedback = [
  {
    quote:
      "Famora has completely changed how our family stays organised. I used to manage everything in my head now the bot handles it all.",
    name: "Sarah M.",
    role: "Mother of 3",
  },
  {
    quote:
      "The conflict detection feature alone is worth it. No more double-booked Saturdays. The kids love using WhatsApp for reminders.",
    name: "James & Claire T.",
    role: "Parents of 2",
  },
  {
    quote:
      "I love how private events stay private. My personal appointments are not shared with the whole family brilliant design.",
    name: "Priya R.",
    role: "Working mum",
  },
];

const FeedbackSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="What Families Say"
            title="Loved by thousands of families"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {feedback.map((item) => (
            <MotionStaggerItem key={item.name}>
              <article className="rounded-2xl border border-button-bg/18 bg-card-bg p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex gap-1 text-button-bg">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`${item.name}-${i}`}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <p className="text-sm leading-7 text-primary/90 italic md:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="mt-6 text-[13px] font-semibold text-primary md:text-sm">
                  {item.name}
                </p>
                <p className="text-xs text-secondary md:text-[13px]">
                  {item.role}
                </p>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default FeedbackSection;
