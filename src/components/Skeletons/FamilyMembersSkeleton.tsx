/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const FamilyMembersSkeleton = () => {
  return (
    <div className="bg-secondary-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-7 w-56 rounded-full" />
            <Skeleton className="h-4 w-72 rounded-full" />
          </div>
          <Skeleton className="h-10 w-36 rounded-full" />
        </div>

        <div className="mt-6 rounded-2xl border border-button-bg/20 bg-white/70 px-5 py-4 shadow-[0_14px_30px_rgba(44,36,32,0.08)]">
          <div className="flex items-center justify-between text-xs text-secondary">
            <Skeleton className="h-3 w-28 rounded-full" />
            <Skeleton className="h-3 w-20 rounded-full" />
          </div>
          <Skeleton className="mt-3 h-2 w-full rounded-full" />
        </div>

        <section className="mt-8">
          <Skeleton className="h-3 w-40 rounded-full" />
          <div className="mt-3 overflow-hidden rounded-2xl border border-button-bg/15 bg-white/80 shadow-[0_18px_40px_rgba(45,39,35,0.08)]">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${index !== 2 ? "border-b border-button-bg/15" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-40 rounded-full" />
                    <Skeleton className="h-3 w-56 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <Skeleton className="h-3 w-40 rounded-full" />
          <div className="mt-3 overflow-hidden rounded-2xl border border-button-bg/15 bg-white/80 shadow-[0_18px_40px_rgba(45,39,35,0.08)]">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${index !== 1 ? "border-b border-button-bg/15" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-36 rounded-full" />
                    <Skeleton className="h-3 w-52 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FamilyMembersSkeleton;
