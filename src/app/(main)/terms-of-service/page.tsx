/** @format */
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
      <section className="w-full bg-secondary-background py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-secondary mb-4">
            Last updated: 4 April 2025 • Effective date: 4 April 2025
          </p>
          <p className="text-secondary leading-relaxed max-w-3xl mx-auto">
            These Terms of Service (&quot;Terms&quot;) constitute a legally
            binding agreement between you and MamaMind Technologies Ltd
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By creating an
            account or using the MamaMind service, you agree to be bound by
            these Terms.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="w-full bg-background py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-secondary-background border border-[#f3d8dc] rounded-2xl hover:shadow-[0_8px_24px_rgba(219,74,109,0.12)] transition-shadow"
              >
                <div className="text-4xl mb-3 text-center">{card.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2 text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-secondary text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-secondary-background py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(219,74,109,0.08)] border border-[#f3d8dc]">
          {/* Section 1: Definitions */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              1. Definitions
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              In these Terms, the following definitions apply:
            </p>
            <ul className="space-y-3 text-secondary">
              <li>
                <strong className="text-primary">&quot;Service&quot;</strong> means the MamaMind AI
                assistant, website (mamamind.ai), dashboard, and WhatsApp bot
                integration.
              </li>
              <li>
                <strong className="text-primary">&quot;Account&quot;</strong> means your registered
                MamaMind account.
              </li>
              <li>
                <strong className="text-primary">&quot;Subscriber&quot;</strong> means any person who has
                purchased a MamaMind subscription plan.
              </li>
              <li>
                <strong className="text-primary">&quot;Family Member&quot;</strong> means any WhatsApp
                user connected to a shared MamaMind account under a Family or
                Premium Family plan.
              </li>
              <li>
                <strong className="text-primary">&quot;Content&quot;</strong> means any text, data,
                reminders, events, or messages you submit to or receive from the
                Service.
              </li>
            </ul>
          </div>

          {/* Section 2: Eligibility */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              2. Eligibility
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              To use MamaMind, you must be at least 18 years of age. By
              accepting these Terms, you represent and warrant that you are 18
              or older and have the legal capacity to enter into a binding
              contract.
            </p>
            <p className="text-secondary leading-relaxed">
              You are responsible for managing access for family members,
              including any minors. As the account holder, you are responsible
              for all activity that occurs under your account, including
              activity by family members you have invited.
            </p>
          </div>

          {/* Section 3: Account Registration and Security */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              3. Account Registration and Security
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              When you create a MamaMind account, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the security of your account credentials and for all
              activity that occurs under your account.
            </p>
            <p className="text-secondary leading-relaxed">
              You must notify us immediately at{" "}
              <a
                href="mailto:hello@mamamind.ai"
                className="text-button-bg hover:underline font-medium"
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
            <h2 className="text-3xl font-bold text-primary mb-6">
              4. Subscription Plans and Billing
            </h2>

            <div className="space-y-6">
              {/* 4.1 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.1 Available Plans
                </h3>
                <p className="text-secondary leading-relaxed mb-3">
                  MamaMind offers the following monthly subscription plans:
                </p>
                <ul className="list-disc list-inside text-secondary space-y-2">
                  <li>Individual Plan – £19/month – 1 user</li>
                  <li>Family Plan – £49/month – up to 5 family members</li>
                  <li>
                    Premium Family Plan – £349/month – up to 10 family members
                  </li>
                </ul>
              </div>

              {/* 4.2 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.2 Free Trial
                </h3>
                <p className="text-secondary leading-relaxed">
                  New subscribers receive a 7-day free trial. No charge is made
                  during the trial period. After 7 days, your subscription
                  automatically converts to a paid plan unless you cancel before
                  the trial ends.
                </p>
              </div>

              {/* 4.3 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.3 Automatic Renewal
                </h3>
                <p className="text-secondary leading-relaxed">
                  Subscriptions automatically renew on a monthly basis. By
                  subscribing, you authorise MamaMind to charge your payment
                  method on a recurring monthly basis until you cancel. You will
                  receive an email receipt after each charge.
                </p>
              </div>

              {/* 4.4 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.4 Price Changes
                </h3>
                <p className="text-secondary leading-relaxed">
                  We may change subscription prices with at least 30 days&apos;
                  notice. Price changes will be communicated by email. Continued
                  use of the Service after the effective date of a price change
                  constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* 4.5 */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.5 Refund Policy
                </h3>
                <p className="text-secondary leading-relaxed">
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
            <h2 className="text-3xl font-bold text-primary mb-6">
              5. Cancellation
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              You may cancel your subscription at any time through:
            </p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start gap-2">
                <span className="text-button-bg">•</span>
                <span>Your MamaMind dashboard → Settings → Subscription → Cancel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg">•</span>
                <span>
                  Email to{" "}
                  <a
                    href="mailto:hello@mamamind.ai"
                    className="text-button-bg hover:underline font-medium"
                  >
                    hello@mamamind.ai
                  </a>{" "}
                  with your account email and cancellation request
                </span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed">
              Cancellation takes effect at the end of your current billing
              period. You will not be charged again after cancellation. Your
              data will be retained for 30 days following cancellation, after
              which it will be permanently deleted. You may re-subscribe within
              that window to restore your data.
            </p>
          </div>

          {/* Section 6: Acceptable Use Policy */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              6. Acceptable Use Policy
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              You agree to use MamaMind only for lawful purposes and in
              accordance with these Terms. You must not use the Service:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>For any illegal purposes, or in violation of any local,
                national, or international law</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To transmit or procure the sending of any unsolicited or
                unauthorised advertising or promotional material</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To impersonate or attempt to impersonate any person or entity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To engage in any automated data collection or scraping of the
                Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To attempt to gain unauthorised access to any part of the
                Service or any systems connected to it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To transmit any harmful, offensive, harassing, defamatory, or
                otherwise objectionable content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>For commercial resale, republication, or redistribution of the
                Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-button-bg mt-0.5">•</span>
                <span>To interfere with, damage, or disrupt the Service or servers
                used to deliver the Service</span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              We reserve the right to terminate or suspend your account
              immediately, without notice, for any violation of this Acceptable
              Use Policy.
            </p>
          </div>

          {/* Section 7: WhatsApp and Third-Party Services */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              7. WhatsApp and Third-Party Services
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              MamaMind delivers its Service through WhatsApp, which is operated
              by Meta Platforms Inc. Your use of WhatsApp is subject to
              Meta&apos;s own Terms of Service and Privacy Policy. MamaMind is
              not responsible for WhatsApp&apos;s availability, reliability, or
              any charges Meta makes to the WhatsApp platform that may affect
              the MamaMind Service.
            </p>
            <p className="text-secondary leading-relaxed">
              MamaMind also integrates with third-party services including
              Stripe (payments), OpenAI (AI language model), and Amazon Web
              Services (cloud infrastructure). Use of these third-party services
              is subject to their respective terms and privacy policies.
            </p>
          </div>

          {/* Section 8: Intellectual Property */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              8. Intellectual Property
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              All intellectual property rights in the MamaMind Service, website,
              brand, logo, and technology belong to MamaMind Technologies Ltd or
              its licensors. Nothing in these Terms grants you any right, title,
              or interest in such intellectual property.
            </p>
            <p className="text-secondary leading-relaxed">
              You retain ownership of any content you submit to MamaMind (such
              as your events, reminders, and messages). By submitting content,
              you grant MamaMind a limited, non-exclusive, royalty-free licence
              to process that content solely to deliver the Service to you.
            </p>
          </div>

          {/* Section 9: Disclaimer of Warranties */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              The MamaMind Service is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. To the maximum extent permitted by
              law, we disclaim all warranties, express or implied, including
              implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </p>
            <p className="text-secondary leading-relaxed">
              We do not warrant that the Service will be uninterrupted,
              error-free, or free from viruses or other harmful components.
              AI-generated responses are provided for informational and
              organisational purposes only and should not be relied upon as
              medical, legal, or professional advice.
            </p>
          </div>

          {/* Section 10: Limitation of Liability */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              10. Limitation of Liability
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, MamaMind
              Technologies Ltd and its directors, employees, agents, and
              affiliates will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of data, loss of profits, business interruption,
              or any other loss arising out of or in connection with the
              Service.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              Our total aggregate liability to you for all claims relating to
              the Service shall not exceed the total subscription fees paid by
              you in the 12 months preceding the claim.
            </p>
            <p className="text-secondary leading-relaxed">
              Nothing in these Terms limits us liability for death or personal
              injury caused by our negligence, fraud, or any other liability
              that cannot be excluded by law.
            </p>
          </div>

          {/* Section 11: Termination */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              11. Termination
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account and
              access to the Service at any time, with or without cause, upon
              notice where reasonably practicable. Grounds for termination
              include, but are not limited to, violation of these Terms,
              non-payment, or abuse of the Service.
            </p>
            <p className="text-secondary leading-relaxed">
              You may terminate your account at any time by cancelling your
              subscription and contacting us to request account deletion. Upon
              termination, your right to use the Service ceases immediately.
            </p>
          </div>

          {/* Section 12: Changes to These Terms */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              12. Changes to These Terms
            </h2>
            <p className="text-secondary leading-relaxed">
              We may update these Terms from time to time. Where changes are
              material, we will provide at least 14 days' notice by email before
              the new Terms take effect. Your continued use of the Service after
              the effective date constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 13: Governing Law and Dispute Resolution */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              13. Governing Law and Dispute Resolution
            </h2>
            <p className="text-secondary leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of England and Wales. Any dispute arising from or in
              connection with these Terms shall first be referred to mediation.
              If mediation is unsuccessful, disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          {/* Section 14: Contact and Notices */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary mb-6">
              14. Contact and Notices
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              All legal notices or enquiries regarding these Terms should be
              sent to:
            </p>
            <div className="bg-secondary-background border border-[#f3d8dc] p-6 rounded-2xl mb-6">
              <p className="font-semibold text-primary mb-2">
                MamaMind Technologies Ltd – Legal
              </p>
              <p className="text-secondary mb-2">
                Email:{" "}
                <a
                  href="mailto:legal@mamamind.ai"
                  className="text-button-bg hover:underline font-medium"
                >
                  legal@mamamind.ai
                </a>
              </p>
              <p className="text-secondary mb-2">
                Address: 20 Farringdon Road, London, EC1M 3HE, United Kingdom
              </p>
              <p className="text-secondary">
                Company No. 14872203 (England &amp; Wales)
              </p>
            </div>

            <div className="bg-secondary-background border border-[#f3d8dc] p-4 rounded-2xl">
              <p className="text-secondary">
                <strong className="text-primary">Related Policies:</strong>{" "}
                <a
                  href="/privacy-policy"
                  className="text-button-bg hover:underline font-medium"
                >
                  Privacy Policy
                </a>
                {" • "}
                <a
                  href="/cookie-policy"
                  className="text-button-bg hover:underline font-medium"
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
