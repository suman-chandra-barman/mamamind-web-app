/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "How It Works", href: "/how-it-works" },
];

const NavBar = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8cab4] bg-secondary-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 md:h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/famora-logo.png"
            alt="Famora logo"
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold tracking-tight text-primary ">
            Famora
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full bg-white/55 px-2 py-1 shadow-[0_0_0_1px_rgba(141,117,89,0.12)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[15px] transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? "text-button-bg"
                  : "text-primary hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 md:flex">
          <Button
            asChild
            className="h-10 rounded-full bg-button-bg px-6 text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(175,141,78,0.28)] hover:bg-[#9f8046]!"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full text-primary hover:bg-white/60 md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="top-19 left-4 right-4 w-auto translate-x-0 translate-y-0 gap-0 rounded-[24px] border border-[#ddcfba] bg-[#f7f1e7] p-3 shadow-[0_20px_40px_rgba(45,39,35,0.14)] sm:left-auto sm:right-6 sm:w-90"
          >
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-2xl px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-white text-button-bg shadow-sm"
                      : "text-primary hover:bg-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                asChild
                className="mt-2 h-10 rounded-2xl bg-button-bg text-[15px] font-medium text-white hover:bg-[#9f8046]"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default NavBar;
