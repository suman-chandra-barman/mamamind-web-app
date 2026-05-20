/** @format */

"use client";

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
import FAQSectionSkeleton from "@/components/Skeletons/FAQSectionSkeleton";
import { useGetFaqsQuery, type FaqItem } from "@/redux/features/faq/faqApi";

const QuestionsSection = () => {
  const { data, isLoading, isFetching, isError } = useGetFaqsQuery();
  const faqs = (data?.data?.faqs ?? []) as FaqItem[];
  const showSkeleton = isLoading || isFetching;
  return (
    <section id="faq" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Common Questions"
            title="Frequently Asked Questions"
          />
        </MotionReveal>

        {showSkeleton ? (
          <FAQSectionSkeleton showTabs={false} />
        ) : isError ? (
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-button-bg/20 bg-white/80 px-6 py-8 text-center text-sm text-secondary">
            Failed to load FAQs. Please try again later.
          </div>
        ) : faqs.length === 0 ? (
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-button-bg/15 bg-white/70 px-6 py-8 text-center text-sm text-secondary">
            No FAQs available right now.
          </div>
        ) : (
          <MotionStagger className="mx-auto mt-10 max-w-4xl">
            {faqs.map((faq) => (
              <MotionStaggerItem key={faq.id}>
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
        )}
      </div>
    </section>
  );
};

export default QuestionsSection;
