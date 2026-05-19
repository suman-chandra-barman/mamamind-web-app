"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import type { AuthUser } from "@/types/auth";
import Image from "next/image";

interface UserMenuDropdownProps {
  user: AuthUser;
  onLogoutClick: () => void;
}

const getInitials = (name?: string) => {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  const initials = `${first}${last}`.toUpperCase();
  return initials || "U";
};

const UserMenuDropdown = ({ user, onLogoutClick }: UserMenuDropdownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initials = useMemo(() => getInitials(user.full_name), [user.full_name]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleLogout = () => {
    setOpen(false);
    onLogoutClick();
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#e6d7c1] bg-white/80 shadow-[0_10px_18px_rgba(45,39,35,0.12)] transition hover:bg-white"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {user.profile_image ? (
          <Image
            src={user.profile_image}
            alt={user.full_name ?? "User profile"}
            className="h-full w-full object-cover"
            loading="lazy"
            width={44}
            height={44}
          />
        ) : (
          <span className="text-sm font-semibold text-primary">{initials}</span>
        )}
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 mt-3 w-52 rounded-2xl border border-[#eadbc6] bg-white p-2 text-sm text-primary shadow-[0_20px_40px_rgba(45,39,35,0.18)]"
        >
          <Link
            href="/dashboard"
            className="block rounded-xl px-3 py-2 font-medium transition hover:bg-[#f7f1e7]"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/settings"
            className="block rounded-xl px-3 py-2 font-medium transition hover:bg-[#f7f1e7]"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>
          <div className="my-1 h-px bg-[#eadbc6]" />
          <button
            type="button"
            className="cursor-pointer block w-full rounded-xl px-3 py-2 text-left font-medium text-red-600 transition hover:bg-red-50"
            role="menuitem"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenuDropdown;
