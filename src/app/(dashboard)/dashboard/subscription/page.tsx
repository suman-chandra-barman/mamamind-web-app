"use client";

import { useMemo, useState } from "react";
import { Check, Crown, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

import SubscriptionPageSkeleton from "@/components/Skeletons/SubscriptionPageSkeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type CheckoutRequest,
  type SubscriptionPlan,
  useCheckoutSubscriptionMutation,
  useGetSubscriptionPlansQuery,
} from "@/redux/features/subscription/subscriptionApi";

const formatPrice = (price: string, currency: string, billingCycle: string) => {
  const numericPrice = Number(price);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(numericPrice)
    .concat(`/${billingCycle}`);
};

const getErrorMessage = (error: unknown, fallback: string) => {
  const maybeError = error as { data?: { message?: string }; message?: string };
  return maybeError.data?.message || maybeError.message || fallback;
};

const getBadgeTone = (plan: SubscriptionPlan) => {
  if (plan.is_current) {
    return "bg-[#1f8a7f] text-white";
  }

  if (plan.code === "premium_family") {
    return "bg-[#372b24] text-white";
  }

  return "bg-[#f4ead8] text-[#6f5f4a]";
};

const SubscriptionPage = () => {
  const { data, isLoading, isFetching } = useGetSubscriptionPlansQuery();
  const [checkoutSubscription, { isLoading: isCheckingOut }] =
    useCheckoutSubscriptionMutation();
  const [activePlanId, setActivePlanId] = useState<number | null>(null);

  const plans = useMemo(() => data?.data.plans ?? [], [data?.data.plans]);

  const currentPlan = useMemo(() => {
    return (
      plans.find((plan) => plan.is_current) ?? plans[1] ?? plans[0] ?? null
    );
  }, [plans]);

  const upgradePlan = useMemo(() => {
    if (!currentPlan) return plans[0] ?? null;

    const currentPrice = Number(currentPlan.price);
    return (
      plans.find(
        (plan) => !plan.is_current && Number(plan.price) > currentPrice,
      ) ??
      plans.find((plan) => !plan.is_current) ??
      null
    );
  }, [currentPlan, plans]);

  const handleCheckout = async (plan: SubscriptionPlan) => {
    const body: CheckoutRequest = { plan_id: plan.id };

    try {
      setActivePlanId(plan.id);
      const response = await checkoutSubscription(body).unwrap();

      toast.success(
        response.message || "Stripe checkout session created successfully",
      );

      if (response.data.checkout_url) {
        window.open(
          response.data.checkout_url,
          "_blank",
          "noopener,noreferrer",
        );
      }
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, "Failed to start checkout"));
    } finally {
      setActivePlanId(null);
    }
  };

  if (isLoading) {
    return <SubscriptionPageSkeleton />;
  }

  return (
    <div className="bg-secondary-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-primary">
              Subscription
            </h1>
            <p className="mt-1 text-sm text-secondary">
              {data?.message ?? `${plans.length} subscription plans available`}
            </p>
          </div>

          {isFetching ? (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary shadow-sm">
              Refreshing
            </span>
          ) : null}
        </div>

        <section className="mt-6 rounded-[1.75rem] border border-[#f0e2cf] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(45,39,35,0.08)] sm:px-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-[#8b7d6c]">Current Plan</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-semibold text-[#2f2723]">
                  {currentPlan?.name ?? "No active plan"}
                </h2>
                <span className="rounded-full bg-[#1f8a7f] px-3 py-1 text-xs font-semibold text-white">
                  Active
                </span>
              </div>
              <p className="mt-2 text-sm text-[#8b7d6c]">
                {currentPlan
                  ? `${formatPrice(currentPlan.price, currentPlan.currency, currentPlan.billing_cycle_display.toLowerCase())} · Up to ${currentPlan.member_limit} member${currentPlan.member_limit === 1 ? "" : "s"}`
                  : "Choose a plan to unlock access for your family."}
              </p>
            </div>

          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-button-bg" />
            <h3 className="text-lg font-semibold text-primary">All Plans</h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => {
              const isCurrent = plan.is_current;
              const isBusy = isCheckingOut && activePlanId === plan.id;
              const cardTone = isCurrent
                ? "border-button-bg/60 bg-[#2f2622] text-[#f4e7cc] shadow-[0_24px_50px_rgba(45,39,35,0.22)]"
                : "border-[#f0e2cf] bg-white text-[#2f2723] shadow-[0_18px_40px_rgba(45,39,35,0.08)]";

              return (
                <article
                  key={plan.id}
                  className={cn(
                    "relative rounded-[1.75rem] border px-5 py-6 transition-transform duration-200 hover:-translate-y-0.5",
                    cardTone,
                  )}
                >
                  {isCurrent ? (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-button-bg px-4 py-1 text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(175,141,78,0.25)]">
                      Current Plan
                    </div>
                  ) : null}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4
                        className={cn(
                          "text-xl font-semibold",
                          isCurrent ? "text-white" : "text-[#2f2723]",
                        )}
                      >
                        {plan.name}
                      </h4>
                      <p
                        className={cn(
                          "mt-2 text-sm",
                          isCurrent ? "text-[#dbc79c]" : "text-[#8b7d6c]",
                        )}
                      >
                        {plan.description}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        getBadgeTone(plan),
                      )}
                    >
                      {plan.is_current ? "Active" : plan.billing_cycle_display}
                    </span>
                  </div>

                  <div className="mt-4 flex items-end gap-1">
                    <span
                      className={cn(
                        "text-4xl font-semibold leading-none",
                        isCurrent ? "text-button-bg" : "text-[#2f2723]",
                      )}
                    >
                      {Number(plan.price).toFixed(0)}
                    </span>
                    <span
                      className={cn(
                        "pb-1 text-sm",
                        isCurrent ? "text-[#dbc79c]" : "text-[#8b7d6c]",
                      )}
                    >
                      /{plan.billing_cycle}
                    </span>
                  </div>

                  <p
                    className={cn(
                      "mt-2 text-sm",
                      isCurrent ? "text-[#dbc79c]" : "text-[#8b7d6c]",
                    )}
                  >
                    Up to {plan.member_limit} member
                    {plan.member_limit === 1 ? "" : "s"}
                  </p>

                  <div className="mt-5 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isCurrent ? "text-button-bg" : "text-button-bg/80",
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm",
                            isCurrent ? "text-[#dbc79c]" : "text-[#75685b]",
                          )}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    className={cn(
                      "mt-6 h-11 w-full rounded-full px-5 text-sm font-medium transition",
                      isCurrent
                        ? "cursor-default bg-[#d7bd83] text-white hover:bg-[#d7bd83]"
                        : "bg-button-bg text-white shadow-[0_14px_24px_rgba(175,141,78,0.25)] hover:bg-button-bg/90",
                    )}
                    disabled={isCurrent || isBusy}
                    onClick={() => handleCheckout(plan)}
                  >
                    {isBusy
                      ? "Preparing checkout..."
                      : isCurrent
                        ? "Your current plan"
                        : `Switch to ${plan.name}`}
                  </Button>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubscriptionPage;
