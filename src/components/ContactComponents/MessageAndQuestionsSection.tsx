/** @format */

"use client";

import SendMessageSection from "./SendMessageSection";
import QuickAnswersSection from "./QuickAnswersSection";

const MessageAndQuestionsSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Send Message */}
          <div className="flex flex-col">
            <SendMessageSection />
          </div>

          {/* Right Column - Quick Answers */}
          <div className="flex flex-col">
            <QuickAnswersSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageAndQuestionsSection;
