/** @format */

import React from "react";
import CommonQuestionsSection from "@/components/FAQComponents/CommonQuestionsSection";
import StillHaveQuestionSection from "@/components/FAQComponents/StillHaveQuestionSection";

const FAQPage = () => {
  return (
    <main className="w-full bg-transparent">
      <CommonQuestionsSection />
      <StillHaveQuestionSection />
    </main>
  );
};

export default FAQPage;
