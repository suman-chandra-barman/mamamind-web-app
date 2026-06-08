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

export type AcceptInviteRequest = {
  invite_token: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type AcceptInviteResponseData = {
  user: {
    id: number;
    full_name: string;
    email: string;
    whatsapp_number: string;
    role: string;
    is_email_verified: boolean;
    family: {
      id: number;
      name: string;
      relation: string;
      member_status: string;
    };
  };
  tokens: {
    access: string;
    refresh: string;
  };
};

export type AcceptInviteResponse = {
  success: boolean;
  message: string;
  data: AcceptInviteResponseData;
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
      async queryFn(arg, queryApi, extraOptions, baseQuery) {
        // 1. Call backend invitation API
        const inviteResult = await baseQuery({
          url: "/auth/family/invite-member/",
          method: "POST",
          body: arg,
        });

        if (inviteResult.error) {
          return { error: inviteResult.error };
        }

        const inviteResponse = inviteResult.data as InviteFamilyMemberResponse;

        // 2. Call the webhook API
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_FAMILY_INVITE_WEBHOOK_URL as string, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inviteResponse),
          });

          if (!response.ok) {
            throw new Error(`Webhook responded with status ${response.status}`);
          }

          // Both succeeded!
          return { data: inviteResponse };
        } catch (error) {
          console.error("Webhook call failed. Rolling back family member invitation...", error);

          // 3. Rollback: Cancel the invitation on the backend
          const membershipId = inviteResponse.data?.invite?.membership_id;
          if (membershipId != null) {
            try {
              await baseQuery({
                url: `/auth/family/invites/${membershipId}/cancel/`,
                method: "POST",
              });
            } catch (rollbackError) {
              console.error("Rollback failed (could not cancel invitation):", rollbackError);
            }
          }

          // Return custom error so mutation is considered a failure
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: error instanceof Error ? error.message : "Webhook delivery failed",
              data: inviteResponse,
            },
          };
        }
      },
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
    acceptInvite: builder.mutation<AcceptInviteResponse, AcceptInviteRequest>({
      query: (body) => ({
        url: "/auth/family/accept-invite/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetFamilyMembersQuery,
  useInviteFamilyMemberMutation,
  useRemoveFamilyMemberMutation,
  useResendInviteMutation,
  useCancelInviteMutation,
  useAcceptInviteMutation,
} = familyMembersApi;
