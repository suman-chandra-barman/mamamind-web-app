/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import LogoutModal from "@/components/Modals/LogoutModal";
import UserMenuDropdown from "@/components/Dropdowns/UserMenuDropdown";
import type { AuthUser } from "@/types/auth";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "How It Works", href: "/how-it-works" },
];

const NavBar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const cachedUserRef = useRef<{
    raw: string | null;
    parsed: AuthUser | null;
  } | null>(null);
  const hasMounted = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    },
    () => true,
    () => false,
  );
  const cachedUser = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    },
    () => {
      if (typeof window === "undefined") return null;
      const storedUser = localStorage.getItem("user");
      const cached = cachedUserRef.current;
      if (cached && cached.raw === storedUser) {
        return cached.parsed;
      }

      if (!storedUser) {
        cachedUserRef.current = { raw: null, parsed: null };
        return null;
      }

      try {
        const parsed = JSON.parse(storedUser) as AuthUser;
        cachedUserRef.current = { raw: storedUser, parsed };
        return parsed;
      } catch {
        cachedUserRef.current = { raw: storedUser, parsed: null };
        return null;
      }
    },
    () => null,
  );
  const effectiveUser = user ?? cachedUser;
  const isAuthenticated = Boolean(effectiveUser);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    setIsLogoutOpen(false);
    router.push("/signin");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8cab4] bg-secondary-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 md:h-18 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        {/* Desktop and tablet menu */}
        <Link href="/" className="flex shrink-0 items-center gap-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-[22px] font-bold tracking-tight text-primary ">
            Mamamind
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
          {!hasMounted ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-[#f0e6d6]" />
          ) : isAuthenticated && effectiveUser ? (
            <UserMenuDropdown
              user={effectiveUser}
              onLogoutClick={() => setIsLogoutOpen(true)}
            />
          ) : (
            <Button
              asChild
              className="h-10 rounded-full bg-button-bg px-6 text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(175,141,78,0.28)] hover:bg-[#9f8046]!"
            >
              <Link href="/signin">Get Started</Link>
            </Button>
          )}
        </div>

        {/* Mobile menu */}
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

              {!hasMounted ? (
                <div className="mt-2 h-10 rounded-2xl bg-white/60" />
              ) : isAuthenticated ? (
                <div className="mt-2 grid gap-1">
                  <Link
                    href="/dashboard"
                    className="rounded-2xl px-4 py-2 text-[15px] font-medium text-primary transition-colors hover:bg-white/70"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="rounded-2xl px-4 py-2 text-[15px] font-medium text-primary transition-colors hover:bg-white/70"
                  >
                    Settings
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsLogoutOpen(true)}
                    className="cursor-pointer rounded-2xl px-4 py-2 text-left text-[15px] font-medium text-red-600 transition-colors hover:bg-red-50"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <Button
                  asChild
                  className="mt-2 h-10 rounded-2xl bg-button-bg text-[15px] font-medium text-white hover:bg-[#9f8046]"
                >
                  <Link href="/signin">Get Started</Link>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <LogoutModal
        open={isLogoutOpen}
        onOpenChange={setIsLogoutOpen}
        onConfirm={handleLogoutConfirm}
      />
    </header>
  );
};

export default NavBar;
