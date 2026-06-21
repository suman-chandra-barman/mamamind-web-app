/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useAcceptInviteMutation } from "@/redux/features/family/familyMembersApi";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "@/schemas/auth";

/* ─── inline styles ──────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

  .inv-root { font-family: 'Inter', sans-serif; }
  .inv-root *, .inv-root *::before, .inv-root *::after { box-sizing: border-box; }

  /* left panel gradient */
  .inv-left-panel {
    background: linear-gradient(160deg, #12090a 0%, #2b1b1e 40%, #3e2428 75%, #563137 100%);
    position: relative;
    overflow: hidden;
  }
  .inv-left-panel::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .inv-orb {
    position: absolute; border-radius: 50%;
    filter: blur(80px); pointer-events: none;
  }
  .inv-orb-1 { width: 320px; height: 320px; background: rgba(219,74,109,0.25); top: -80px; right: -80px; }
  .inv-orb-2 { width: 260px; height: 260px; background: rgba(168,46,74,0.3); bottom: -60px; left: -60px; }
  .inv-orb-3 { width: 180px; height: 180px; background: rgba(219,74,109,0.12); top: 40%; left: 20%; }

  /* right panel */
  .inv-right-panel {
    background: #fff8f9;
    position: relative;
    overflow: hidden;
  }
  .inv-right-panel::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(219,74,109,0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  /* glass card */
  .inv-glass {
    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(219,74,109,0.15);
    box-shadow: 0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* input */
  .inv-input {
    width: 100%;
    border: 1.5px solid #f3d8dc;
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 14px;
    background: #fff;
    color: #1e1113;
    outline: none;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .inv-input::placeholder { color: #cfb0b6; }
  .inv-input:hover:not(:disabled) { border-color: #db4a6d; }
  .inv-input:focus { border-color: #db4a6d; box-shadow: 0 0 0 3px rgba(219,74,109,0.15); }
  .inv-input:disabled { opacity: 0.55; cursor: not-allowed; background: #fdecee; }
  .inv-input.has-error { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }

  /* button */
  .inv-btn-primary {
    background: linear-gradient(135deg, #db4a6d 0%, #a82e4a 100%);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 24px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    width: 100%;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.2s;
    box-shadow: 0 4px 16px rgba(168,46,74,0.35);
    position: relative; overflow: hidden;
  }
  .inv-btn-primary::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  }
  .inv-btn-primary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(168,46,74,0.45);
  }
  .inv-btn-primary:active:not(:disabled) { transform: translateY(0); }
  .inv-btn-primary:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }

  /* spinner */
  .inv-spinner {
    width: 18px; height: 18px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: white;
    animation: inv-spin 0.65s linear infinite;
    flex-shrink: 0;
  }
  @keyframes inv-spin { to { transform: rotate(360deg); } }

  /* animations */
  .inv-fade-up { animation: inv-fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) both; }
  .inv-fade-up-d1 { animation-delay: 0.05s; }
  .inv-fade-up-d2 { animation-delay: 0.1s; }
  .inv-fade-up-d3 { animation-delay: 0.15s; }
  .inv-fade-up-d4 { animation-delay: 0.2s; }
  .inv-fade-up-d5 { animation-delay: 0.25s; }
  @keyframes inv-fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: none; }
  }

  /* success pulse */
  .inv-success-ring {
    animation: inv-pulse-ring 1.4s ease-out infinite;
  }
  @keyframes inv-pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.35); }
    70%  { box-shadow: 0 0 0 16px rgba(34,197,94,0); }
    100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
  }

  /* step dots */
  .inv-step { width: 8px; height: 8px; border-radius: 50%; transition: all 0.3s; }
  .inv-step.active { width: 24px; border-radius: 4px; background: #db4a6d; }
  .inv-step.done { background: #db4a6d; }
  .inv-step.pending { background: #f3d8dc; }

  /* token chip */
  .inv-token-chip {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    background: rgba(219,74,109,0.1);
    border: 1px solid rgba(219,74,109,0.25);
    border-radius: 6px;
    padding: 2px 8px;
    color: #db4a6d;
    letter-spacing: 0.03em;
  }
`;

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconHeart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);
const IconActivity = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconAlertTriangle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconCheckCircleFill = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

/* ─── helpers ────────────────────────────────────────────────────────────── */
const getStrength = (pw: string) => {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
};

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["", "#ef4444", "#f59e0b", "#eab308", "#22c55e"];
const STRENGTH_BG = ["", "#fee2e2", "#fef3c7", "#fefce8", "#dcfce7"];

const truncateToken = (t: string) =>
  t.length > 20 ? `${t.slice(0, 10)}…${t.slice(-6)}` : t;

/* ─── PasswordInput ──────────────────────────────────────────────────────── */
interface PwInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  hint?: React.ReactNode;
}

function PasswordInput({
  id, label, value, onChange, error, placeholder, autoComplete, disabled, hint,
}: PwInputProps) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: "#4a3e40" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`inv-input${error ? " has-error" : ""}`}
          style={{ paddingRight: 44 }}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          disabled={disabled}
          tabIndex={-1}
          aria-label={show ? "Hide password" : "Show password"}
          style={{
            position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer",
            color: "#766467", display: "flex", padding: 4,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#db4a6d")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#766467")}
        >
          {show ? <IconEyeOff /> : <IconEye />}
        </button>
      </div>
      {hint}
      {error && (
        <p style={{ fontSize: 12, color: "#ef4444", margin: "2px 0 0", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ef4444", flexShrink: 0, display: "inline-block" }} />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── StrengthBar ────────────────────────────────────────────────────────── */
function StrengthBar({ value }: { value: string }) {
  const s = getStrength(value);
  if (!value) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
      <div style={{ display: "flex", gap: 4, flex: 1 }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              flex: 1, height: 3, borderRadius: 2,
              background: i <= s ? STRENGTH_COLORS[s] : "#f3d8dc",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <span style={{
        fontSize: 11, fontWeight: 700,
        color: STRENGTH_COLORS[s],
        background: STRENGTH_BG[s],
        padding: "1px 8px", borderRadius: 20, letterSpacing: "0.04em",
      }}>
        {STRENGTH_LABELS[s]}
      </span>
    </div>
  );
}

/* ─── left panel feature row ─────────────────────────────────────────────── */
function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, background: "rgba(219,74,109,0.18)",
        border: "1px solid rgba(219,74,109,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#db4a6d", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#f9ecef", marginBottom: 2 }}>{title}</p>
        <p style={{ fontSize: 12, color: "rgba(249,236,239,0.6)", lineHeight: 1.5 }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─── SuccessScreen ──────────────────────────────────────────────────────── */
function SuccessScreen({ onRedirect }: { onRedirect: () => void }) {
  useEffect(() => {
    const t = setTimeout(onRedirect, 3000);
    return () => clearTimeout(t);
  }, [onRedirect]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "48px 24px", textAlign: "center", gap: 24,
    }}>
      <div
        className="inv-success-ring"
        style={{
          width: 96, height: 96, borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white",
        }}
      >
        <IconCheckCircleFill />
      </div>
      <div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1e1113", marginBottom: 8 }}>
          Welcome to the Family! 🎉
        </h3>
        <p style={{ fontSize: 14, color: "#766467", lineHeight: 1.6 }}>
          Your account has been activated successfully.<br />
          Redirecting you to sign in…
        </p>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8, height: 8, borderRadius: "50%", background: "#db4a6d",
              animation: `inv-spin 1.2s ease-in-out ${i * 0.2}s infinite alternate`,
              opacity: 0.4 + i * 0.2,
            }}
          />
        ))}
      </div>
      <button
        onClick={onRedirect}
        className="inv-btn-primary"
        style={{ maxWidth: 260 }}
      >
        Sign In Now <IconArrowRight />
      </button>
    </div>
  );
}

/* ─── main form ──────────────────────────────────────────────────────────── */
function AcceptInvitationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlToken = searchParams.get("token") ?? "";

  const [manualToken, setManualToken] = useState(urlToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    token?: string | null;
    email?: string | null;
    password?: string | null;
    confirm?: string | null;
  }>({});

  const [acceptInvite, { isLoading }] = useAcceptInviteMutation();
  /* prefer URL token; fall back to manually pasted token */
  const effectiveToken = urlToken || manualToken.trim();
  const hasToken = Boolean(effectiveToken);

  const clearError = (key: keyof typeof fieldErrors) =>
    setFieldErrors((prev) => ({ ...prev, [key]: null }));

  const validate = () => {
    const errs: typeof fieldErrors = {};
    if (!effectiveToken) errs.token = "Invitation token is required.";
    const emailErr = validateEmail(email);
    if (emailErr) errs.email = emailErr;
    const pwErr = validatePassword(password);
    if (pwErr) errs.password = pwErr;
    const cpwErr = validatePasswordMatch(password, confirmPassword);
    if (cpwErr) errs.confirm = cpwErr;
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await acceptInvite({
        invite_token: effectiveToken,
        email: email.trim(),
        password,
        confirm_password: confirmPassword,
      }).unwrap();

      if (res?.success) {
        setSuccess(true);
        toast.success(res.message || "Invitation accepted! Please sign in.");
        return;
      }
      toast.error(res?.message || "Something went wrong.");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to accept invitation. Please try again.");
    }
  };

  const goToSignin = () => router.push("/signin");

  /* step indicator: 0=invite, 1=setup, 2=done */
  const step = success ? 2 : 1;

  return (
    <>
      <style>{CSS}</style>
      <div
        className="inv-root"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* ══ LEFT PANEL ══════════════════════════════════════════════════ */}
        <div
          className="inv-left-panel"
          style={{ display: "flex", flexDirection: "column", padding: "56px 48px", position: "relative" }}
        >
          {/* orbs */}
          <div className="inv-orb inv-orb-1" />
          <div className="inv-orb inv-orb-2" />
          <div className="inv-orb inv-orb-3" />

          {/* logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "auto", position: "relative" }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: "rgba(219,74,109,0.2)",
              border: "1px solid rgba(219,74,109,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Image src="/logo.png" alt="Mamamind" width={28} height={28} className="object-contain" />
            </div>
            <div>
              <p style={{ fontSize: 18, fontWeight: 800, color: "#f9ecef", letterSpacing: "-0.02em" }}>Mamamind</p>
              <p style={{ fontSize: 11, color: "rgba(249,236,239,0.55)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Family Health
              </p>
            </div>
          </div>

          {/* hero content */}
          <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40, paddingTop: 48 }}>
            {/* WhatsApp invitation badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(37,211,102,0.15)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderRadius: 40, padding: "8px 16px",
              width: "fit-content",
            }}>
              <span style={{ color: "#25d366" }}><IconWhatsApp /></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(249,236,239,0.9)" }}>
                Invited via WhatsApp
              </span>
            </div>

            {/* headline */}
            <div>
              <h1 style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 900,
                color: "#f9ecef",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}>
                You&apos;ve been<br />
                <span style={{
                  background: "linear-gradient(90deg, #db4a6d, #ec8ca3, #db4a6d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  invited to join
                </span>
                <br />
                a family.
              </h1>
              <p style={{ fontSize: 15, color: "rgba(249,236,239,0.65)", lineHeight: 1.65, maxWidth: 340 }}>
                Complete your profile to access your family&apos;s health monitoring dashboard and stay connected.
              </p>
            </div>

            {/* features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <FeatureItem
                icon={<IconHeart />}
                title="Family Health Monitoring"
                desc="Track and share wellness metrics with your loved ones"
              />
              <FeatureItem
                icon={<IconActivity />}
                title="Real-time Insights"
                desc="Get live updates on health activities across your family"
              />
              <FeatureItem
                icon={<IconShield />}
                title="Secure & Private"
                desc="Your health data is end-to-end encrypted and protected"
              />
            </div>
          </div>

          {/* step progress */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, marginTop: 48 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`inv-step ${i < step ? "done" : i === step ? "active" : "pending"}`}
              />
            ))}
            <span style={{ fontSize: 12, color: "rgba(249,236,239,0.45)", marginLeft: 4 }}>
              Step {step} of 2
            </span>
          </div>
        </div>

        {/* ══ RIGHT PANEL ═════════════════════════════════════════════════ */}
        <div
          className="inv-right-panel"
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "56px 48px",
            overflowY: "auto",
          }}
        >
          <div style={{ width: "100%", maxWidth: 420 }}>

            {success ? (
              /* ── success state ── */
              <div className="inv-glass inv-fade-up" style={{ borderRadius: 20, overflow: "hidden" }}>
                <SuccessScreen onRedirect={goToSignin} />
              </div>
            ) : (
              /* ── form state ── */
              <>
                {/* header */}
                <div className="inv-fade-up" style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "linear-gradient(135deg, rgba(219,74,109,0.1), rgba(168,46,74,0.1))",
                      border: "1px solid rgba(219,74,109,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#db4a6d",
                    }}>
                      <IconUsers />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "#db4a6d", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Family Invitation
                      </p>
                    </div>
                  </div>

                  <h2 style={{ fontSize: 26, fontWeight: 800, color: "#1e1113", letterSpacing: "-0.02em", marginBottom: 8 }}>
                    Activate your account
                  </h2>
                  <p style={{ fontSize: 14, color: "#766467", lineHeight: 1.6 }}>
                    Enter your email and set a password to complete your family membership.
                  </p>
                </div>

                {/* ── token input field ── */}
                <div className="inv-fade-up inv-fade-up-d1" style={{ marginBottom: 8 }}>
                  <label
                    htmlFor="inv-token"
                    style={{ fontSize: 13, fontWeight: 600, color: "#4a3e40", display: "block", marginBottom: 6 }}
                  >
                    Invitation Token
                  </label>

                  {/* input row */}
                  <div style={{ position: "relative" }}>
                    <input
                      id="inv-token"
                      type="text"
                      value={manualToken}
                      onChange={(e) => { setManualToken(e.target.value); clearError("token"); }}
                      placeholder="Paste your invitation token here…"
                      disabled={isLoading}
                      spellCheck={false}
                      autoComplete="off"
                      className={`inv-input${fieldErrors.token ? " has-error" : ""}`}
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 13,
                        letterSpacing: "0.02em",
                        paddingRight: hasToken ? 36 : 16,
                      }}
                    />
                    {/* green tick when valid */}
                    {hasToken && (
                      <span style={{
                        position: "absolute", right: 12, top: "50%",
                        transform: "translateY(-50%)",
                        color: "#22c55e", display: "flex",
                      }}>
                        <IconCheck />
                      </span>
                    )}
                  </div>

                  {/* token validation message */}
                  {fieldErrors.token && (
                    <p style={{ fontSize: 12, color: "#ef4444", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ef4444", flexShrink: 0, display: "inline-block" }} />
                      {fieldErrors.token}
                    </p>
                  )}

                  {/* helper hint */}
                  <p style={{ fontSize: 11, color: "#766467", marginTop: 6, lineHeight: 1.5 }}>
                    Copy the token from your WhatsApp invitation message and paste it above.
                  </p>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                  {/* email */}
                  <div className="inv-fade-up inv-fade-up-d2" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <label htmlFor="inv-email" style={{ fontSize: 13, fontWeight: 600, color: "#4a3e40" }}>
                      Email Address
                    </label>
                    <input
                      id="inv-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                      placeholder="your@email.com"
                      autoComplete="email"
                      disabled={isLoading}
                      className={`inv-input${fieldErrors.email ? " has-error" : ""}`}
                    />
                    {fieldErrors.email && (
                      <p style={{ fontSize: 12, color: "#ef4444", margin: "2px 0 0", display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ef4444", flexShrink: 0, display: "inline-block" }} />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* password */}
                  <div className="inv-fade-up inv-fade-up-d3">
                    <PasswordInput
                      id="inv-password"
                      label="Create Password"
                      value={password}
                      onChange={(v) => { setPassword(v); clearError("password"); }}
                      error={fieldErrors.password}
                      placeholder="Min. 8 characters"
                      autoComplete="new-password"
                      disabled={isLoading}
                      hint={<StrengthBar value={password} />}
                    />
                  </div>

                  {/* confirm password */}
                  <div className="inv-fade-up inv-fade-up-d4">
                    <PasswordInput
                      id="inv-confirm-password"
                      label="Confirm Password"
                      value={confirmPassword}
                      onChange={(v) => { setConfirmPassword(v); clearError("confirm"); }}
                      error={fieldErrors.confirm}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      disabled={isLoading}
                    />
                  </div>

                  {/* submit */}
                  <div className="inv-fade-up inv-fade-up-d5" style={{ paddingTop: 4 }}>
                    <button
                      id="inv-submit-btn"
                      type="submit"
                      disabled={isLoading || !hasToken}
                      className="inv-btn-primary"
                    >
                      {isLoading ? (
                        <>
                          <span className="inv-spinner" />
                          Activating your account…
                        </>
                      ) : (
                        <>
                          Accept Invitation
                          <IconArrowRight />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* mobile breakpoint */}
      <style>{`
        @media (max-width: 768px) {
          .inv-root > div:first-child {
            display: none !important;
          }
          .inv-root {
            grid-template-columns: 1fr !important;
          }
          .inv-root > div:last-child {
            padding: 40px 24px !important;
            min-height: 100vh;
          }
        }
      `}</style>
    </>
  );
}

/* ─── export with Suspense boundary ─────────────────────────────────────── */
export default function AcceptInvitationPage() {
  return (
    <Suspense
      fallback={
        <div style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #12090a, #2b1b1e)",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "3px solid rgba(219,74,109,0.25)",
            borderTopColor: "#db4a6d",
            animation: "inv-spin 0.7s linear infinite",
          }} />
          <style>{`@keyframes inv-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      }
    >
      <AcceptInvitationForm />
    </Suspense>
  );
}