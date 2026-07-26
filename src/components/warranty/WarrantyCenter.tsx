import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function WarrantyCenter() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="container mx-auto px-6">

        <div className="overflow-hidden rounded-[40px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 shadow-2xl">

          <div className="grid items-center gap-16 p-12 lg:grid-cols-2 lg:p-16">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

                <ShieldCheck className="h-5 w-5 text-green-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Warranty Management
                </span>

              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Dealer Portal
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Access the Suntree Warranty Management System (SWMS) to
                register warranties, verify genuine products, manage customer
                records, and provide professional after-sales support.
              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">
                    Register Product Warranty
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">
                    Verify Genuine Products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">
                    Warranty Tracking & Customer Records
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">
                    Nationwide Authorized Dealer Network
                  </span>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15">

                <LockKeyhole className="h-10 w-10 text-green-400" />

              </div>

              <h3 className="mt-8 text-center text-3xl font-bold text-white">
                Secure Dealer Access
              </h3>

              <p className="mt-5 text-center leading-8 text-slate-300">
                This portal is exclusively for authorized dealers and company
                staff to access the Suntree Warranty Management System.
              </p>

              <Link
                href="/warranty"
                className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                Access Dealer Portal
                <ArrowRight size={20} />
              </Link>

              <p className="mt-6 text-center text-sm text-slate-400">
                Need a dealer account?
                <br />
                Contact Arkar Min Thukha Electro Trading Co., Ltd.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}