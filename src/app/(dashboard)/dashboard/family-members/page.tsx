"use client";

import { useMemo, useState } from "react";
import { MoreVertical, Trash2, Send, X } from "lucide-react";
import { toast } from "react-toastify";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InviteFamilyMemberModal from "@/components/Modals/InviteFamilyMemberModal";
import RemoveMemberModal from "@/components/Modals/RemoveMemberModal";
import FamilyMembersSkeleton from "@/components/Skeletons/FamilyMembersSkeleton";
import type { FamilyMemberItem } from "@/redux/features/family/familyMembersApi";
import {
  useCancelInviteMutation,
  useGetFamilyMembersQuery,
  useInviteFamilyMemberMutation,
  useRemoveFamilyMemberMutation,
  useResendInviteMutation,
} from "@/redux/features/family/familyMembersApi";
import { useAppSelector } from "@/redux/hooks";

type MemberRole = "Account Owner" | "Partner" | "Child";

type Member = {
  id: string;
  name: string;
  role: MemberRole;
  phone: string;
  status: "Active";
  joined: string;
};

type Invite = {
  id: string;
  name: string;
  role: MemberRole;
  phone: string;
  invited: string;
  status: "Pending";
};

const roleMap: Record<string, MemberRole> = {
  owner: "Account Owner",
  partner: "Partner",
  child: "Child",
};

const formatDate = (value?: string | null) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const formatJoinedLabel = (value?: string | null) => {
  const formatted = formatDate(value);
  return formatted ? `Joined ${formatted}` : "";
};

