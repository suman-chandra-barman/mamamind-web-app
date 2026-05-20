"use client";

import React from "react";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const TermsOfServicePage = () => {
  const featureCards: FeatureCard[] = [
    {
      icon: "📜",
      title: "Plain Language Summary",
      description:
        "These terms govern your use of MamaMind. Please read them in full before creating an account.",
    },
    {
      icon: "💳",
      title: "Subscription Billing",
      description:
        "Subscriptions renew automatically. Cancel anytime from your dashboard or by contacting us.",
    },
    {
      icon: "⚖️",
      title: "Fair Use Policy",
      description:
        "MamaMind is for personal family use only. Commercial or resale use is not permitted.",
    },
    {
      icon: "✅",
      title: "Acceptable Use",
      description:
        "Do not use MamaMind for illegal, harmful, or abusive purposes. Violations result in immediate account suspension.",
    },
    {
      icon: "⚖️",
      title: "English Law Applies",
      description: "These terms are governed by the laws of England and Wales.",
    },
    {
      icon: "📞",
      title: "Contact for Disputes",
      description:
        "Contact us at legal@mamamind.ai before initiating any legal proceedings.",
    },
  ];

  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="w-full bg-linear-to-b from-slate-50 to-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Last updated: 4 April 2025 • Effective date: 4 April 2025
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            These Terms of Service (&quot;Terms&quot;) constitute a legally
            binding agreement between you and MamaMind Technologies Ltd
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By creating an
            account or using the MamaMind service, you agree to be bound by
            these Terms.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3 text-center">{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-200">
          {/* Section 1: Definitions */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Definitions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In these Terms, the following definitions apply:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>&quot;Service&quot;</strong> means the MamaMind AI
                assistant, website (mamamind.ai), dashboard, and WhatsApp bot
                integration.
              </li>
              <li>
                <strong>&quot;Account&quot;</strong> means your registered
                MamaMind account.
              </li>
              <li>
                <strong>&quot;Subscriber&quot;</strong> means any person who has
                purchased a MamaMind subscription plan.
              </li>
              <li>
                <strong>&quot;Family Member&quot;</strong> means any WhatsApp
                user connected to a shared MamaMind account under a Family or
                Premium Family plan.
              </li>
              <li>
                <strong>&quot;Content&quot;</strong> means any text, data,
                reminders, events, or messages you submit to or receive from the
                Service.
              </li>
            </ul>
          </div>

          {/* Section 2: Eligibility */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use MamaMind, you must be at least 18 years of age. By
              accepting these Terms, you represent and warrant that you are 18
              or older and have the legal capacity to enter into a binding
              contract.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for managing access for family members,
              including any minors. As the account holder, you are responsible
              for all activity that occurs under your account, including
              activity by family members you have invited.
            </p>
          </div>

          {/* Section 3: Account Registration and Security */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Account Registration and Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create a MamaMind account, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the security of your account credentials and for all
              activity that occurs under your account.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You must notify us immediately at{" "}
              <a
                href="mailto:hello@mamamind.ai"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                hello@mamamind.ai
              </a>{" "}
              if you suspect any unauthorised access to your account. MamaMind
              is not liable for any loss or damage arising from your failure to
              maintain account security.
            </p>
          </div>

          {/* Section 4: Subscription Plans and Billing */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Subscription Plans and Billing
            </h2>

            <div className="space-y-6">
              {/* 4.1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.1 Available Plans
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  MamaMind offers the following monthly subscription plans:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Individual Plan – £19/month – 1 user</li>
                  <li>Family Plan – £49/month – up to 5 family members</li>
                  <li>
                    Premium Family Plan – £349/month – up to 10 family members
                  </li>
                </ul>
              </div>

              {/* 4.2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.2 Free Trial
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  New subscribers receive a 7-day free trial. No charge is made
                  during the trial period. After 7 days, your subscription
                  automatically converts to a paid plan unless you cancel before
                  the trial ends.
                </p>
              </div>

              {/* 4.3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.3 Automatic Renewal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Subscriptions automatically renew on a monthly basis. By
                  subscribing, you authorise MamaMind to charge your payment
                  method on a recurring monthly basis until you cancel. You will
                  receive an email receipt after each charge.
                </p>
              </div>

              {/* 4.4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.4 Price Changes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may change subscription prices with at least 30 days&apos;
                  notice. Price changes will be communicated by email. Continued
                  use of the Service after the effective date of a price change
                  constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* 4.5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.5 Refund Policy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  MamaMind does not offer refunds for partial months. If you
                  cancel your subscription, you will retain access to the
                  Service until the end of your current billing period. In cases
                  of billing errors or service failures attributable to
                  MamaMind, we will issue a full or partial refund at our
                  discretion.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Cancellation */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Cancellation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may cancel your subscription at any time through:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>
                Your MamaMind dashboard → Settings → Subscription → Cancel
              </li>
              <li>
                Email to{" "}
                <a
                  href="mailto:hello@mamamind.ai"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  hello@mamamind.ai
                </a>{" "}
                with your account email and cancellation request
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Cancellation takes effect at the end of your current billing
              period. You will not be charged again after cancellation. Your
              data will be retained for 30 days following cancellation, after
              which it will be permanently deleted. You may re-subscribe within
              that window to restore your data.
            </p>
          </div>

          {/* Section 6: Acceptable Use Policy */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Acceptable Use Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use MamaMind only for lawful purposes and in
              accordance with these Terms. You must not use the Service:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                For any illegal purposes, or in violation of any local,
                national, or international law
              </li>
              <li>
                To transmit or procure the sending of any unsolicited or
                unauthorised advertising or promotional material
              </li>
              <li>
                To impersonate or attempt to impersonate any person or entity
              </li>
              <li>
                To engage in any automated data collection or scraping of the
                Service
              </li>
              <li>
                To attempt to gain unauthorised access to any part of the
                Service or any systems connected to it
              </li>
              <li>
                To transmit any harmful, offensive, harassing, defamatory, or
                otherwise objectionable content
              </li>
              <li>
                For commercial resale, republication, or redistribution of the
                Service
              </li>
              <li>
                To interfere with, damage, or disrupt the Service or servers
                used to deliver the Service
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to terminate or suspend your account
              immediately, without notice, for any violation of this Acceptable
              Use Policy.
            </p>
          </div>

          {/* Section 7: WhatsApp and Third-Party Services */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. WhatsApp and Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind delivers its Service through WhatsApp, which is operated
              by Meta Platforms Inc. Your use of WhatsApp is subject to
              Meta&apos;s own Terms of Service and Privacy Policy. MamaMind is
              not responsible for WhatsApp&apos;s availability, reliability, or
              any charges Meta makes to the WhatsApp platform that may affect
              the MamaMind Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              MamaMind also integrates with third-party services including
              Stripe (payments), OpenAI (AI language model), and Amazon Web
              Services (cloud infrastructure). Use of these third-party services
              is subject to their respective terms and privacy policies.
            </p>
          </div>

          {/* Section 8: Intellectual Property */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All intellectual property rights in the MamaMind Service, website,
              brand, logo, and technology belong to MamaMind Technologies Ltd or
              its licensors. Nothing in these Terms grants you any right, title,
              or interest in such intellectual property.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of any content you submit to MamaMind (such
              as your events, reminders, and messages). By submitting content,
              you grant MamaMind a limited, non-exclusive, royalty-free licence
              to process that content solely to deliver the Service to you.
            </p>
          </div>

          {/* Section 9: Disclaimer of Warranties */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MamaMind Service is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. To the maximum extent permitted by
              law, we disclaim all warranties, express or implied, including
              implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not warrant that the Service will be uninterrupted,
              error-free, or free from viruses or other harmful components.
              AI-generated responses are provided for informational and
              organisational purposes only and should not be relied upon as
              medical, legal, or professional advice.
            </p>
          </div>

          {/* Section 10: Limitation of Liability */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, MamaMind
              Technologies Ltd and its directors, employees, agents, and
              affiliates will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of data, loss of profits, business interruption,
              or any other loss arising out of or in connection with the
              Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our total aggregate liability to you for all claims relating to
              the Service shall not exceed the total subscription fees paid by
              you in the 12 months preceding the claim.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nothing in these Terms limits us liability for death or personal
              injury caused by our negligence, fraud, or any other liability
              that cannot be excluded by law.
            </p>
          </div>

          {/* Section 11: Termination */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              11. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account and
              access to the Service at any time, with or without cause, upon
              notice where reasonably practicable. Grounds for termination
              include, but are not limited to, violation of these Terms,
              non-payment, or abuse of the Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may terminate your account at any time by cancelling your
              subscription and contacting us to request account deletion. Upon
              termination, your right to use the Service ceases immediately.
            </p>
          </div>

          {/* Section 12: Changes to These Terms */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              12. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Where changes are
              material, we will provide at least 14 days' notice by email before
              the new Terms take effect. Your continued use of the Service after
              the effective date constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 13: Governing Law and Dispute Resolution */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              13. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of England and Wales. Any dispute arising from or in
              connection with these Terms shall first be referred to mediation.
              If mediation is unsuccessful, disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          {/* Section 14: Contact and Notices */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              14. Contact and Notices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All legal notices or enquiries regarding these Terms should be
              sent to:
            </p>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">
                MamaMind Technologies Ltd – Legal
              </p>
              <p className="text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:legal@mamamind.ai"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  legal@mamamind.ai
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                Address: 20 Farringdon Road, London, EC1M 3HE, United Kingdom
              </p>
              <p className="text-gray-700">
                Company No. 14872203 (England & Wales)
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Related Policies:</strong>{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>
                {" • "}
                <a
                  href="/cookie-policy"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
