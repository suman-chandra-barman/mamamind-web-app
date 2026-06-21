/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DashboardOverviewSkeleton from "@/components/Skeletons/DashboardOverviewSkeleton";
import { useGetOverviewQuery } from "@/redux/features/dashboard/dashboardApi";

const DashboardPage = () => {
  const { data, isLoading } = useGetOverviewQuery();

  if (isLoading) {
    return <DashboardOverviewSkeleton />;
  }

  const overview = data?.data ?? {};
  const plan = overview.active_plan;
  const familyStats = overview.family_members ?? {};
  const nextReminder = overview.next_reminder;
  const upcoming = overview.upcoming_reminders ?? [];
  const members = overview.members ?? [];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#f3d8dc] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(43,27,30,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#766467]">
            Active Plan
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e1113]">
            {plan?.name ?? "—"}
          </h2>
          <p className="mt-1 text-sm text-[#766467]">
            {plan?.renews_at ? `Renews ${plan.renews_at}` : "—"}
          </p>
        </div>

        <div className="rounded-3xl border border-[#f3d8dc] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(43,27,30,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#766467]">
            Family Members
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e1113]">
            {familyStats.connected ?? 0} connected
          </h2>
          <p className="mt-1 text-sm text-[#766467]">
            {familyStats.pending_invites ?? 0} pending invite
          </p>
        </div>

        <div className="rounded-3xl border border-[#f3d8dc] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(43,27,30,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#766467]">
            Next Reminder
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e1113]">
            {nextReminder?.title ?? "—"}
          </h2>
          <p className="mt-1 text-sm text-[#766467]">
            {nextReminder?.date
              ? `${nextReminder.date} ${nextReminder.time ?? ""}`
              : "—"}
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold text-[#1e1113]">
          Upcoming Reminders
        </h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#f3d8dc] bg-white shadow-[0_12px_30px_rgba(43,27,30,0.08)]">
          {upcoming.map((reminder: any, index: number) => (
            <div
              key={reminder.id || index}
              className={`flex items-center gap-4 px-6 py-4 ${index === 0 ? "" : "border-t border-[#f8e6e9]"}`}
            >
              <span className="rounded-full bg-[#fdecee] px-3 py-1 text-xs font-semibold text-[#766467]">
                {reminder.date}
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1e1113]">
                  {reminder.title}
                </p>
                <p className="text-xs text-[#766467]">{`${reminder.owner_name ?? ""} · ${reminder.time ?? ""}`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold text-[#1e1113]">Family Members</h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#f3d8dc] bg-white shadow-[0_12px_30px_rgba(43,27,30,0.08)]">
          {members.map((m: any, index: number) => (
            <div
              key={m.user_id || m.membership_id || index}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${index === 0 ? "" : "border-t border-[#f8e6e9]"}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdecee] text-sm font-semibold text-[#766467]">
                  {m.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e1113]">
                    {m.full_name}
                  </p>
                  <p className="text-xs text-[#766467]">
                    {m.relation_display ?? m.role}
                  </p>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${m.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}
              >
                {m.status_display ?? m.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
