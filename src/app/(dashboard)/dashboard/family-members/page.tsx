"use client";

import { useMemo, useState } from "react";
import { MoreVertical, Pencil, Trash2, Send, X } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InviteFamilyMemberModal from "@/components/Modals/InviteFamilyMemberModal";
import EditFamilyMemberModal from "@/components/Modals/EditFamilyMemberModal";
import RemoveMemberModal from "@/components/Modals/RemoveMemberModal";

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

const activeMembers: Member[] = [
  {
    id: "member-1",
    name: "Sarah Mitchell",
    role: "Account Owner",
    phone: "+44 7700 900 001",
    status: "Active",
    joined: "Joined Jan 2025",
  },
  {
    id: "member-2",
    name: "James Mitchell",
    role: "Partner",
    phone: "+44 7700 900 002",
    status: "Active",
    joined: "Joined Jan 2025",
  },
  {
    id: "member-3",
    name: "Emma Mitchell",
    role: "Child",
    phone: "+44 7700 900 003",
    status: "Active",
    joined: "Joined Feb 2025",
  },
];

const pendingInvites: Invite[] = [
  {
    id: "invite-1",
    name: "Tom Mitchell",
    role: "Child",
    phone: "+44 7700 900 004",
    invited: "Invited Mar 2025",
    status: "Pending",
  },
];

const totalSlots: number = 5;

const FamilyMembersPage = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [memberToRemove, setMemberToRemove] = useState<Member | null>(null);

  const usedSlots = activeMembers.length;
  const progressValue = useMemo(() => {
    if (totalSlots === 0) return 0;
    return Math.min(100, Math.round((usedSlots / totalSlots) * 100));
  }, [usedSlots]);

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
          <Button
            className="h-10 rounded-full bg-button-bg px-5 text-sm font-medium text-white hover:bg-button-bg/90"
            onClick={() => setIsInviteOpen(true)}
          >
            + Invite Member
          </Button>
        </div>

        <div className="mt-6 rounded-2xl border border-button-bg/20 bg-white/70 px-5 py-4 shadow-[0_14px_30px_rgba(44,36,32,0.08)]">
          <div className="flex items-center justify-between text-xs text-secondary">
            <span>
              {usedSlots} / {totalSlots} members used
            </span>
            <span>Family Plan</span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-[#eadbc8]">
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
          <div className="mt-3 overflow-hidden rounded-2xl border border-button-bg/15 bg-white/80 shadow-[0_18px_40px_rgba(45,39,35,0.08)]">
            {activeMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
                  index !== activeMembers.length - 1
                    ? "border-b border-button-bg/15"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-[#f4e9d6] text-sm font-semibold text-primary">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
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
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-button-bg/20 bg-white text-secondary transition hover:bg-[#f8f1e7]"
                        aria-label="Member actions"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[160px]">
                      <DropdownMenuItem
                        onClick={() => setMemberToEdit(member)}
                        className="text-primary"
                      >
                        <Pencil className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setMemberToRemove(member)}
                        className="text-rose-600 focus:text-rose-600"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Pending Invites ({pendingInvites.length})
          </h2>
          <div className="mt-3 overflow-hidden rounded-2xl border border-button-bg/15 bg-white/80 shadow-[0_18px_40px_rgba(45,39,35,0.08)]">
            {pendingInvites.map((invite, index) => (
              <div
                key={invite.id}
                className={`flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
                  index !== pendingInvites.length - 1
                    ? "border-b border-button-bg/15"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-[#f4e9d6] text-sm font-semibold text-primary">
                      {invite.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
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
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-button-bg/20 bg-white text-secondary transition hover:bg-[#f8f1e7]"
                        aria-label="Invite actions"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[160px]">
                      <DropdownMenuItem className="text-primary">
                        <Send className="h-4 w-4" />
                        Resend
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-rose-600 focus:text-rose-600">
                        <X className="h-4 w-4" />
                        Cancel Invite
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <InviteFamilyMemberModal
        open={isInviteOpen}
        onOpenChange={setIsInviteOpen}
        onSubmit={() => setIsInviteOpen(false)}
      />

      <EditFamilyMemberModal
        open={Boolean(memberToEdit)}
        onOpenChange={(open) => {
          if (!open) setMemberToEdit(null);
        }}
        member={memberToEdit}
        onSubmit={() => setMemberToEdit(null)}
      />

      <RemoveMemberModal
        open={Boolean(memberToRemove)}
        onOpenChange={(open) => {
          if (!open) setMemberToRemove(null);
        }}
        memberName={memberToRemove?.name}
        onConfirm={() => setMemberToRemove(null)}
      />
    </div>
  );
};

export default FamilyMembersPage;
