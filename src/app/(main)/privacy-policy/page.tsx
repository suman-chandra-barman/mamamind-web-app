"use client";

import React from "react";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const PrivacyPolicyPage = () => {
  const featureCards: FeatureCard[] = [
    {
      icon: "🔒",
      title: "GDPR Compliant",
      description: "We meet all UK and EU data protection requirements.",
    },
    {
      icon: "🔐",
      title: "Encrypted Data",
      description: "All data is encrypted in transit and at rest.",
    },
    {
      icon: "🚫",
      title: "No Data Selling",
      description:
        "We never sell or share your personal data with advertisers.",
    },
    {
      icon: "🗑️",
      title: "Right to Erasure",
      description: "Request full deletion of your data at any time.",
    },
    {
      icon: "📤",
      title: "Data Portability",
      description: "Export your data in a readable format on request.",
    },
    {
      icon: "👤",
      title: "DPO Contact",
      description: "Our Data Protection Officer is reachable at any time.",
    },
  ];

  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="w-full bg-linear-to-b from-slate-50 to-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Last updated: 4 April 2025 • Effective date: 4 April 2025
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            This Privacy Policy explains how MamaMind (&quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, and
            protects your personal data when you use the MamaMind service,
            website, and WhatsApp integration.
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
          {/* Section 1: Who We Are */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind is a company dedicated to helping families manage their
              daily tasks and communications. We are committed to protecting
              your privacy and ensuring you have a positive experience on our
              platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our Data Protection Officer can be contacted at:{" "}
              <a
                href="mailto:privacy@mamamind.ai"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                privacy@mamamind.ai
              </a>
            </p>
          </div>

          {/* Section 2: What Personal Data We Collect */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. What Personal Data We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you use MamaMind, we collect the following types of personal
              data:
            </p>

            <div className="space-y-6">
              {/* 2.1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.1 Account and Registration Data
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>WhatsApp phone number</li>
                  <li>
                    Subscription and payment details (processed by Stripe — we
                    do not store card numbers)
                  </li>
                  <li>
                    Family member names and relationships (as provided by you)
                  </li>
                </ul>
              </div>

              {/* 2.2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.2 Usage Data
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Messages you send to the MamaMind WhatsApp bot</li>
                  <li>Reminders, events, and tasks you create</li>
                  <li>
                    Feature usage patterns (anonymised for service improvement)
                  </li>
                  <li>
                    Device type and IP address (for security and fraud
                    prevention)
                  </li>
                </ul>
              </div>

              {/* 2.3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.3 Data We Do Not Collect
                </h3>
                <p className="text-gray-700">
                  We do not collect any special category data (such as health
                  information, racial or ethnic origin, political opinions,
                  religious beliefs, or biometric data) unless you explicitly
                  include such information in messages to the bot.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: How We Use Your Data */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. How We Use Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use your personal data for the following purposes, each with a
              corresponding legal basis under UK GDPR:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-50 border-b-2 border-amber-200">
                    <th className="text-left p-4 font-semibold text-gray-900">
                      Purpose
                    </th>
                    <th className="text-left p-4 font-semibold text-gray-900">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-gray-700">
                      Providing the MamaMind AI assistant service
                    </td>
                    <td className="p-4 text-blue-600">
                      Performance of contract
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700">
                      Processing payments and managing subscriptions
                    </td>
                    <td className="p-4 text-blue-600">
                      Performance of contract
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-gray-700">
                      Sending service notifications, reminders, and updates
                    </td>
                    <td className="p-4 text-blue-600">
                      Performance of contract
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700">
                      Improving and developing new features (anonymised data)
                    </td>
                    <td className="p-4 text-blue-600">Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-gray-700">
                      Complying with legal and regulatory obligations
                    </td>
                    <td className="p-4 text-blue-600">Legal obligation</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-gray-700">
                      Fraud prevention and security monitoring
                    </td>
                    <td className="p-4 text-blue-600">Legitimate interests</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 text-gray-700">
                      Sending marketing emails (if opted in)
                    </td>
                    <td className="p-4 text-blue-600">Consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: WhatsApp Data Processing */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. WhatsApp Data Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind operates through WhatsApp using the Meta WhatsApp
              Business API. When you send messages to the MamaMind bot, those
              messages are transmitted through WhatsApp&apos;s infrastructure.
              Meta (WhatsApp&apos;s parent company) processes those messages in
              accordance with their own Privacy Policy and Terms of Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind receives and processes the content of messages you send
              to the MamaMind bot solely to provide the AI response and to store
              your events and reminders. We do not sell or share WhatsApp
              message content with any third party.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For more information about how Meta processes your data, please
              refer to WhatsApp&apos;s Privacy Policy at{" "}
              <a
                href="https://www.whatsapp.com/privacy"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                www.whatsapp.com/privacy
              </a>
              .
            </p>
          </div>

          {/* Section 5: Data Sharing and Third Parties */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Data Sharing and Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We only share your personal data with trusted third parties in the
              following circumstances:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Stripe (payment processing)</strong> — to handle
                subscription billing securely
              </li>
              <li>
                <strong>OpenAI (AI processing)</strong> — to power natural
                language understanding in the bot, subject to data processing
                agreements
              </li>
              <li>
                <strong>Amazon Web Services (cloud infrastructure)</strong> — to
                store and serve your data with servers located in the EU
              </li>
              <li>
                <strong>Meta/WhatsApp Business API</strong> — to deliver
                messages through the WhatsApp platform
              </li>
              <li>
                <strong>Legal authorities</strong> — if required by law, court
                order, or to protect our users from harm
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-6">
              We never sell your personal data. We never share your data with
              advertising networks or data brokers.
            </p>
          </div>

          {/* Section 6: Data Retention */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to
              provide the MamaMind service or as required by law:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Active accounts data retained for the duration of your
                subscription
              </li>
              <li>
                After cancellation: account data retained for 30 days to allow
                reinstatement, then deleted
              </li>
              <li>
                Billing records retained for 7 years to comply with UK tax and
                financial regulations
              </li>
              <li>
                Support correspondence retained for 2 years from the date of
                last contact
              </li>
              <li>
                Anonymised analytics retained indefinitely for service
                improvement purposes
              </li>
            </ul>
          </div>

          {/* Section 7: Your Rights Under UK GDPR */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. Your Rights Under UK GDPR
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject, you have the following rights regarding your
              personal data:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Right of access</strong> — Request a copy of the
                personal data we hold about you
              </li>
              <li>
                <strong>Right to rectification</strong> — Request correction of
                inaccurate or incomplete data
              </li>
              <li>
                <strong>Right to erasure (Right to be forgotten)</strong> —
                Request deletion of your data
              </li>
              <li>
                <strong>Right to restriction</strong> — Request we limit how we
                process your data
              </li>
              <li>
                <strong>Right to data portability</strong> — Receive your data
                in a structured, machine-readable format
              </li>
              <li>
                <strong>Right to object</strong> — Object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Right to withdraw consent</strong> — Withdraw consent
                for marketing at any time
              </li>
              <li>
                <strong>Right to lodge a complaint</strong> — with the ICO
                (Information Commissioner&apos;s Office)
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-6">
              To exercise any of these rights, please email{" "}
              <a
                href="mailto:privacy@mamamind.ai"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                privacy@mamamind.ai
              </a>{" "}
              or write to our registered address. We will respond within 30
              days.
            </p>
          </div>

          {/* Section 8: Security Measures */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. Security Measures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your
              personal data, including:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>AES-256 encryption for all data stored at rest</li>
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>Multi-factor authentication for internal system access</li>
              <li>Regular penetration testing and security audits</li>
              <li>
                Strict access controls — only staff who need data to do their
                job can access it
              </li>
              <li>
                Incident response procedures compliant with UK GDPR Article 33
                breach notification requirements
              </li>
            </ul>
          </div>

          {/* Section 9: International Data Transfers */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your data is primarily stored and processed within the UK and
              European Economic Area (EEA). Where we use service providers based
              outside the UK/EEA (such as OpenAI in the United States), we
              ensure appropriate safeguards are in place, including Standard
              Contractual Clauses approved under UK adequacy regulations.
            </p>
          </div>

          {/* Section 10: Children's Privacy */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind is designed for use by adults (18+) managing family
              accounts. We do not knowingly collect personal data directly from
              children under the age of 13. If a parent or guardian adds family
              members who are children, the parent takes responsibility for
              those members&apos; data under their account.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you believe a child has provided us with personal data without
              appropriate consent, please contact us immediately at{" "}
              <a
                href="mailto:privacy@mamamind.ai"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                privacy@mamamind.ai
              </a>
              .
            </p>
          </div>

          {/* Section 11: Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              11. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to improve your experience. Please see
              our{" "}
              <a
                href="/cookies"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Cookie Policy
              </a>{" "}
              for full details of the cookies we use, why we use them, and how
              to control your cookie preferences.
            </p>
          </div>

          {/* Section 12: Changes to This Policy */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              12. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology or legal requirements. Where
              changes are material, we will notify you by email at least 14 days
              before the changes take effect. The &quot;Last updated&quot; date
              at the top of this page will always reflect the most recent
              revision.
            </p>
          </div>

          {/* Section 13: Contact Us */}
          <div className="mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              13. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For any privacy-related questions, subject access requests, or
              complaints, please contact:
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                MamaMind — Data Protection
              </h3>
              <p className="text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:privacy@mamamind.ai"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  privacy@mamamind.ai
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                Address: [Your Business Address]
              </p>
              <p className="text-sm text-gray-600">
                You also have the right to lodge a complaint with the
                Information Commissioner&apos;s Office (ICO):{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  ico.org.uk
                </a>{" "}
                • 0303 123 1113
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
