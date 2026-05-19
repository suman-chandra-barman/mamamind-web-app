/** @format */

import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle, ThumbsUp, type LucideIcon } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

type FooterLinksSectionProps = {
  title: string;
  links: FooterLink[];
};

const footerNavigation = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

const socialLinks: FooterLink[] = [
  { label: "WhatsApp", href: "#whatsapp", icon: MessageCircle },
  { label: "Instagram", href: "#instagram", icon: Camera },
  { label: "Facebook", href: "#facebook", icon: ThumbsUp },
];

const Footer = () => {
  return (
    <footer
      id="get-started"
      className="w-full bg-tertiary-background text-white"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-button-bg uppercase md:text-[13px]">
            Get Started Today
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#EDE0CC] md:text-[40px]">
            Your family deserves a smarter way to stay connected.
          </h2>
          <p className="mx-auto mt-6 md:mt-9 max-w-2xl text-sm leading-7 text-[#b7a998] sm:text-base">
            Join thousands of families already using Famora. Start your 7-day
            free trial today.
          </p>
          <Link
            href="/pricing"
            className="mt-7  duration-100 hover:scale-102 cursor-pointer inline-flex h-10 md:h-11 items-center rounded-full bg-button-bg px-8 text-sm font-medium text-white transition-colors hover:bg-[#9f8046]"
          >
            Start Your Free Trial
          </Link>
        </div>

        <div className="mt-16 grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="text-center sm:text-left">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 sm:justify-start"
            >
              <Image
                src="/famora-logo.png"
                alt="Famora logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm bg-white object-contain"
              />
              <span className="text-2xl font-semibold text-[#e8ddcc]">
                Famora
              </span>
            </Link>
            <p className="mx-auto mt-4 max-w-56 text-sm leading-7 text-[#ab9f90] sm:mx-0">
              Your family&apos;s personal AI assistant always on WhatsApp.
            </p>
          </div>

          {footerNavigation.map((section) => (
            <FooterLinksSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          <FooterLinksSection title="Connect" links={socialLinks} />
        </div>

        <p className="py-4 md:py-6 text-center text-xs text-[#9f9182]">
          © 2025 Famora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinksSection = ({ title, links }: FooterLinksSectionProps) => {
  return (
    <div className="text-center sm:text-left">
      <h3 className="text-xs font-semibold tracking-[0.14em] text-[#d8c49f] uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-[#d1c4b4]">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className={`transition-colors hover:text-white ${
                Icon
                  ? "flex items-center justify-center gap-2 sm:justify-start"
                  : ""
              }`}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
