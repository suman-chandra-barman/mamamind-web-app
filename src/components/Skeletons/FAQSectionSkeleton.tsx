/** @format */

import { Skeleton } from "@/components/ui/skeleton";

type FAQSectionSkeletonProps = {
  showTabs?: boolean;
};

const FAQSectionSkeleton = ({ showTabs = true }: FAQSectionSkeletonProps) => {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      {showTabs ? (
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={`faq-tab-skeleton-${index}`}
              className="h-7 w-20 rounded-full md:h-8 md:w-24"
            />
          ))}
        </div>
      ) : null}

      <div className={showTabs ? "mt-8 space-y-4" : "space-y-4 w-80 sm:w-100 md:min-w-150 lg:min-w-200"}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`faq-item-skeleton-${index}`}
            className="rounded-2xl border border-button-bg/10 bg-white/70 p-4 md:p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-5 w-4/5 md:h-6" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="mt-3 space-y-2">
              <Skeleton className="h-3.5 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionSkeleton;
