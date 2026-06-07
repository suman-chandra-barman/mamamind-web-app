/** @format */

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
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

const PricingSection = () => {
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

  // Decide if a plan is highlighted (middle/popular plan heuristic)
  const getHighlight = (index: number) => index === 1;

  return (
    <section id="pricing" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            semiTitle="Simple Pricing"
            title="Plans that grow with your family"
          />
        </MotionReveal>

        {isPlansLoading ? (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-2xl bg-primary/5"
              />
            ))}
          </div>
        ) : (
          <MotionStagger className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => {
              const isHighlight = getHighlight(index);
              const isCurrent = plan.id === currentPlanId;
              const isBusy = isCheckingOut && activePlanId === plan.id;

              return (
                <MotionStaggerItem key={plan.id}>
                  <article
                    className={`relative rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                      isHighlight
                        ? "border-button-bg bg-tertiary-background text-white shadow-[0_16px_36px_rgba(44,36,32,0.34)]"
                        : "border-button-bg/22 bg-card-bg text-primary"
                    }`}
                  >
                    {isHighlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-button-bg px-4 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </span>
                    )}

                    {isCurrent && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#1f8a7f] px-3 py-0.5 text-[11px] font-semibold text-white">
                        Current Plan
                      </span>
                    )}

                    <h3 className="text-xl font-semibold md:text-[22px]">
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-1 text-xs md:text-[13px] ${
                        isHighlight ? "text-white/70" : "text-secondary"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mt-4 flex items-end gap-1 md:mt-6">
                      <span
                        className={`text-4xl font-bold md:text-[44px] ${
                          isHighlight ? "text-button-bg" : "text-primary"
                        }`}
                      >
                        ${Number(plan.price).toFixed(0)}
                      </span>
                      <span
                        className={`mb-2 text-xs md:text-sm ${
                          isHighlight ? "text-white/70" : "text-secondary"
                        }`}
                      >
                        /{plan.billing_cycle}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-3 md:mt-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-xs md:text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-button-bg" />
                          <span
                            className={
                              isHighlight ? "text-[#EDE0CC]" : "text-secondary"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={isHighlight ? "default" : "outline"}
                      className={`mt-6 h-10 w-full rounded-full text-sm font-medium md:mt-9 md:h-11 ${
                        isCurrent
                          ? "cursor-default border-[#1f8a7f]/40 bg-[#1f8a7f]/10 text-[#1f8a7f] hover:bg-[#1f8a7f]/10!"
                          : isHighlight
                            ? "bg-button-bg text-white hover:bg-[#9f8046]!"
                            : "border-primary/35 bg-transparent text-primary hover:bg-primary/5!"
                      }`}
                      disabled={isCurrent || isBusy}
                      onClick={() => !isCurrent && handleCheckout(plan)}
                    >
                      {isBusy
                        ? "Preparing..."
                        : isCurrent
                          ? "Current Plan"
                          : "Buy Now"}
                    </Button>
                  </article>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
