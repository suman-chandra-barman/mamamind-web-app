/** @format */

import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const faqs = [
  {
    question: "Can multiple family members use the same bot?",
    answer:
      "Yes. Family and Premium plans let multiple members share one assistant while keeping private items private.",
  },
  {
    question: "Will my data be saved if I cancel my subscription?",
    answer:
      "Your data remains available during your grace period. You can export reminders and schedules before closure.",
  },
  {
    question: "Can I set a reminder months in advance?",
    answer:
      "Absolutely. Long-term reminders are one of Famora's core features and can be repeated automatically.",
  },
  {
    question: "Is my information private and secure?",
    answer:
      "Your account uses encrypted storage, and private reminders are visible only to the account owner.",
  },
  {
    question: "How do I get started?",
    answer:
      "Pick a plan, complete checkout, and your WhatsApp setup link will be sent instantly.",
  },
  {
    question: "What happens when two family members have the same event time?",
    answer:
      "Famora flags scheduling conflicts and suggests alternatives to avoid overlap.",
  },
];

const QuestionsSection = () => {
  return (
    <section id="faq" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Common Questions"
            title="Frequently Asked Questions"
          />
        </MotionReveal>

        <MotionStagger className="mx-auto mt-10 max-w-4xl">
          {faqs.map((faq) => (
            <MotionStaggerItem key={faq.question}>
              <Collapsible className="border-b border-button-bg/20 py-2 md:py-3">
                <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left text-base font-medium text-[#2C2420] md:text-lg">
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-button-bg transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-2 pr-8 text-sm leading-7 text-secondary md:text-base">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default QuestionsSection;
