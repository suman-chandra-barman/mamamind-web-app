/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const DashboardOverviewSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-[#ede2cf] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(46,39,35,0.08)]"
          >
            <Skeleton className="h-3 w-28 rounded-full" />
            <div className="mt-3">
              <Skeleton className="h-8 w-40 rounded" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-4 w-32 rounded" />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h3 className="sr-only">Upcoming Reminders</h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#ede2cf] bg-white shadow-[0_12px_30px_rgba(46,39,35,0.08)]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-6 py-4 ${index === 0 ? "" : "border-t border-[#f1e9dc]"}`}
            >
              <Skeleton className="h-6 w-20 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-3/4" />
                <div className="mt-2">
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="sr-only">Family Members</h3>
        <div className="mt-4 overflow-hidden rounded-3xl border border-[#ede2cf] bg-white shadow-[0_12px_30px_rgba(46,39,35,0.08)]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${index === 0 ? "" : "border-t border-[#f1e9dc]"}`}
            >
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-40" />
                  <div className="mt-1">
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardOverviewSkeleton;
