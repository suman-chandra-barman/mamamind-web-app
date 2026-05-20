"use client";

import React from "react";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const CookiePolicyPage = () => {
  const featureCards: FeatureCard[] = [
    {
      icon: "🍪",
      title: "What Are Cookies?",
      description:
        "Small text files stored on your device to improve browsing experience and remember your preferences.",
    },
    {
      icon: "🔒",
      title: "Your Privacy",
      description:
        "We believe in full transparency about the data we collect and how we use it.",
    },
    {
      icon: "⚙️",
      title: "Essential Cookies",
      description:
        "Some cookies are necessary for our service to function correctly and securely.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "We use Google Analytics to understand visitor behaviour and improve our website.",
    },
    {
      icon: "🎯",
      title: "Your Control",
      description:
        "You can manage cookie preferences and control what cookies are stored on your device.",
    },
    {
      icon: "📧",
      title: "Contact Us",
      description:
        "Questions about cookies? Contact our Privacy Team at privacy@mamamind.ai.",
    },
  ];

  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="w-full bg-linear-to-b from-slate-50 to-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Last updated: 4 April 2025 • Effective date: 4 April 2025
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            This Cookie Policy explains what cookies are, which cookies MamaMind
            uses, why we use them, and how you can manage your preferences. We
            believe in full transparency about the data we collect.
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
          {/* Section 1: What Are Cookies? */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device
              (computer, tablet, or smartphone) when you visit a website. They
              are widely used by website operators to make websites work, or to
              work more efficiently, as well as to provide information to
              website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies can be &quot;session cookies&quot; (which expire when you
              close your browser) or &quot;persistent cookies&quot; (which
              remain on your device for a set period of time or until deleted).
              We use both types.
            </p>
          </div>

          {/* Section 2: How We Use Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              MamaMind uses cookies for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  To keep you securely logged in to your MamaMind account
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  To protect against security threats, including cross-site
                  request forgery (CSRF)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  To remember your language, timezone, and display preferences
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  To understand how visitors use our website (anonymised
                  analytics only)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  To improve the performance and reliability of the Service
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>To remember your cookie consent choices</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Strictly Necessary Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Strictly Necessary Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are required for the MamaMind website and service to
              function correctly. Without them, key features such as logging in,
              managing your subscription, or receiving security protection would
              not work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Because these cookies are essential, they are always active and
              cannot be disabled via your cookie preferences. However, you can
              block them via your browser settings – please note that doing so
              may prevent you from using the Service.
            </p>
          </div>

          {/* Section 4: Analytics Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Analytics Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google Analytics to collect anonymised data about how
              visitors use our website. This helps us understand which pages are
              most popular, where visitors come from, and how the site is used –
              all so we can improve the experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Analytics data is processed in the United States. We have a
              Data Processing Agreement with Google in place, and analytics data
              is aggregated and anonymised before analysis. We have disabled
              Google Analytics advertising features, meaning no data is shared
              with Google&apos;s advertising network.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also use Amplitude for in-product feature analytics. This helps
              us understand which MamaMind features are used most, so we can
              invest in improving them. Amplitude data is anonymised at the
              point of collection.
            </p>
          </div>

          {/* Section 5: Functional Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Functional Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Functional cookies remember choices you make and provide more
              personal features. For example, we use functional cookies to
              remember your language preference and timezone setting, so you
              don&apos;t need to re-enter the information on every visit.
            </p>
          </div>

          {/* Section 6: Marketing Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Marketing Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MamaMind does not currently use marketing or retargeting cookies.
              We do not work with advertising networks, and we do not use
              cookies to track you across other websites for advertising
              purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If this changes in the future, we will update this Cookie Policy
              and seek your explicit consent before placing any marketing
              cookies on your device.
            </p>
          </div>

          {/* Section 7: Third-Party Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              7. Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some third-party services we integrate with may also set cookies
              when you use the MamaMind website:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Stripe</strong> – sets cookies to prevent payment fraud
                and maintain checkout session state
              </li>
              <li>
                <strong>Google Analytics</strong> – sets analytics cookies as
                described above
              </li>
              <li>
                <strong>Intercom (Customer support)</strong> – sets cookies to
                power our support chat widget
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third-party services have their own cookie and privacy
              policies. We are not responsible for the content of those
              policies.
            </p>
          </div>

          {/* Section 8: How to Control Cookies */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              8. How to Control Cookies
            </h2>

            <div className="space-y-6">
              {/* 8.1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  8.1 Using Our Preference Manager
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You can manage your cookie preferences at any time using the
                  MamaMind Cookie Preference Manager at the top of this page.
                  Your preferences are saved and respected for all future
                  visits.
                </p>
              </div>

              {/* 8.2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  8.2 Browser Settings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Most web browsers also allow you to control cookies through
                  their settings. You can set your browser to:
                </p>
                <ul className="space-y-2 text-gray-700 mb-3">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Block third-party cookies only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Clear cookies when you close your browser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Warn you before accepting cookies</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  For guidance on how to do this in your specific browser, visit{" "}
                  <a
                    href="https://aboutcookies.org"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    aboutcookies.org
                  </a>
                  . Please note that blocking all cookies may impact your
                  ability to use MamaMind or other websites.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Changes to This Policy */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy to reflect changes in the cookies
              we use, new regulatory requirements, or improvements to our
              services. When we make significant changes, we will notify you by
              email and display a notification on the website. The &quot;Last
              updated&quot; date at the top of this page will always reflect the
              most recent revision.
            </p>
          </div>

          {/* Section 10: Contact Us */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              10. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about how MamaMind uses cookies, please
              contact:
            </p>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">
                MamaMind Technologies Ltd – Privacy Team
              </p>
              <p className="text-gray-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:privacy@mamamind.ai"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  privacy@mamamind.ai
                </a>
              </p>
              <p className="text-gray-700">
                Address: 20 Farringdon Road, London, EC1M 3HE, United Kingdom
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
                  href="/terms-of-service"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicyPage;
