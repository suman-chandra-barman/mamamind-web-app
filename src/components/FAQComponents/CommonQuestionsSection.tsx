/** @format */

"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import FAQSectionSkeleton from "@/components/Skeletons/FAQSectionSkeleton";
import {
  useGetFaqsQuery,
  type FaqCategory,
  type FaqCategoryKey,
  type FaqItem,
} from "@/redux/features/faq/faqApi";

const CommonQuestionsSection = () => {
  const [activeTab, setActiveTab] = React.useState<FaqCategoryKey>("all");
  const [openId, setOpenId] = React.useState<string | null>(null);
  const { data, isLoading, isFetching, isError } = useGetFaqsQuery(
    activeTab === "all" ? undefined : { category: activeTab },
  );

  React.useEffect(() => {
    setOpenId(null);
  }, [activeTab]);

  const categories = (data?.data.categories ?? []) as FaqCategory[];
  const faqs = (data?.data.faqs ?? []) as FaqItem[];
  const showSkeleton = isLoading || isFetching;

  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Common Questions"
            title="Frequently Asked Questions"
          />
        </MotionReveal>

        <MotionReveal delay={0.08}>
          {showSkeleton ? (
            <FAQSectionSkeleton />
          ) : isError ? (
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-button-bg/20 bg-white/80 px-6 py-8 text-center text-sm text-secondary">
              Failed to load FAQs. Please try again later.
            </div>
          ) : (
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as FaqCategoryKey)}
              className="mx-auto mt-10 max-w-3xl"
            >
              <TabsList className="mx-auto h-auto flex-wrap gap-2 rounded-full bg-transparent p-0">
                {categories.map((tab) => (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="h-7 rounded-full border border-button-bg/25 px-3 text-[11px] font-medium text-secondary transition-colors hover:text-primary data-[state=active]:border-button-bg data-[state=active]:bg-button-bg data-[state=active]:text-white md:h-8 md:px-4 md:text-xs"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((tab) => (
                <TabsContent
                  key={tab.key}
                  value={tab.key}
                  className="mt-8 md:mt-9"
                >
                  {faqs.length === 0 ? (
                    <div className="rounded-2xl border border-button-bg/15 bg-white/70 px-6 py-8 text-center text-sm text-secondary">
                      No FAQs found for this category.
                    </div>
                  ) : (
                    <MotionStagger className="space-y-0">
                      {faqs.map((faq) => (
                        <MotionStaggerItem key={faq.id}>
                          <Collapsible
                            open={openId === `${faq.id}`}
                            onOpenChange={(isOpen) =>
                              setOpenId(isOpen ? `${faq.id}` : null)
                            }
                            className="border-b border-button-bg/18"
                          >
                            <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 py-3.5 text-left md:py-4">
                              <span className="text-base font-medium text-primary md:text-lg">
                                {faq.question}
                              </span>
                              <ChevronDown className="h-4 w-4 shrink-0 text-button-bg transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>

                            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                              <p className="pb-4 pr-8 text-[13px] leading-6 text-secondary md:text-[15px] md:leading-7">
                                {faq.answer}
                              </p>
                            </CollapsibleContent>
                          </Collapsible>
                        </MotionStaggerItem>
                      ))}
                    </MotionStagger>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </MotionReveal>
      </div>
    </section>
  );
};

export default CommonQuestionsSection;
