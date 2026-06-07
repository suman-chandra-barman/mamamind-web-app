"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

interface AuthGateProps {
  children: React.ReactNode;
}

/**
 * AuthGate – renders children only after client-side hydration has occurred
 * and the auth state is available.
 *
 * Because StoreProvider now pre-populates the Redux store *synchronously* from
 * localStorage before the first render, the token will already be present in
 * the store when this component mounts. As a result:
 *
 * - If the user IS authenticated → children render immediately on mount with
 *   NO flash of unauthorized API calls.
 * - If the user is NOT authenticated → they are redirected to /login.
 *
 * The `isMounted` guard exists purely to skip the server-render pass where
 * localStorage doesn't exist, preventing a React hydration mismatch.
 */
export default function AuthGate({ children }: AuthGateProps) {
  const [isMounted, setIsMounted] = useState(false);
  const token = useAppSelector(selectCurrentToken);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR or before client hydration — render nothing to avoid mismatch
  if (!isMounted) {
    return null;
  }

  // Client is ready but no token found in store or localStorage
  if (!token) {
    router.replace("/login");
    return null;
  }

  return <>{children}</>;
}
