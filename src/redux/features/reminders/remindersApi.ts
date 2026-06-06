/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type ReminderFilter =
  | "all"
  | "upcoming"
  | "this_week"
  | "shared"
  | "private"
  | "completed";

export type ReminderVisibility = "shared" | "private";

export type ReminderRecurring =
  | "one_time"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

export type ReminderItem = {
  id: number;
  title: string;
  owner_id: number | null;
  owner_name: string;
  created_by_name: string;
  reminder_date: string;
  reminder_time: string | null;
  visibility: ReminderVisibility;
  visibility_display: string;
  recurring: ReminderRecurring;
  recurring_display: string;
  is_completed: boolean;
  completed_at: string | null;
  is_overdue: boolean;
  created_at: string;
  updated_at: string;
};

export type ReminderStats = {
  total: number;
  upcoming: number;
  shared: number;
  private: number;
  completed: number;
};

export type ReminderPageResponse = {
  success: boolean;
  message: string;
  data: {
    filter: ReminderFilter;
    stats: ReminderStats;
    reminders: ReminderItem[];
  };
};

export type ReminderOwnerOption = {
  id: number | null;
  full_name: string;
  label: string;
  type: string;
  relation?: string;
  relation_display?: string;
};

export type ReminderOwnersResponse = {
  success: boolean;
  message: string;
  data: {
    owners: ReminderOwnerOption[];
  };
};

export type ReminderCreateRequest = {
  title: string;
  owner_id: number | null;
  reminder_date: string;
  reminder_time: string;
  visibility: ReminderVisibility;
  recurring: ReminderRecurring;
};

export type ReminderCreateResponse = {
  success: boolean;
  message: string;
  data: {
    reminder: ReminderItem;
  };
};

export const remindersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReminders: builder.query<ReminderPageResponse, ReminderFilter>({
      query: (filter) => ({
        url: `/reminders/?filter=${filter}`,
        method: "GET",
      }),
      providesTags: ["Reminder"],
    }),
    getReminderOwners: builder.query<ReminderOwnersResponse, void>({
      query: () => ({
        url: "/reminders/owners/",
        method: "GET",
      }),
      providesTags: ["Reminder"],
    }),
    createReminder: builder.mutation<
      ReminderCreateResponse,
      ReminderCreateRequest
    >({
      query: (body) => ({
        url: "/reminders/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reminder"],
    }),
  }),
});

export const {
  useGetRemindersQuery,
  useGetReminderOwnersQuery,
  useCreateReminderMutation,
} = remindersApi;
