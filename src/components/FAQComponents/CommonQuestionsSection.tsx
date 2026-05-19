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

type Category = "all" | "billing" | "features" | "privacy" | "getting-started";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: Exclude<Category, "all">;
};

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Billing", value: "billing" },
  { label: "Features", value: "features" },
  { label: "Privacy", value: "privacy" },
  { label: "Getting Started", value: "getting-started" },
];

const faqs: FAQItem[] = [
  {
    id: "features-members",
    question: "Can multiple family members use the same bot?",
    answer:
      "Yes. Family members can use one shared bot while keeping private reminders private for each person.",
    category: "features",
  },
  {
    id: "features-family-count",
    question: "How many family members can I add?",
    answer:
      "The Family plan supports up to 2 members and Premium Family supports up to 5 members.",
    category: "features",
  },
  {
    id: "features-conflict",
    question: "What is conflict detection and how does it work?",
    answer:
      "Conflict detection automatically flags overlapping events or reminders and helps you avoid scheduling clashes.",
    category: "features",
  },
  {
    id: "features-advance-reminder",
    question: "Can I set a reminder months in advance?",
    answer:
      "Yes. You can schedule reminders well in advance, including recurring reminders for long-term planning.",
    category: "features",
  },
  {
    id: "features-uptime",
    question: "Does the bot work 24/7?",
    answer:
      "Yes. Famora runs continuously so your reminders and notifications are delivered whenever they are due.",
    category: "features",
  },
  {
    id: "features-school",
    question: "Can I generate school letters and notes?",
    answer:
      "Yes. You can generate useful family and school-related notes quickly from the assistant.",
    category: "features",
  },
  {
    id: "billing-data",
    question: "Will my data be saved if I cancel my subscription?",
    answer:
      "Yes. Your data is retained for 30 days after cancellation. Re-subscribing within that period restores your account.",
    category: "billing",
  },
  {
    id: "billing-switch",
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can change plans any time from your dashboard. Upgrades and downgrades take effect immediately.",
    category: "billing",
  },
  {
    id: "billing-payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards via Stripe. Apple Pay and Google Pay are also supported.",
    category: "billing",
  },
  {
    id: "billing-trial",
    question: "Is there a free trial?",
    answer:
      "Yes. The Family plan includes a free trial so you can explore features before committing.",
    category: "billing",
  },
  {
    id: "privacy-secure",
    question: "Is my information private and secure?",
    answer:
      "Yes. Your data is protected with secure storage and access controls designed to keep family information safe.",
    category: "privacy",
  },
  {
    id: "privacy-private-reminders",
    question: "Can other family members see my private reminders?",
    answer:
      "No. Private reminders remain visible only to you, even in shared family spaces.",
    category: "privacy",
  },
  {
    id: "privacy-whatsapp",
    question: "Is my WhatsApp number shared with anyone?",
    answer:
      "No. Your WhatsApp number is used only for service functionality and is not shared publicly.",
    category: "privacy",
  },
  {
    id: "getting-started-how",
    question: "How do I get started?",
    answer:
      "Choose your plan, complete checkout, and follow the setup steps to connect your WhatsApp account.",
    category: "getting-started",
  },
  {
    id: "getting-started-download",
    question: "Do I need to download anything?",
    answer:
      "No download is required. Famora works through WhatsApp, so setup is quick and simple.",
    category: "getting-started",
  },
  {
    id: "getting-started-conflict-time",
    question: "What happens when two family members have the same event time?",
    answer:
      "The system flags conflicts so everyone is aware and can quickly coordinate updates.",
    category: "getting-started",
  },
];

const CommonQuestionsSection = () => {
  const [activeTab, setActiveTab] = React.useState<Category>("all");
  const [openId, setOpenId] = React.useState<string | null>(null);

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
          <Tabs
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value as Category);
              setOpenId(null);
            }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <TabsList className="mx-auto h-auto flex-wrap gap-2 rounded-full bg-transparent p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="h-7 rounded-full border border-button-bg/25 px-3 text-[11px] font-medium text-secondary transition-colors hover:text-primary data-[state=active]:border-button-bg data-[state=active]:bg-button-bg data-[state=active]:text-white md:h-8 md:px-4 md:text-xs"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => {
              const tabFaqs =
                tab.value === "all"
                  ? faqs
                  : faqs.filter((item) => item.category === tab.value);

              return (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="mt-8 md:mt-9"
                >
                  <MotionStagger className="space-y-0">
                    {tabFaqs.map((faq) => (
                      <MotionStaggerItem key={faq.id}>
                        <Collapsible
                          open={openId === faq.id}
                          onOpenChange={(isOpen) =>
                            setOpenId(isOpen ? faq.id : null)
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
                </TabsContent>
              );
            })}
          </Tabs>
        </MotionReveal>
      </div>
    </section>
  );
};

export default CommonQuestionsSection;
