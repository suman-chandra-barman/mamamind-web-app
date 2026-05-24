/** @format */

"use client";

import type { FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InviteFamilyMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: () => void;
}

const InviteFamilyMemberModal = ({
  open,
  onOpenChange,
  onSubmit,
}: InviteFamilyMemberModalProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[92vw] rounded-3xl border border-button-bg/20 bg-secondary-background p-6 shadow-[0_20px_45px_rgba(44,36,32,0.2)] sm:max-w-lg sm:p-7">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-primary">
            Invite Family Member
          </DialogTitle>
          <DialogDescription className="text-sm text-secondary">
            Add someone new to your family plan and send them an invite.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs text-secondary">Full name</label>
            <input
              type="text"
              placeholder="Enter member name"
              className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
            />
          </div>

          <div>
            <label className="text-xs text-secondary">WhatsApp number</label>
            <input
              type="tel"
              placeholder="+44 7700 900 000"
              className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
            />
          </div>

          <div>
            <label className="text-xs text-secondary">Role</label>
            <select className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45">
              <option value="">Select...</option>
              <option value="partner">Partner</option>
              <option value="child">Child</option>
            </select>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-button-bg/15 bg-white/70 px-3 py-2 text-[11px] text-secondary">
            <MessageCircle className="h-3.5 w-3.5 text-button-bg" />
            They will receive a WhatsApp message from Mamamind with instructions
            to activate their connection.
          </div>

          <DialogFooter className="gap-2 border-none bg-transparent p-0 sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-full border-button-bg/30 bg-transparent px-5 text-sm text-secondary hover:bg-white"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-10 rounded-full bg-button-bg px-5 text-sm font-medium text-white hover:bg-button-bg/90"
            >
              Send Invite
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteFamilyMemberModal;
