import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LoginCard from "./LoginCard";

export default function WarrantyHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/warranty/warranty-bg.png"
          alt="Warranty Center"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/50" />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid min-h-[620px] items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="max-w-3xl">

            {/* Logo */}
            <div className="mb-8 inline-flex rounded-2xl border border-white/30 bg-white px-8 py-5 shadow-2xl">
              <Image
                src="/images/logo/suntree-logo.png"
                alt="Suntree"
                width={220}
                height={70}
                priority
              />
            </div>

            <span className="inline-flex rounded-full bg-green-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Official Warranty Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              SuntreeMyanmar
            </h1>

            <p className="mt-4 text-4xl font-bold text-green-400">
              Warranty Management System
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
              Secure access for authorized users to register product
              warranties, verify genuine Suntree products, manage customer
              warranty records and provide professional after-sales service
              throughout Myanmar.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Genuine Product Verification
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white">Nationwide</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Authorized Dealer Network
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white">Secure</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Login Protection
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <LoginCard />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}