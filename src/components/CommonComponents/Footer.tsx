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
          <h2 className="text-3xl font-bold tracking-tight text-[#f9ecef] md:text-[40px]">
            Your family deserves a smarter way to stay connected.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="text-left">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={120}
                height={120}
                className="h-18 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-56 text-sm leading-7 text-[#cfb0b6]">
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

        <p className="py-4 md:py-6 text-center text-xs text-[#cfb0b6]">
          © {new Date().getFullYear()} Mamamind. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinksSection = ({ title, links }: FooterLinksSectionProps) => {
  return (
    <div className="text-center sm:text-left">
      <h3 className="text-xs font-semibold tracking-[0.14em] text-[#e57390] uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-[#cfb0b6]">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className={`transition-colors hover:text-white ${Icon
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
