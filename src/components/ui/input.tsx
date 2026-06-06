"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-[#e6d7c1] bg-white px-4 text-sm text-primary shadow-[0_1px_0_rgba(255,255,255,0.85)] outline-none transition placeholder:text-secondary focus:border-button-bg/60 focus:ring-3 focus:ring-button-bg/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
