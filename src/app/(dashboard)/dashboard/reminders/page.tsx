"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  CircleDot,
  Plus,
  Shield,
  Users,
} from "lucide-react";
import { toast } from "react-toastify";

import ReminderModal from "@/components/Modals/ReminderModal";
import ReminderPageSkeleton from "@/components/Skeletons/ReminderPageSkeleton";
import { Button } from "@/components/ui/button";
import {
  type ReminderCreateRequest,
  type ReminderFilter,
  type ReminderItem,
  useCreateReminderMutation,
  useGetReminderOwnersQuery,
  useGetRemindersQuery,
} from "@/redux/features/reminders/remindersApi";

const filters: Array<{ value: ReminderFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "upcoming", label: "Upcoming" },
  { value: "this_week", label: "This Week" },
  { value: "shared", label: "Shared" },
  { value: "private", label: "Private" },
  { value: "completed", label: "Completed" },
];

const statCards = [
  { key: "total", label: "Total", icon: CircleDot },
  { key: "upcoming", label: "Upcoming", icon: CheckCircle2 },
  { key: "shared", label: "Shared", icon: Users },
  { key: "private", label: "Private", icon: Shield },
] as const;

const formatReminderDate = (dateValue: string) => {
  const date = new Date(`${dateValue}T00:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
};

const formatReminderTime = (timeValue: string | null) => {
  if (!timeValue) return "";

  const [hours, minutes] = timeValue.split(":");
  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

const getReminderMeta = (reminder: ReminderItem) => {
  const ownerLabel = reminder.owner_name || "Family";
  const timeLabel = formatReminderTime(reminder.reminder_time);
  const recurringLabel = reminder.recurring_display;
  const statusLabel = reminder.is_completed
    ? "Completed"
    : reminder.is_overdue
      ? "Overdue"
      : reminder.visibility_display;

  return { ownerLabel, timeLabel, recurringLabel, statusLabel };
};

const getErrorMessage = (error: unknown, fallback: string) => {
  const maybeError = error as { data?: { message?: string }; message?: string };
  return maybeError.data?.message || maybeError.message || fallback;
};

const ReminderPage = () => {
  const [activeFilter, setActiveFilter] = useState<ReminderFilter>("all");
  const [open, setOpen] = useState(false);

  const { data, isLoading, isFetching } = useGetRemindersQuery(activeFilter);
  const { data: ownersData } = useGetReminderOwnersQuery();
  const [createReminder, { isLoading: isCreating }] =
    useCreateReminderMutation();

  const reminders = data?.data.reminders ?? [];
  const stats = data?.data.stats;
  const owners = ownersData?.data.owners ?? [];

  const handleCreateReminder = async (payload: ReminderCreateRequest) => {
    try {
      const response = await createReminder(payload).unwrap();
      toast.success(response.message || "Reminder created successfully");
      setOpen(false);
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, "Failed to create reminder"));
    }
  };

  if (isLoading && !data) {
    return <ReminderPageSkeleton />;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[#ede2cf] bg-[linear-gradient(180deg,#fffdfa_0%,#fff8ef_100%)] px-5 py-6 shadow-[0_18px_50px_rgba(46,39,35,0.08)] sm:px-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#2f2723] sm:text-4xl">
              Reminders
            </p>
            <p className="mt-2 text-sm text-[#8b7d6c]">
              {stats?.total ?? 0} total · {stats?.completed ?? 0} completed
            </p>
          </div>

          <Button
            type="button"
            className="h-11 rounded-full bg-button-bg px-5 text-sm font-medium text-white shadow-[0_14px_24px_rgba(175,141,78,0.25)] hover:bg-button-bg/90"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Add Reminder
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;
            const value = stats?.[card.key] ?? 0;

            return (
              <div
                key={card.key}
                className="rounded-[1.6rem] border border-[#f0e4d2] bg-white/90 px-5 py-4 shadow-[0_8px_18px_rgba(46,39,35,0.05)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold text-[#2f2723]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-[#8b7d6c]">{card.label}</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7efe1] text-button-bg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`h-10 rounded-full px-4 text-sm font-medium transition ${active ? "bg-button-bg text-white shadow-[0_10px_18px_rgba(175,141,78,0.24)]" : "bg-white text-[#7f7265] shadow-[0_6px_16px_rgba(46,39,35,0.05)] hover:bg-[#f9f3e8]"}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-[2rem] border border-[#ede2cf] bg-white shadow-[0_18px_50px_rgba(46,39,35,0.08)]">
        <div className="flex items-center justify-between gap-3 border-b border-[#f2e7d9] px-5 py-4 sm:px-6">
          <div>
            <p className="text-lg font-semibold text-[#2f2723]">
              All reminders
            </p>
            <p className="text-sm text-[#8b7d6c]">
              {reminders.length} reminder{reminders.length === 1 ? "" : "s"}
            </p>
          </div>
          {isFetching ? (
            <span className="text-sm text-[#8b7d6c]">Refreshing...</span>
          ) : null}
        </div>

        {reminders.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[#2f2723]">
              No reminders found
            </p>
            <p className="mt-2 text-sm text-[#8b7d6c]">
              Try another filter or create a new reminder.
            </p>
            <Button
              type="button"
              className="mt-6 h-11 rounded-full bg-button-bg px-5 text-sm font-medium text-white hover:bg-button-bg/90"
              onClick={() => setOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Add Reminder
            </Button>
          </div>
        ) : (
          <div>
            {reminders.map((reminder, index) => {
              const { ownerLabel, timeLabel, recurringLabel, statusLabel } =
                getReminderMeta(reminder);

              return (
                <article
                  key={reminder.id}
                  className={`flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-6 ${index === 0 ? "" : "border-t border-[#f2e7d9]"}`}
                >
                  <div className="flex items-start gap-4 sm:min-w-45">
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${reminder.is_completed ? "border-[#cdb17a] bg-[#d8c08e] text-white" : "border-[#d9c4a8] bg-transparent"}`}
                    >
                      {reminder.is_completed ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Circle className="h-3.5 w-3.5" />
                      )}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#f7efe1] px-3 py-1 text-xs font-semibold text-[#9a8560]">
                          {formatReminderDate(reminder.reminder_date)}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${reminder.is_completed ? "bg-emerald-100 text-emerald-700" : reminder.is_overdue ? "bg-rose-100 text-rose-700" : "bg-[#f1eadf] text-[#7e6d5a]"}`}
                        >
                          {statusLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-[#2f2723] sm:text-lg">
                      {reminder.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#8b7d6c]">
                      {ownerLabel} · {timeLabel || "All day"} · {recurringLabel}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${reminder.visibility === "private" ? "bg-[#25211e] text-white" : "bg-[#e4e1dd] text-[#6c6660]"}`}
                    >
                      {reminder.visibility_display}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <ReminderModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={handleCreateReminder}
        isSubmitting={isCreating}
        owners={owners}
      />
    </div>
  );
};

export default ReminderPage;
