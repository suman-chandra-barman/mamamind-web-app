/** @format */

"use client";

import { AlertTriangle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RemoveMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  memberName?: string;
}

const RemoveMemberModal = ({
  open,
  onOpenChange,
  onConfirm,
  memberName,
}: RemoveMemberModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[92vw] rounded-3xl border border-button-bg/20 bg-secondary-background p-6 shadow-[0_20px_45px_rgba(44,36,32,0.2)] sm:max-w-md sm:p-7">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-primary">
            Remove Member
          </DialogTitle>
          <DialogDescription className="text-sm text-secondary">
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5" />
            <p>
              <span className="font-semibold text-rose-700">
                {memberName ?? "This member"}
              </span>{" "}
              will lose access to the shared Mamamind bot immediately. Their
              private events will be deleted and this action cannot be undone.
            </p>
          </div>
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
            type="button"
            className="h-10 rounded-full border border-rose-200 bg-white px-5 text-sm font-medium text-rose-600 hover:bg-rose-50"
            onClick={onConfirm}
          >
            Remove Member
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveMemberModal;
