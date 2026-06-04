/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type DashboardOverviewResponse = {
  success: boolean;
  message: string;
  data: any;
};

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOverview: builder.query<DashboardOverviewResponse, void>({
      query: () => ({
        url: `/dashboard/overview/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOverviewQuery } = dashboardApi;
