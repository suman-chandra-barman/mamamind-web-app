/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const ReminderPageSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[#f3d8dc] bg-white/90 px-5 py-6 shadow-[0_18px_50px_rgba(43,27,30,0.08)] sm:px-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <Skeleton className="h-9 w-44 rounded-xl" />
            <div className="mt-3">
              <Skeleton className="h-4 w-40 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-11 w-36 rounded-full" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.6rem] border border-[#f3d8dc] bg-[#fff8f9] px-5 py-4"
            >
              <Skeleton className="h-9 w-10 rounded-xl" />
              <div className="mt-3">
                <Skeleton className="h-4 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-24 rounded-full" />
          ))}
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-[2rem] border border-[#f3d8dc] bg-white shadow-[0_18px_50px_rgba(43,27,30,0.08)]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 px-5 py-4 sm:px-6 ${index === 0 ? "" : "border-t border-[#f3d8dc]"}`}
          >
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <div className="min-w-0 flex-1">
              <Skeleton className="h-4 w-3/5 rounded-full" />
              <div className="mt-2 flex gap-2">
                <Skeleton className="h-3 w-16 rounded-full" />
                <Skeleton className="h-3 w-28 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ReminderPageSkeleton;
