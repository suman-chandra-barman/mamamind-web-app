/** @format */

"use client";

import type { FormEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type MemberRole = "Account Owner" | "Partner" | "Child";

type Member = {
  id: string;
  name: string;
  role: MemberRole;
  phone: string;
  status: "Active";
  joined: string;
};

interface EditFamilyMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: Member | null;
  onSubmit?: () => void;
}

const roleOptions: MemberRole[] = ["Account Owner", "Partner", "Child"];

const EditFamilyMemberModal = ({
  open,
  onOpenChange,
  member,
  onSubmit,
}: EditFamilyMemberModalProps) => {
  if (!member) return null;

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
            Edit Member
          </DialogTitle>
          <DialogDescription className="text-sm text-secondary">
            Update the member details below.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs text-secondary">Full name</label>
            <input
              type="text"
              defaultValue={member.name}
              className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
            />
          </div>

          <div>
            <label className="text-xs text-secondary">WhatsApp number</label>
            <input
              type="tel"
              defaultValue={member.phone}
              className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
            />
          </div>

          <div>
            <label className="text-xs text-secondary">Role</label>
            <select
              defaultValue={member.role}
              className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-white/70 px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
            >
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
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
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditFamilyMemberModal;
