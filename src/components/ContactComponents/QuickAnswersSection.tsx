/** @format */

"use client";

import { MapPin } from "lucide-react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "../CommonComponents/MotionReveal";
import SectionHeading from "../CommonComponents/SectionHeading";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQItemBlock = ({ item }: { item: FAQItem }) => {
  return (
    <div className="w-full py-2 md:py-4">
      <h4 className="text-primary text-sm md:text-base font-semibold text-left">
        {item.question}
      </h4>
      <p className="text-secondary text-xs md:text-sm mt-3 leading-6">
        {item.answer}
      </p>
    </div>
  );
};

const QuickAnswersSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel at any time from your dashboard or by emailing hello@famora.ai. Cancellations take effect at the end of your current billing period.",
    },
    {
      question:
        "I haven't received my WhatsApp activation link — what do I do?",
      answer:
        "Check your spam folder first. If it's not there, email us with your order confirmation number and we'll resend it within 30 minutes.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Plan changes take effect immediately, and billing is adjusted pro-rata.",
    },
    {
      question: "How do I add a new family member?",
      answer:
        "In your dashboard, go to Family Members and click 'Invite Member'. They'll receive a WhatsApp message to activate their connection to the shared Famora bot.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes — all new subscribers get a 7-day free trial. No credit card is required to start. You'll only be charged if you keep your subscription after the trial period.",
    },
  ];

  return (
    <MotionReveal className="space-y-8">
      <SectionHeading
        semiTitle="COMMON QUESTIONS"
        title="Quick answers"
        className="mb-0 text-left"
        titleClassName="md:text-3xl"
      />

      <MotionStagger className="space-y-0 divide-y mt-4 md:mt-6 divide-gray-200">
        {faqItems.map((item, index) => (
          <MotionStaggerItem key={index}>
            <FAQItemBlock item={item} />
          </MotionStaggerItem>
        ))}
      </MotionStagger>

      {/* Registered Office Section */}
      <MotionReveal
        delay={0.3}
        className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
      >
        <div className="flex gap-3">
          <MapPin className="w-5 h-5 text-button-bg shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm md:text-base mb-2">
              Registered Office
            </h4>
            <p className="text-primary text-xs md:text-sm font-medium mb-1">
              Famora Technologies Ltd
            </p>
            <p className="text-secondary text-xs md:text-sm leading-6">
              20 Farringdon Road
              <br />
              London, EC1M 3HE
              <br />
              United Kingdom
            </p>
            <p className="text-button-bg text-xs md:text-sm font-medium mt-2">
              Company No: 14872931 • VAT Reg: 408 456 788 0D
            </p>
          </div>
        </div>
      </MotionReveal>
    </MotionReveal>
  );
};

export default QuickAnswersSection;
