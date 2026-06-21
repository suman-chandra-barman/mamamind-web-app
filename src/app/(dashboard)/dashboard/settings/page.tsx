"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Camera,
  User,
  Mail,
  Phone,
  Shield,
  CheckCircle2,
  Save,
  Loader2,
  Crown,
  Users,
  AlertCircle,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";

export default function SettingsPage() {
  const user = useAppSelector((s) => s.auth.user);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Fetch fresh profile from server
  const { isLoading: profileLoading } = useGetProfileQuery(undefined);
  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();

  // Sync form when Redux user updates
  useEffect(() => {
    if (user) {
      setFullName(user.full_name ?? "");
      setWhatsapp(user.whatsapp_number ?? "");
      if (user.profile_image) {
        setPreviewUrl(
          `${process.env.NEXT_PUBLIC_BASE_URL}${user.profile_image}`
        );
      } else {
        setPreviewUrl(null);
      }
    }
  }, [user]);

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("full_name", fullName.trim());
    formData.append("whatsapp_number", whatsapp.trim());
    if (selectedFile) {
      formData.append("profile_image", selectedFile);
    }

    try {
      const result = await updateProfile(formData).unwrap();
      if (result.success) {
        setSelectedFile(null);
        toast.success("Profile updated successfully!");
      }
    } catch (err: unknown) {
      const error = err as { data?: { message?: string } };
      toast.error(error?.data?.message ?? "Failed to update profile.");
    }
  };

  const avatarInitials = user?.full_name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const planBadgeColor = () => {
    const code = user?.subscription?.plan?.code ?? "";
    if (code.includes("premium")) return "from-amber-500 to-orange-500";
    if (code.includes("basic")) return "from-blue-500 to-cyan-500";
    return "from-zinc-500 to-zinc-600";
  };

  if (profileLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-button-bg" />
          <p className="text-sm text-zinc-500">Loading your profile…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f9] via-[#fff1f3] to-[#fdecee] py-10 px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">Account Settings</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Manage your profile information and account preferences.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ── Profile Card ── */}
          <div className="overflow-hidden rounded-2xl border border-[#f3d8dc] bg-white shadow-sm">
            {/* Cover gradient */}
            <div className="h-28 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900" />

            <div className="px-6 pb-6">
              {/* Avatar upload */}
              <div className="flex items-end gap-4 -mt-12 mb-6">
                <div
                  className={`relative group cursor-pointer transition-all ${isDragging ? "scale-105" : ""}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <div className={`relative h-24 w-24 rounded-full ring-4 ring-white shadow-lg overflow-hidden ${isDragging ? "ring-rose-500" : ""}`}>
                    {previewUrl ? (
                      <Image
                        src={previewUrl}
                        alt="Profile"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#db4a6d] to-[#c53556] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {avatarInitials || <User className="h-8 w-8" />}
                        </span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Camera badge */}
                  <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#db4a6d] shadow-sm">
                    <Camera className="h-3.5 w-3.5 text-white" />
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pb-1">
                  <h2 className="text-lg font-semibold text-zinc-900 capitalize">
                    {user?.full_name ?? "—"}
                  </h2>
                  <p className="text-sm text-zinc-500">{user?.email}</p>
                </div>
              </div>

              {selectedFile && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-[#fff1f3] border border-[#f3d8dc] px-3 py-2 text-sm text-[#db4a6d]">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  New photo selected: <span className="font-medium">{selectedFile.name}</span>
                  <button
                    type="button"
                    className="ml-auto text-[#db4a6d] hover:text-[#c53556] font-medium"
                    onClick={() => {
                      setSelectedFile(null);
                      if (user?.profile_image_url) setPreviewUrl(user.profile_image_url);
                      else if (user?.profile_image) setPreviewUrl(`${process.env.NEXT_PUBLIC_BASE_URL}${user.profile_image}`);
                      else setPreviewUrl(null);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Subscription badge */}
              {user?.subscription && (
                <div className={`mb-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${planBadgeColor()} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                  <Crown className="h-3.5 w-3.5" />
                  {user.subscription.plan.name}
                </div>
              )}

              {/* Form fields */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="full_name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-button-bg focus:bg-white focus:ring-2 focus:ring-button-bg/15"
                    />
                  </div>
                </div>

                {/* Email (read-only) */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="email"
                      type="email"
                      value={user?.email ?? ""}
                      readOnly
                      className="w-full cursor-not-allowed rounded-xl border border-zinc-200 bg-zinc-100 py-2.5 pl-9 pr-4 text-sm text-zinc-500"
                    />
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">Email cannot be changed.</p>
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+1 234 567 8900"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-button-bg focus:bg-white focus:ring-2 focus:ring-button-bg/15"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Account Info Card ── */}
          <div className="rounded-2xl border border-[#f3d8dc] bg-white shadow-sm p-6">
            <h3 className="mb-4 text-sm font-semibold text-zinc-800 uppercase tracking-wider">
              Account Information
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Role */}
              <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdecee]">
                  <Shield className="h-4 w-4 text-[#db4a6d]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Role</p>
                  <p className="text-sm font-semibold text-zinc-800 capitalize">
                    {user?.role?.replace(/_/g, " ") ?? "—"}
                  </p>
                </div>
              </div>

              {/* Email verified */}
              <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full ${user?.is_email_verified ? "bg-emerald-100" : "bg-red-100"}`}>
                  <CheckCircle2 className={`h-4 w-4 ${user?.is_email_verified ? "text-emerald-600" : "text-red-400"}`} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Email Status</p>
                  <p className={`text-sm font-semibold ${user?.is_email_verified ? "text-emerald-700" : "text-red-500"}`}>
                    {user?.is_email_verified ? "Verified" : "Not Verified"}
                  </p>
                </div>
              </div>

              {/* Family */}
              {user?.family && (
                <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Family</p>
                    <p className="text-sm font-semibold text-zinc-800">{user.family.name}</p>
                    <p className="text-xs text-zinc-400 capitalize">{user.family.relation}</p>
                  </div>
                </div>
              )}

              {/* Subscription */}
              {user?.subscription && (
                <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdecee]">
                    <Crown className="h-4 w-4 text-[#db4a6d]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Subscription</p>
                    <p className="text-sm font-semibold text-zinc-800">{user.subscription.plan.name}</p>
                    <p className="text-xs text-zinc-400 capitalize">
                      {user.subscription.status} · {user.subscription.plan.billing_cycle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Save button ── */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#db4a6d] to-[#c53556] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-[#c53556] hover:to-[#a82e4a] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isSaving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {isSaving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}