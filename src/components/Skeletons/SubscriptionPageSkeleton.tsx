/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const SubscriptionPageSkeleton = () => {
  return (
    <div className="bg-secondary-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-44 rounded-full" />
          <Skeleton className="h-4 w-60 rounded-full" />
        </div>

        <section className="mt-8 rounded-[1.75rem] border border-[#f0e2cf] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(45,39,35,0.08)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-8 w-56 rounded-full" />
              <Skeleton className="h-4 w-64 rounded-full" />
            </div>
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>

          <div className="mt-6 flex gap-3">
            <Skeleton className="h-11 w-36 rounded-full" />
            <Skeleton className="h-11 w-44 rounded-full" />
          </div>
        </section>

        <div className="mt-8 space-y-3">
          <Skeleton className="h-5 w-24 rounded-full" />
          <div className="grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[1.75rem] border border-[#f0e2cf] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(45,39,35,0.08)]"
              >
                <Skeleton className="h-5 w-32 rounded-full" />
                <Skeleton className="mt-4 h-10 w-28 rounded-full" />
                <Skeleton className="mt-2 h-4 w-36 rounded-full" />
                <div className="mt-5 space-y-3">
                  {Array.from({ length: 5 }).map((_, featureIndex) => (
                    <Skeleton
                      key={featureIndex}
                      className="h-4 w-full rounded-full"
                    />
                  ))}
                </div>
                <Skeleton className="mt-6 h-11 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPageSkeleton;
