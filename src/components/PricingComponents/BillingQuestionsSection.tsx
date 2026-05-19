/** @format */

"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards via Stripe. Apple Pay and Google Pay are also supported.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data is retained for 30 days after cancellation. Re-subscribing within that window fully restores your account.",
  },
];

const BillingQuestionsSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-secondary-background">
      <div className="max-w-3xl mx-auto">
        <MotionReveal>
          <SectionHeading
            titleClassName="text-3xl md:text-4xl font-bold tracking-tight text-primary text-center"
            title="Billing questions"
          />
        </MotionReveal>

        {/* FAQ Items */}
        <MotionStagger
          className="mt-12 md:mt-16 space-y-4 md:space-y-6"
          stagger={0.08}
          delayChildren={0.12}
        >
          {faqs.map((faq, idx) => (
            <MotionStaggerItem key={idx}>
              <Collapsible
                open={openItem === idx}
                onOpenChange={() => setOpenItem(openItem === idx ? null : idx)}
              >
                <CollapsibleTrigger asChild>
                  <button className="w-full text-left group">
                    <div className="flex items-start justify-between gap-4 md:gap-6 py-4 md:py-6 px-4 md:px-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors hover:bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-semibold text-primary flex-1">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItem === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary/70 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent asChild>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs md:text-[15px] text-secondary px-4 md:px-6 py-4 md:py-6 bg-gray-50 rounded-lg border border-gray-200 border-t-0 rounded-t-none leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default BillingQuestionsSection;
