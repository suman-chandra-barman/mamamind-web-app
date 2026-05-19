/** @format */

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  semiTitle?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionHeading = ({
  semiTitle,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {semiTitle && (
        <p className="text-[11px] font-semibold tracking-[0.18em] text-button-bg uppercase md:text-[13px]">
          {semiTitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-primary md:text-[40px]",
          semiTitle && "mt-1 md:mt-3",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 md:mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-lg md:text-xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
