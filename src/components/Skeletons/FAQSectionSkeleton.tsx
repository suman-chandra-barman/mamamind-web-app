/** @format */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FAQSectionSkeleton = () => {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={`faq-tab-skeleton-${index}`}
            className="h-7 w-20 rounded-full md:h-8 md:w-24"
          />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`faq-item-skeleton-${index}`}
            className="border-b border-button-bg/18 pb-3"
          >
            <Skeleton className="h-5 w-3/4 md:h-6" />
            <Skeleton className="mt-2 h-3.5 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionSkeleton;
