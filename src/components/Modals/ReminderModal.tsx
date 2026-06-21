"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock3, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type {
  ReminderCreateRequest,
  ReminderOwnerOption,
  ReminderRecurring,
  ReminderVisibility,
} from "@/redux/features/reminders/remindersApi";

type ReminderModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (payload: ReminderCreateRequest) => Promise<void>;
  isSubmitting?: boolean;
  owners: ReminderOwnerOption[];
};

type ReminderFormState = {
  title: string;
  ownerId: string;
  reminderDate: string;
  reminderTime: string;
  visibility: ReminderVisibility;
  recurring: ReminderRecurring;
};

const recurringOptions: Array<{ value: ReminderRecurring; label: string }> = [
  { value: "one_time", label: "One time" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const visibilityOptions: Array<{ value: ReminderVisibility; label: string }> = [
  { value: "shared", label: "Shared (visible to family)" },
  { value: "private", label: "Private" },
];

const getTodayValue = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getDefaultTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const createInitialState = (): ReminderFormState => ({
  title: "",
  ownerId: "",
  reminderDate: getTodayValue(),
  reminderTime: getDefaultTime(),
  visibility: "private",
  recurring: "one_time",
});

const selectShellClassName =
  "flex h-11 w-full appearance-none rounded-xl border border-[#f3d8dc] bg-white px-4 text-sm text-primary shadow-[0_1px_0_rgba(255,255,255,0.85)] outline-none transition focus:border-button-bg/60 focus:ring-3 focus:ring-button-bg/10 disabled:cursor-not-allowed disabled:opacity-50";

const ReminderModal = ({
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  owners,
}: ReminderModalProps) => {
  const [form, setForm] = useState<ReminderFormState>(createInitialState);

  useEffect(() => {
    if (open) {
      setForm(createInitialState());
    }
  }, [open]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit({
      title: form.title.trim(),
      owner_id: form.ownerId ? Number(form.ownerId) : null,
      reminder_date: form.reminderDate,
      reminder_time: form.reminderTime,
      visibility: form.visibility,
      recurring: form.recurring,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100vh-2rem)] max-w-[92vw] overflow-y-auto rounded-[2rem] border border-[#f3d8dc] bg-[#fff8f9] p-0 shadow-[0_24px_60px_rgba(43,27,30,0.16)] sm:max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="p-5 sm:p-7">
          <DialogHeader className="mb-5">
            <DialogTitle className="text-2xl font-semibold text-primary">
              Add Reminder
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-primary">
                Title
              </label>
              <Input
                value={form.title}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, title: event.target.value }))
                }
                placeholder="Emma's dentist appointment"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Owner
              </label>
              <div className="relative">
                <Users className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-secondary" />
                <select
                  value={form.ownerId}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      ownerId: event.target.value,
                    }))
                  }
                  className={`${selectShellClassName} pl-11 pr-10`}
                >
                  {owners.map((owner) => (
                    <option
                      key={`${owner.type}-${owner.id ?? "family"}`}
                      value={owner.id ?? ""}
                    >
                      {owner.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Visibility
              </label>
              <select
                value={form.visibility}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    visibility: event.target.value as ReminderVisibility,
                  }))
                }
                className={selectShellClassName}
              >
                {visibilityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Date
              </label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-secondary" />
                <Input
                  type="date"
                  value={form.reminderDate}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      reminderDate: event.target.value,
                    }))
                  }
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Time
              </label>
              <div className="relative">
                <Clock3 className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-secondary" />
                <Input
                  type="time"
                  value={form.reminderTime}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      reminderTime: event.target.value,
                    }))
                  }
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">
                Recurring
              </label>
              <select
                value={form.recurring}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    recurring: event.target.value as ReminderRecurring,
                  }))
                }
                className={selectShellClassName}
              >
                {recurringOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <DialogFooter className="mt-7 flex items-center justify-end gap-3 border-none bg-transparent p-0">
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-full border-[#f3d8dc] bg-white px-6 text-sm text-secondary hover:bg-[#fdecee]"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-11 rounded-full bg-button-bg px-7 text-sm font-medium text-white hover:bg-button-bg/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReminderModal;
