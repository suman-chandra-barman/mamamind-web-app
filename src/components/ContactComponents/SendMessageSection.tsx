/** @format */

"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { MotionReveal } from "../CommonComponents/MotionReveal";
import SectionHeading from "../CommonComponents/SectionHeading";
import {
  useSendContactMessageMutation,
  type ContactEnquiryType,
} from "@/redux/features/contact/contactApi";

const SendMessageSection = () => {
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendMessage, { isLoading }] = useSendContactMessageMutation();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await sendMessage({
        enquiry_type: formData.enquiryType as ContactEnquiryType,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }).unwrap();

      toast.success(response.message);
      setFormData({
        enquiryType: "",
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const fallbackMessage =
        "An error occurred while sending your message. Please try again later.";
      const message =
        typeof error === "object" &&
        error !== null &&
        "data" in error &&
        typeof (error as { data?: { message?: string } }).data?.message ===
          "string"
          ? (error as { data?: { message?: string } }).data?.message
          : fallbackMessage;

      toast.error(message);
    }
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
            <option value="general">General</option>
            <option value="billing">Billing</option>
            <option value="features">Features</option>
            <option value="privacy">Privacy</option>
            <option value="getting_started">Getting Started</option>
            <option value="support">Support</option>
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
          disabled={isLoading}
          className="w-full px-6 py-3 rounded-full bg-button-bg hover:bg-opacity-90 text-white text-xs md:text-sm font-semibold transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Sending..." : "✉ Send Message"}
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
