/** @format */

"use client";

import { useState } from "react";
import { MotionReveal } from "../CommonComponents/MotionReveal";
import SectionHeading from "../CommonComponents/SectionHeading";

const SendMessageSection = () => {
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <MotionReveal className="space-y-8 w-full">
      <SectionHeading
        semiTitle="SEND A MESSAGE"
        title="Write to us directly"
        className="mb-0 text-left"
        titleClassName="md:text-3xl"
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-4 md:mt-6 bg-white rounded-xl p-4  md:p-8"
      >
        {/* Enquiry Type */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-primary mb-2">
            Enquiry Type
          </label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-xs md:text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-button-bg focus:border-transparent transition-all"
            required
          >
            <option value="">Select enquiry type</option>
            <option value="general">General Enquiry</option>
            <option value="billing">Billing Question</option>
            <option value="account">Account Help</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-primary mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Sarah Thompson"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-xs md:text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-button-bg focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-xs md:text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-button-bg focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-primary mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How do I add a family member?"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-xs md:text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-button-bg focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs md:text-sm font-medium text-primary mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about how we can help..."
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-xs md:text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-button-bg focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-full bg-button-bg hover:bg-opacity-90 text-white text-xs md:text-sm font-semibold transition-all duration-300 hover:shadow-lg"
        >
          ✉ Send Message
        </button>

        <p className="text-xs text-secondary text-center">
          We&apos;ll get back to you within 1 business day. Your details will
          only be used to respond to your enquiry.
        </p>
      </form>
    </MotionReveal>
  );
};

export default SendMessageSection;
