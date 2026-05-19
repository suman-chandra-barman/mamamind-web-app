/** @format */

import Link from "next/link";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PurchaseSuccessDialogProps = {
  planName: string;
};

const quickActions = [
  { icon: "📅", label: "Set your\nfirst reminder" },
  { icon: "👨‍👩‍👧", label: "Add\nfamily\nmembers" },
  { icon: "🍽️", label: "Plan this\nweek's meals" },
];

const PurchaseSuccessDialog = ({ planName }: PurchaseSuccessDialogProps) => {
  return (
    <DialogContent
      showCloseButton={false}
      className="max-w-[92vw] rounded-3xl border border-button-bg/20 bg-secondary-background p-6 text-center shadow-[0_20px_45px_rgba(44,36,32,0.2)] sm:max-w-140 sm:p-8"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-button-bg text-primary sm:h-16 sm:w-16">
        <Check className="h-7 w-7" strokeWidth={3} />
      </div>

      <DialogTitle className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-[52px]">
        You're all set!
      </DialogTitle>

      <DialogDescription className="mx-auto mt-3 max-w-md text-[13px] leading-6 text-secondary md:text-[15px] md:leading-7">
        Your <span className="font-semibold text-primary">{planName}</span>{" "}
        subscription is now active. We've sent a confirmation to your email.
        Click below to start chatting with your AI family assistant on WhatsApp.
      </DialogDescription>

      <Button
        asChild
        className="mt-6 h-11 rounded-full bg-custom-green px-7 text-sm font-medium text-white hover:bg-custom-green/90"
      >
        <Link href="#" className="inline-flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Open WhatsApp Now
        </Link>
      </Button>

      <p className="mt-4 text-xs text-secondary">
        Didn't receive your email? Check your spam folder or
        <span className="text-button-bg"> contact support.</span>
      </p>

      <div className="mt-6 border-t border-button-bg/20 pt-6">
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-button-bg/15 bg-white/55 px-3 py-4"
            >
              <div className="text-lg">{item.icon}</div>
              <p className="mt-2 text-[11px] leading-4 text-secondary whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Button
        asChild
        variant="outline"
        className="mx-auto mt-5 h-10 rounded-full border-button-bg/35 bg-transparent px-8 text-[13px] text-secondary hover:bg-white/70"
      >
        <Link href="#" className="inline-flex items-center gap-2">
          Go to Dashboard
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </DialogContent>
  );
};

export default PurchaseSuccessDialog;
