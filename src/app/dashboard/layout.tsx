"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const INACTIVITY_LIMIT = 10 * 1000; // 10 minutes

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [checking, setChecking] =
    useState(true);

  useEffect(() => {
    const token = localStorage.getItem(
      "management_access_token",
    );

    if (!token) {
      router.replace("/management");
      return;
    }

    setChecking(false);

    let inactivityTimer: ReturnType<
      typeof setTimeout
    >;

    const logout = () => {
      localStorage.removeItem(
        "management_access_token",
      );

      router.replace("/management");
    };

    const resetTimer = () => {
      clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(
        logout,
        INACTIVITY_LIMIT,
      );
    };

    const activityEvents = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    activityEvents.forEach((event) => {
      window.addEventListener(
        event,
        resetTimer,
      );
    });

    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);

      activityEvents.forEach((event) => {
        window.removeEventListener(
          event,
          resetTimer,
        );
      });
    };
  }, [router]);

  function handleLogout() {
    localStorage.removeItem(
      "management_access_token",
    );

    router.replace("/management");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-sm text-slate-500">
          Checking access...
        </p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            AK Energy Management
          </p>

          <p className="text-xs text-slate-400">
            Website CMS
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
        >
          Logout
        </button>
      </header>

      {children}
    </div>
  );
}