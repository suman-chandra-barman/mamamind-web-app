/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { validateRegister } from "@/schemas/auth";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      full_name: fullName.trim(),
      email: email.trim(),
      whatsapp_number: whatsappNumber.trim(),
      password,
      confirm_password: confirmPassword,
    };
    const validationError = validateRegister(payload);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      const response = await signup(payload).unwrap();

      if (response?.success) {
        localStorage.setItem("pendingEmail", payload.email);
        toast.success(response?.message || "Registration successful.");
        router.push("/email-verify");
        return;
      }

      toast.error(response?.message || "Signup failed.");
    } catch (error:any) {
      toast.error(error?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9EFF3] bg-opacity-80">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Gafbi Health Care"
            width={80}
            height={80}
            className="object-cover mb-2"
          />
          <h1 className="text-2xl font-bold text-center text-button-bg">
            Mamamind
          </h1>
        </div>
        <h2 className="text-lg font-bold text-button-bg mb-1">
          Create Account
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          Join our community and start your journey with us.
        </p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            className="border rounded px-3 py-2"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp number"
            className="border rounded px-3 py-2"
            required
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border rounded px-3 py-2"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="h-10 rounded-full bg-button-bg text-[15px] font-medium text-white hover:bg-[#9f8046] cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
        <Link
          href="/signin"
          className="block mt-4 rounded-full border border-button-bg px-3 py-2 text-center font-semibold text-button-bg transition hover:bg-button-bg hover:text-white"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
