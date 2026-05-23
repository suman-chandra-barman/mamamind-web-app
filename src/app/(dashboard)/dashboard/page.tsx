const planCards = [
  {
    label: "Active Plan",
    title: "Family",
    meta: "Renews 1 May 2025",
  },
  {
    label: "Family Members",
    title: "3 connected",
    meta: "1 pending invite",
  },
  {
    label: "Next Reminder",
    title: "Tomorrow",
    meta: "4:00 PM - Dentist",
  },
];

const reminders = [
  {
    date: "Fri 4 Apr",
    title: "Emma's dentist appointment",
    meta: "Emma · 3:00 PM",
  },
  {
    date: "Sat 5 Apr",
    title: "Tom's football training",
    meta: "Tom · 10:00 AM",
  },
  {
    date: "Mon 7 Apr",
    title: "Yoga class",
    meta: "You · 7:30 AM",
  },
  {
    date: "Tue 8 Apr",
    title: "Family dinner — Grandma's",
    meta: "Family · 6:00 PM",
  },
];

const familyMembers = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    role: "Account Owner",
    status: "Active",
    statusStyle: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "JM",
    name: "James Mitchell",
    role: "Partner",
    status: "Active",
    statusStyle: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "EM",
    name: "Emma Mitchell",
    role: "Child",
    status: "Active",
    statusStyle: "bg-emerald-100 text-emerald-700",
  },
  {
    initials: "TM",
    name: "Tom Mitchell",
    role: "Child",
    status: "Pending",
    statusStyle: "bg-rose-100 text-rose-700",
  },
];

const DashboardPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 md:grid-cols-3">
        {planCards.map((card) => (
          <div
            key={card.label}
            className="rounded-3xl border border-[#ede2cf] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(46,39,35,0.08)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9c8d7a]">
              {card.label}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#2f2723]">
              {card.title}
            </h2>
            <p className="mt-1 text-sm text-[#8b7d6c]">{card.meta}</p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold text-[#2f2723]">
          Upcoming Reminders
        </h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#ede2cf] bg-white shadow-[0_12px_30px_rgba(46,39,35,0.08)]">
          {reminders.map((reminder, index) => (
            <div
              key={reminder.title}
              className={`flex items-center gap-4 px-6 py-4 ${
                index === 0 ? "" : "border-t border-[#f1e9dc]"
              }`}
            >
              <span className="rounded-full bg-[#f4ede1] px-3 py-1 text-xs font-semibold text-[#8b7d6c]">
                {reminder.date}
              </span>
              <div>
                <p className="text-sm font-semibold text-[#2f2723]">
                  {reminder.title}
                </p>
                <p className="text-xs text-[#8b7d6c]">{reminder.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-semibold text-[#2f2723]">Family Members</h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#ede2cf] bg-white shadow-[0_12px_30px_rgba(46,39,35,0.08)]">
          {familyMembers.map((member, index) => (
            <div
              key={member.name}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${
                index === 0 ? "" : "border-t border-[#f1e9dc]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ede1] text-sm font-semibold text-[#8b7d6c]">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2f2723]">
                    {member.name}
                  </p>
                  <p className="text-xs text-[#8b7d6c]">{member.role}</p>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${member.statusStyle}`}
              >
                {member.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
