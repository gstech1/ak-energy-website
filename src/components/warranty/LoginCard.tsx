"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, User, X, Phone, Mail, MessageCircle } from "lucide-react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <div className="relative -mt-24 z-20">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">

            {/* Header */}
            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Lock className="h-10 w-10 text-green-600" />
              </div>

              <p className="mt-6 text-3x1 font-semibold uppercase tracking-[0.2em] text-green-600">
                Secure Access
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Sign In
              </h2>

              <p className="mt-3 text-slate-600">
                Sign in to access the Suntree Warranty Management System.
              </p>

            </div>

            {/* Form */}
            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  User ID
                </label>

                <div className="flex items-center rounded-xl border border-slate-300 px-4">
                  <User className="h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter User ID"
                    className="w-full border-none bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-slate-300 px-4">
                  <Lock className="h-5 w-5 text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full border-none bg-transparent px-3 py-4 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-500" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  onClick={() => setShowHelp(true)}
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Sign In
              </button>

            </form>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-center">

              <p className="text-sm text-slate-600">
                Need a New Account or Forgot Your Password?
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Please contact your System Administrator.
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">

          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <button
              onClick={() => setShowHelp(false)}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Lock className="h-10 w-10 text-red-600" />
            </div>

            <h2 className="mt-6 text-center text-3xl font-bold text-slate-900">
              Need Help?
            </h2>

            <p className="mt-4 text-center leading-7 text-slate-600">
              If you need a new account or have forgotten your password,
              please contact your System Administrator or
              Arkar Min Thukha Electro Trading Co., Ltd.
            </p>

            <div className="mt-8 space-y-3">

              <a
                href="tel:+95 9 880 941 715"
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
              >
                <Phone className="h-5 w-5 text-green-600" />
                <span>Call Support</span>
              </a>

              <a
                href="https://t.me/YOUR_TELEGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
              >
                <MessageCircle className="h-5 w-5 text-sky-500" />
                <span>Telegram Support</span>
              </a>

              <a
                href="mailto:support@suntreemyanmar.com"
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span>Email Support</span>
              </a>

            </div>

            <button
              onClick={() => setShowHelp(false)}
              className="mt-8 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}