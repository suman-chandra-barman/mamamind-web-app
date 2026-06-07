"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import { setCredentials } from "@/redux/features/auth/authSlice";

/**
 * Reads auth state from localStorage synchronously and returns it.
 * Returns null if nothing is stored or if parsing fails.
 */
function readStoredAuth() {
  if (typeof window === "undefined") return null;

  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userRaw = localStorage.getItem("user");

    if (accessToken && refreshToken && userRaw) {
      return {
        user: JSON.parse(userRaw),
        tokens: { access: accessToken, refresh: refreshToken },
      };
    }
  } catch {
    // Malformed storage — fall through and return null
  }

  return null;
}

/**
 * StoreProvider initializes the Redux store and synchronously hydrates the
 * auth slice from localStorage BEFORE the first render.
 *
 * Why synchronous? The store is created with `makeStore()`, then we immediately
 * dispatch `setCredentials` (if stored credentials exist) before returning the
 * Provider. This means every child component — including those that fire API
 * calls on mount — already sees the correct token in `state.auth.token`.
 *
 * This eliminates the classic race condition where:
 *   1. Redux store starts empty (token = null)
 *   2. useEffect rehydration fires AFTER the first render
 *   3. API calls triggered on mount see no token → 401 Unauthorized
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Step 1: Create the store
    storeRef.current = makeStore();

    // Step 2: Synchronously hydrate auth state from localStorage.
    // This runs during the render phase (before painting), so all children
    // will see the token on their very first render.
    const storedAuth = readStoredAuth();
    if (storedAuth) {
      storeRef.current.dispatch(setCredentials(storedAuth));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