const formatInvitedLabel = (value?: string | null) => {
  const formatted = formatDate(value);
  return formatted ? `Invited ${formatted}` : "";
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const mapActiveMember = (member: FamilyMemberItem): Member => ({
  id: String(member.membership_id),
  name: member.full_name,
  role: roleMap[member.relation] ?? "Child",
  phone: member.whatsapp_number,
  status: "Active",
  joined: formatJoinedLabel(member.joined_at),
});

const mapPendingInvite = (invite: FamilyMemberItem): Invite => ({
  id: String(invite.membership_id),
  name: invite.full_name,
  role: roleMap[invite.relation] ?? "Child",
  phone: invite.whatsapp_number,
  invited: formatInvitedLabel(invite.invited_at),
  status: "Pending",
});

const FamilyMembersPage = () => {
  const { data, isLoading } = useGetFamilyMembersQuery();
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState<Member | null>(null);
  const [memberToRemoveId, setMemberToRemoveId] = useState<number | null>(null);
  const user = useAppSelector((state) => state.auth.user);

  const [inviteFamilyMember, { isLoading: isInviting }] =
    useInviteFamilyMemberMutation();
  const [removeFamilyMember] = useRemoveFamilyMemberMutation();
  const [resendInvite, { isLoading: isResending }] = useResendInviteMutation();
  const [cancelInvite, { isLoading: isCancelling }] = useCancelInviteMutation();

  const overview = data?.data;
  const plan = overview?.plan;
  const usage = overview?.usage;
  const activeMembers = useMemo(
    () => overview?.active_members?.map(mapActiveMember) ?? [],
    [overview?.active_members],
  );
  const pendingInvites = useMemo(
    () => overview?.pending_invites?.map(mapPendingInvite) ?? [],
    [overview?.pending_invites],
  );

  const usedSlots = usage?.used ?? activeMembers.length;
  const totalSlots = usage?.limit ?? plan?.member_limit ?? 0;
  const progressValue = useMemo(() => {
    if (totalSlots === 0) return 0;
    return Math.min(100, Math.round((usedSlots / totalSlots) * 100));
  }, [totalSlots, usedSlots]);

  if (isLoading) {
    return <FamilyMembersSkeleton />;
  }

  const handleInviteSubmit = async (values: {
    full_name: string;
    whatsapp_number: string;
    relation: string;
  }) => {
    try {
      const response = await inviteFamilyMember(values).unwrap();
      toast.success(response.message || "Family member invited successfully");
    } catch (error: any) {
      const errorMessage =
        error?.error ||
        error?.data?.message ||
        error?.message ||
        "Failed to invite family member";
      toast.error(errorMessage);
    }
  };

  const handleRemoveMember = async () => {
    if (memberToRemoveId == null) return;

    try {
      const response = await removeFamilyMember({
        membershipId: memberToRemoveId,
      }).unwrap();
      toast.success(response.message || "Family member removed successfully");
      setMemberToRemove(null);
      setMemberToRemoveId(null);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to remove member",
      );
    }
  };

  const handleResendInvite = async (membershipId: number) => {
    try {
      const response = await resendInvite({ membershipId }).unwrap();
      toast.success(response.message || "Invite resent successfully");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to resend invite",
      );
    }
  };

  const handleCancelInvite = async (membershipId: number) => {
    try {
      const response = await cancelInvite({ membershipId }).unwrap();
      toast.success(response.message || "Invite cancelled successfully");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to cancel invite",
      );
    }
  };

  return (
    <div className="bg-secondary-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-primary">
              Family Members
            </h1>
            <p className="mt-1 text-sm text-secondary">
              Manage who has access to your shared Mamamind bot
            </p>
          </div>
          {user?.role === "family_owner" && (
            <Button
              className="h-10 rounded-full bg-button-bg px-5 text-sm font-medium text-white hover:bg-button-bg/90"
              onClick={() => setIsInviteOpen(true)}
              disabled={isInviting}
            >
              {isInviting ? "Sending..." : "+ Invite Member"}
            </Button>
          )

          }
        </div>

        <div className="mt-6 rounded-2xl border border-[#f3d8dc] bg-white/70 px-5 py-4 shadow-[0_14px_30px_rgba(43,27,30,0.08)]">
          <div className="flex items-center justify-between text-xs text-secondary">
            <span>
              {usedSlots} / {totalSlots} members used
            </span>
            <span>{plan?.name ?? "Family Plan"}</span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-[#f3d8dc]">
            <div
              className="h-2 rounded-full bg-button-bg transition-all"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Active Members ({activeMembers.length})
          </h2>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#f3d8dc] bg-white/80 shadow-[0_18px_40px_rgba(43,27,30,0.08)]">
            {activeMembers.length === 0 ? (
              <div className="px-4 py-8 text-sm text-secondary sm:px-5">
                No active members found.
              </div>
            ) : (
              activeMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${index !== activeMembers.length - 1
                      ? "border-b border-[#f3d8dc]"
                      : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-[#fdecee] text-sm font-semibold text-primary">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {member.name}
                      </p>
                      <p className="text-xs text-secondary">
                        {member.role} · {member.phone} · {member.joined}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                      {member.status}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f3d8dc] bg-white text-secondary transition hover:bg-[#fff1f3]"
                          aria-label="Member actions"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="min-w-40">
                        <DropdownMenuItem
                          onClick={() => {
                            setMemberToRemove(member);
                            const source = overview?.active_members?.find(
                              (item) =>
                                String(item.membership_id) === member.id,
                            );
                            setMemberToRemoveId(source?.membership_id ?? null);
                          }}
                          className="text-rose-600 focus:text-rose-600"
                          disabled={
                            !overview?.active_members?.find(
                              (item) =>
                                String(item.membership_id) === member.id,
                            )?.can_remove
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Pending Invites ({pendingInvites.length})
          </h2>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#f3d8dc] bg-white/80 shadow-[0_18px_40px_rgba(43,27,30,0.08)]">
            {pendingInvites.length === 0 ? (
              <div className="px-4 py-8 text-sm text-secondary sm:px-5">
                No pending invites.
              </div>
            ) : (
              pendingInvites.map((invite, index) => (
                <div
                  key={invite.id}
                  className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${index !== pendingInvites.length - 1
                      ? "border-b border-[#f3d8dc]"
                      : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-[#fdecee] text-sm font-semibold text-primary">
                        {getInitials(invite.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {invite.name}
                      </p>
                      <p className="text-xs text-secondary">
                        {invite.role} · {invite.phone} · {invite.invited}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-[11px] font-semibold text-rose-700">
                      {invite.status}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f3d8dc] bg-white text-secondary transition hover:bg-[#fff1f3]"
                          aria-label="Invite actions"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="min-w-40">
                        <DropdownMenuItem
                          className="text-primary"
                          onClick={() => handleResendInvite(Number(invite.id))}
                          disabled={isResending}
                        >
                          <Send className="h-4 w-4" />
                          {isResending ? "Sending..." : "Resend"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-rose-600 focus:text-rose-600"
                          onClick={() => handleCancelInvite(Number(invite.id))}
                          disabled={isCancelling}
                        >
                          <X className="h-4 w-4" />
                          {isCancelling ? "Cancelling..." : "Cancel Invite"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      <InviteFamilyMemberModal
        open={isInviteOpen}
        onOpenChange={setIsInviteOpen}
        onSubmit={handleInviteSubmit}
      />

      <RemoveMemberModal
        open={Boolean(memberToRemove)}
        onOpenChange={(open) => {
          if (!open) setMemberToRemove(null);
          if (!open) setMemberToRemoveId(null);
        }}
        memberName={memberToRemove?.name}
        onConfirm={handleRemoveMember}
      />
    </div>
  );
};

export default FamilyMembersPage;
