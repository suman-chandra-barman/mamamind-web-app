"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, ChevronDown, Settings, User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import LogoutModal from "@/components/Modals/LogoutModal";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Family Members", href: "/dashboard/family-members" },
  { label: "Reminders", href: "/dashboard/reminders" },
  { label: "Subscription", href: "/dashboard/subscription" },
  { label: "Billing", href: "/dashboard/billing" },
];

export default function DashboardHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : "",
  );
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return hash === href;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    setIsLogoutOpen(false);
    router.push("/signin");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#e3d6c2] bg-[#2f2723] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-white.svg"
              alt="Mamamind"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <span className="text-lg font-semibold tracking-wide">
              Mamamind
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-3 rounded-full px-3 py-1 text-sm font-medium text-white/80 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 transition-colors ${
                  active
                    ? "bg-white/20 text-white font-semibold ring-1 ring-white/25"
                    : "text-white/80 hover:bg-white/15 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/20"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 rounded-full border border-amber-100 bg-white px-3 py-1 text-left shadow-sm cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${user?.profile_image}`}
                    alt="Admin"
                  />
                  <AvatarFallback>
                    {user?.full_name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold text-zinc-900 capitalize">
                    {user?.full_name}
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-zinc-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-zinc-900 capitalize">
                  {user?.full_name}
                </p>
                <p className="text-xs text-zinc-500">{user?.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-rose-500 focus:text-rose-500"
                onClick={() => setIsLogoutOpen(true)}
              >
                <LogOut className="h-4 w-4" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <LogoutModal
            open={isLogoutOpen}
            onOpenChange={setIsLogoutOpen}
            onConfirm={handleLogoutConfirm}
          />
        </div>
      </div>
    </header>
  );
}
