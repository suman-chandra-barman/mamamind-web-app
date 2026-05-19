/** @format */

import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const stats = [
  { value: "9+", label: "Core AI features" },
  { value: "24/7", label: "Always available" },
  { value: "< 3s", label: "Average response time" },
  { value: "10", label: "Family members per plan" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-secondary-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <MotionStagger className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <MotionStaggerItem key={stat.label}>
                <div>
                  <p className="text-4xl font-bold text-button-bg md:text-[40px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-secondary md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </MotionReveal>
      </div>
    </section>
  );
};

export default StatsSection;
