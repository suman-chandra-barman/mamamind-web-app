/** @format */

"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import { cn } from "@/lib/utils";
import {
  type CheckoutRequest,
  type SubscriptionPlan,
  useCheckoutSubscriptionMutation,
  useGetCurrentSubscriptionQuery,
  useGetSubscriptionPlansQuery,
} from "@/redux/features/subscription/subscriptionApi";

const getErrorMessage = (error: unknown, fallback: string) => {
  const maybeError = error as { data?: { message?: string }; message?: string };
  return maybeError.data?.message || maybeError.message || fallback;
};

const SimplePricingSection = () => {
  const { data: plansData, isLoading: isPlansLoading } =
    useGetSubscriptionPlansQuery();
  const { data: currentSubData } = useGetCurrentSubscriptionQuery();
  const [checkoutSubscription, { isLoading: isCheckingOut }] =
    useCheckoutSubscriptionMutation();
  const [activePlanId, setActivePlanId] = useState<number | null>(null);

  const plans: SubscriptionPlan[] = plansData?.data.plans ?? [];
  const currentPlanId = currentSubData?.data.subscription?.plan?.id ?? null;

  const handleCheckout = async (plan: SubscriptionPlan) => {
    const body: CheckoutRequest = { plan_id: plan.id };
    try {
      setActivePlanId(plan.id);
      const response = await checkoutSubscription(body).unwrap();
      toast.success(
        response.message || "Stripe checkout session created successfully",
      );
      if (response.data.checkout_url) {
        window.open(response.data.checkout_url, "_blank", "noopener,noreferrer");
      }
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, "Failed to start checkout"));
    } finally {
      setActivePlanId(null);
    }
  };

  // Middle plan is "popular"
  const isPopular = (index: number) => index === 1;

  const cardColor = (index: number) =>
    isPopular(index) ? "bg-[#2d2420]" : "bg-white border border-gray-200";

  return (
    <section className="w-full bg-transparent px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            semiTitle="SIMPLE PRICING"
            title="Simple, transparent pricing"
            titleClassName="text-3xl leading-[1.08] font-bold tracking-tight text-primary sm:text-5xl lg:text-[56px]"
            description="No hidden fees. Cancel anytime. Data retained for 30 days after cancellation."
          />
        </MotionReveal>

        {/* Pricing Cards */}
        {isPlansLoading ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-16 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-2xl bg-primary/5"
              />
            ))}
          </div>
        ) : (
          <MotionStagger
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-16 md:gap-8"
            stagger={0.1}
            delayChildren={0.2}
          >
            {plans.map((plan, index) => {
              const popular = isPopular(index);
              const isCurrent = plan.id === currentPlanId;
              const isBusy = isCheckingOut && activePlanId === plan.id;

              return (
                <MotionStaggerItem key={plan.id} className="relative h-full">
                  <div
                    className={cn(
                      "relative rounded-2xl p-8 md:p-10 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1",
                      cardColor(index),
                      popular ? "md:scale-105 shadow-2xl" : "hover:shadow-lg",
                    )}
                  >
                    {/* Popular Badge */}
                    {popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-button-bg text-[#2d2420] px-4 py-1 rounded-full text-[13px] font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Current Plan Badge */}
                    {isCurrent && (
                      <div className="absolute right-4 top-4">
                        <span className="bg-[#1f8a7f] text-white px-3 py-0.5 rounded-full text-[11px] font-semibold">
                          Current Plan
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-grow">
                      <h3
                        className={cn(
                          "text-xl md:text-2xl font-bold",
                          popular ? "text-button-bg" : "text-primary",
                        )}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={cn(
                          "text-sm md:text-base mt-2",
                          popular ? "text-gray-400" : "text-secondary",
                        )}
                      >
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mt-6 md:mt-8">
                        <span
                          className={cn(
                            "text-4xl md:text-5xl font-bold",
                            popular ? "text-button-bg" : "text-primary",
                          )}
                        >
                          ${Number(plan.price).toFixed(0)}
                        </span>
                        <span
                          className={cn(
                            "text-sm md:text-base ml-2",
                            popular ? "text-gray-400" : "text-secondary",
                          )}
                        >
                          /{plan.billing_cycle}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      disabled={isCurrent || isBusy}
                      onClick={() => !isCurrent && handleCheckout(plan)}
                      className={cn(
                        "w-full py-1 md:py-2 rounded-full font-semibold text-base md:text-lg transition-all duration-300 mt-8",
                        isCurrent
                          ? "cursor-default border-2 border-[#1f8a7f]/50 text-[#1f8a7f] bg-[#1f8a7f]/10"
                          : popular
                            ? "cursor-pointer bg-button-bg text-[#2d2420] hover:bg-opacity-90!"
                            : "cursor-pointer border-2 border-primary text-primary hover:bg-primary! hover:text-white!",
                        (isCurrent || isBusy) &&
                          "opacity-70 cursor-not-allowed",
                      )}
                    >
                      {isBusy
                        ? "Preparing..."
                        : isCurrent
                          ? "Current Plan"
                          : "Buy Now"}
                    </button>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        )}
      </div>
    </section>
  );
};

export default SimplePricingSection;
