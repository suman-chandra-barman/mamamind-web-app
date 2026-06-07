/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type SubscriptionPlan = {
  id: number;
  name: string;
  code: string;
  price: string;
  currency: string;
  billing_cycle: string;
  billing_cycle_display: string;
  member_limit: number;
  description: string;
  features: string[];
  is_current: boolean;
};

export type SubscriptionPlansResponse = {
  success: boolean;
  message: string;
  data: {
    count: number;
    plans: SubscriptionPlan[];
  };
};

export type CheckoutRequest = {
  plan_id: number;
};

export type CheckoutResponse = {
  success: boolean;
  message: string;
  data: {
    checkout_url: string;
    session_id: string;
    plan: SubscriptionPlan;
  };
};

export type CurrentSubscription = {
  id: number;
  plan: SubscriptionPlan;
  status: string;
  status_display: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  cancelled_at: string | null;
  created_at: string;
  updated_at: string;
};

export type CurrentSubscriptionResponse = {
  success: boolean;
  message: string;
  data: {
    subscription: CurrentSubscription;
  };
};

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptionPlans: builder.query<SubscriptionPlansResponse, void>({
      query: () => ({
        url: "/subscriptions/plans/",
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),
    getCurrentSubscription: builder.query<CurrentSubscriptionResponse, void>({
      query: () => ({
        url: "/subscriptions/current/",
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),
    checkoutSubscription: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (body) => ({
        url: "/subscriptions/checkout/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),
  }),
});

export const {
  useGetSubscriptionPlansQuery,
  useGetCurrentSubscriptionQuery,
  useCheckoutSubscriptionMutation,
} = subscriptionApi;
