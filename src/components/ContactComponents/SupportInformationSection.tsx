/** @format */

"use client";

import { Mail, MessageCircle, Clock } from "lucide-react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "../CommonComponents/MotionReveal";

const SupportCard = ({
  icon: Icon,
  title,
  description,
  contact,
  actionText,
  delay = 0,
}: {
  icon: any;
  title: string;
  description: string;
  contact: string;
  actionText: string;
  delay?: number;
}) => {
  return (
    <MotionReveal delay={delay} className="h-full">
      <div className="flex flex-col h-full rounded-lg border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-button-bg/25 text-button-bg">
          <Icon className="h-4 w-4 text-secondary" />
        </div>
        <h3 className="text-base md:lg font-semibold text-primary mb-2">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-secondary mb-3 grow">
          {description}
        </p>
        <p className="text-primary font-medium text-sm md:text-[15px] mb-3">
          {contact}
        </p>
        <button className="text-button-bg cursor-pointer text-start text-xs md:text-sm font-medium hover:opacity-80 transition-opacity">
          {actionText}
        </button>
      </div>
    </MotionReveal>
  );
};

const SupportInformationSection = () => {
  const supportCards = [
    {
      icon: Mail,
      title: "Email Support",
      description:
        "For general enquiries, billing questions, and account help.",
      contact: "hello@famora.ai",
      actionText: "Send an email  →",
      delay: 0,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description:
        "Get help directly on WhatsApp — the platform you already use.",
      contact: "+44 7700 900 123",
      actionText: "Message us  →",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Response Times",
      description: "We aim to reply to all enquiries within one business day.",
      contact: "Mon-Fri, 9am-6pm GMT",
      actionText: "",
      delay: 0.2,
    },
  ];

  return (
    <section className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4  sm:px-6 lg:px-8">
        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {supportCards.map((card, index) => (
            <MotionStaggerItem key={index}>
              <SupportCard {...card} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default SupportInformationSection;
