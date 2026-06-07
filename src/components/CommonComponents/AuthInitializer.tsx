"use client";

import { useGetProfileQuery } from "@/redux/features/auth/authApi";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

/**
 * AuthInitializer — runs on every page load for authenticated users.
 *
 * When a token is present in the Redux store (synchronously rehydrated from
 * localStorage by StoreProvider), this component calls GET /api/auth/profile/
 * once. The existing `onQueryStarted` handler in `getProfile` automatically
 * dispatches `updateUser(data.data.user)`, writing the full user object
 * (including `profile_image`) into Redux.
 *
 * This means:
 *  - NavBar immediately shows the profile image after login.
 *  - After the user uploads a new photo in Settings and saves, the mutation
 *    invalidates the "User" tag → RTK Query refetches → avatar updates everywhere.
 *
 * This component renders nothing (null). Place it once inside StoreProvider
 * in the root layout so it covers every route group.
 */
export default function AuthInitializer() {
  const token = useAppSelector(selectCurrentToken);

  // skip = true when no token → no network call, no errors
  useGetProfileQuery(undefined, { skip: !token });

  return null;
}
