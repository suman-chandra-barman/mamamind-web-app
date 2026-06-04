/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type FamilyPlan = {
  id: number;
  name: string;
  code: string;
  member_limit: number;
};

export type FamilyUsage = {
  used: number;
  limit: number;
  active_count: number;
  pending_count: number;
  remaining: number;
  is_limit_reached: boolean;
};

export type FamilyMemberItem = {
  membership_id: number;
  user_id: number;
  full_name: string;
  email: string | null;
  whatsapp_number: string;
  role: string;
  relation: string;
  relation_display: string;
  status: string;
  status_display: string;
  joined_at: string | null;
  invited_at: string | null;
  invite_expires_at?: string | null;
  can_edit: boolean;
  can_remove: boolean;
  initials?: string;
  invite_token?: string;
  accept_invite_api?: string;
  whatsapp_message?: string;
};

export type FamilyMembersResponse = {
  success: boolean;
  message: string;
  data: {
    plan: FamilyPlan;
    usage: FamilyUsage;
    active_members: FamilyMemberItem[];
    pending_invites: FamilyMemberItem[];
  };
};

export type InviteFamilyMemberRequest = {
  full_name: string;
  whatsapp_number: string;
  relation: string;
};

export type InviteFamilyMemberResponse = {
  success: boolean;
  message: string;
  data: {
    invite: FamilyMemberItem & {
      invite_token?: string;
      invite_expires_at?: string | null;
      accept_invite_api?: string;
      whatsapp_message?: string;
    };
    usage: FamilyUsage;
  };
};

export type ResendInviteResponse = {
  success: boolean;
  message: string;
  data: {
    invite: FamilyMemberItem & {
      invite_token?: string;
      invite_expires_at?: string | null;
      accept_invite_api?: string;
      whatsapp_message?: string;
    };
  };
};

export type CancelInviteResponse = {
  success: boolean;
  message: string;
  data: {
    cancelled_invite: FamilyMemberItem;
    usage: FamilyUsage;
  };
};

export type RemoveMemberResponse = {
  success: boolean;
  message: string;
  data: {
    removed_member: {
      membership_id: number;
      user_id: number;
      full_name: string;
      whatsapp_number: string;
      status: string;
    };
    usage: FamilyUsage;
  };
};

export const familyMembersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFamilyMembers: builder.query<FamilyMembersResponse, void>({
      query: () => ({
        url: "/auth/family/members/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    inviteFamilyMember: builder.mutation<
      InviteFamilyMemberResponse,
      InviteFamilyMemberRequest
    >({
      query: (body) => ({
        url: "/auth/family/invite-member/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    removeFamilyMember: builder.mutation<
      RemoveMemberResponse,
      { membershipId: number }
    >({
      query: ({ membershipId }) => ({
        url: `/auth/family/members/${membershipId}/remove/`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    resendInvite: builder.mutation<
      ResendInviteResponse,
      { membershipId: number }
    >({
      query: ({ membershipId }) => ({
        url: `/auth/family/invites/${membershipId}/resend/`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    cancelInvite: builder.mutation<
      CancelInviteResponse,
      { membershipId: number }
    >({
      query: ({ membershipId }) => ({
        url: `/auth/family/invites/${membershipId}/cancel/`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetFamilyMembersQuery,
  useInviteFamilyMemberMutation,
  useRemoveFamilyMemberMutation,
  useResendInviteMutation,
  useCancelInviteMutation,
} = familyMembersApi;
