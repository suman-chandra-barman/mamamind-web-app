/** @format */

import React from "react";
import GetInTouchSection from "@/components/ContactComponents/GetInTouchSection";
import SupportInformationSection from "@/components/ContactComponents/SupportInformationSection";
import MessageAndQuestionsSection from "@/components/ContactComponents/MessageAndQuestionsSection";

const ContactPage = () => {
  return (
    <main className="w-full bg-transparent">
      <GetInTouchSection />
      <SupportInformationSection />
      <MessageAndQuestionsSection />
    </main>
  );
};

export default ContactPage;
