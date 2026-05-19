/** @format */

"use client";

import React from "react";
import { Check, Circle, LockKeyhole, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import PurchaseSuccessDialog from "@/components/GetStartedComponents/PurchaseSuccessDialog";

type Plan = {
  id: "individual" | "family" | "premium-family";
  name: string;
  price: number;
  suffix: string;
  featured?: boolean;
};

const plans: Plan[] = [
  { id: "individual", name: "Individual", price: 9, suffix: "/mo" },
  {
    id: "family",
    name: "Family",
    price: 19,
    suffix: "/mo",
    featured: true,
  },
  {
    id: "premium-family",
    name: "Premium Family",
    price: 34,
    suffix: "/mo",
  },
];

const summaryFeatures = [
  "All Individual features",
  "Shared family calendar",
  "Conflict detection",
  "Family reminders",
  "Shared events",
];

const CheckoutOrderSection = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<Plan["id"]>("family");
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);

  const activePlan = plans.find((plan) => plan.id === selectedPlan) ?? plans[1];

  return (
    <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
      <section className="w-full bg-transparent py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionHeading
              title="Complete your order"
              className="mx-0 max-w-none text-left"
            />
          </MotionReveal>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[1.04fr_1fr] lg:items-start">
            <MotionStagger className="space-y-5" stagger={0.08}>
              <MotionStaggerItem>
                <article className="rounded-2xl border border-button-bg/20 bg-card-bg p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    Your Details
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-secondary">
                        First name
                      </label>
                      <input
                        type="text"
                        defaultValue="Sarah"
                        className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-secondary">
                        Last name
                      </label>
                      <input
                        type="text"
                        defaultValue="Mitchell"
                        className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-secondary">
                      Email address
                    </label>
                    <input
                      type="email"
                      defaultValue="sarah@example.com"
                      className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-secondary">
                      WhatsApp number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+880 7700 900 123"
                      className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                    />
                  </div>
                </article>
              </MotionStaggerItem>

              <MotionStaggerItem>
                <article className="rounded-2xl border border-button-bg/20 bg-card-bg p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    Your Plan
                  </h3>

                  <div className="mt-4 space-y-2">
                    {plans.map((plan) => {
                      const isSelected = selectedPlan === plan.id;

                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left transition ${
                            isSelected
                              ? "border-button-bg/55 bg-secondary-background"
                              : "border-button-bg/20 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isSelected ? (
                              <Check className="h-4 w-4 text-button-bg" />
                            ) : (
                              <Circle className="h-4 w-4 text-secondary" />
                            )}
                            <span className="text-sm font-medium text-primary">
                              {plan.name}
                            </span>
                            {plan.featured && (
                              <span className="rounded-full bg-button-bg px-2 py-0.5 text-[10px] font-semibold text-white">
                                Popular
                              </span>
                            )}
                          </div>

                          <span className="text-[15px] font-semibold text-button-bg">
                            ${plan.price}
                            {plan.suffix}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </article>
              </MotionStaggerItem>

              <MotionStaggerItem>
                <article className="rounded-2xl border border-button-bg/20 bg-card-bg p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    Payment
                  </h3>

                  <div className="mt-4">
                    <label className="text-xs text-secondary">
                      Card number
                    </label>
                    <input
                      type="text"
                      defaultValue="1234 5678 9012 3456"
                      className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                    />
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-secondary">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        defaultValue="MM / YY"
                        className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-secondary">CVV</label>
                      <input
                        type="text"
                        defaultValue="•••"
                        className="mt-1 h-10 w-full rounded-lg border border-button-bg/20 bg-secondary-background px-3 text-sm text-primary outline-none transition focus:border-button-bg/45"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-md border border-button-bg/15 bg-secondary-background px-3 py-2 text-[11px] text-secondary">
                    <LockKeyhole className="h-3.5 w-3.5" />
                    Secured by Stripe - your card details are never stored on
                    our servers.
                  </div>

                  <p className="mt-4 text-xs text-secondary">
                    I agree to the{" "}
                    <span className="text-button-bg">Terms of Service</span> and{" "}
                    <span className="text-button-bg">Privacy Policy</span>
                  </p>

                  <Button
                    type="button"
                    onClick={() => setIsSuccessOpen(true)}
                    className="mt-5 cursor-pointer h-11 w-full rounded-full bg-button-bg text-sm font-medium text-white hover:bg-button-bg/90"
                  >
                    Complete Purchase - ${activePlan.price}/month
                  </Button>
                </article>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionReveal delay={0.08}>
              <aside className="rounded-2xl border border-button-bg/20 bg-card-bg p-5 md:p-6 lg:sticky lg:top-24">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  Order Summary
                </h3>

                <div className="mt-4 rounded-lg bg-secondary-background p-4">
                  <p className="text-xl md:text-2xl font-semibold text-primary">
                    {activePlan.name} Plan
                  </p>
                  <p className="text-xs text-secondary">Billed monthly</p>
                </div>

                <ul className="mt-4 space-y-2 border-b border-button-bg/20 pb-4">
                  {summaryFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-secondary"
                    >
                      <Check className="h-3.5 w-3.5 text-button-bg" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-primary">Total due today</p>
                  <p className="text-4xl font-bold text-button-bg">
                    ${activePlan.price}
                  </p>
                </div>

                <p className="mt-4 text-xs text-secondary">
                  Cancel anytime. No questions asked.
                </p>

                <div className="mt-4 space-y-2 text-xs text-secondary">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-button-bg" />
                    Secure payment via Stripe
                  </p>
                  <p className="flex items-center gap-2">
                    <LockKeyhole className="h-3.5 w-3.5 text-button-bg" />
                    End-to-end encrypted data
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-button-bg" />
                    Cancel anytime, no lock-in
                  </p>
                </div>
              </aside>
            </MotionReveal>
          </div>
        </div>
      </section>

      <PurchaseSuccessDialog planName={activePlan.name} />
    </Dialog>
  );
};

export default CheckoutOrderSection;
