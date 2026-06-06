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

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptionPlans: builder.query<SubscriptionPlansResponse, void>({
      query: () => ({
        url: "/subscriptions/plans/",
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

export const { useGetSubscriptionPlansQuery, useCheckoutSubscriptionMutation } =
  subscriptionApi;
