import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PublicWarrantyCheckCard from "./PublicWarrantyCheckCard";

const highlights = [
  { title: "Public", detail: "Check a serial number" },
  { title: "Instant", detail: "View warranty status" },
  { title: "Official", detail: "Suntree Myanmar service" },
];

export default function WarrantyHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/images/warranty/warranty-bg.png"
          alt="Solar panel installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/65" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid items-start gap-10 py-8 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] lg:gap-14 lg:py-5">
          <div className="order-2 max-w-3xl lg:order-1 lg:pt-16">
            <div className="mb-7 inline-flex rounded-2xl border border-white/30 bg-white px-7 py-4 shadow-2xl">
              <Image
                src="/images/logo/suntree-logo.png"
                alt="Suntree Myanmar"
                width={220}
                height={70}
                priority
                className="h-auto w-[190px] object-contain"
              />
            </div>

            <span className="inline-flex rounded-full bg-green-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Official Warranty Platform
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              SuntreeMyanmar
            </h1>
            <p className="mt-3 text-3xl font-bold text-green-400 sm:text-4xl">
              Warranty Center
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Check a product&apos;s warranty by entering or scanning its serial
              number. Dealers can also verify products here, and sign in only
              when they need dealer services.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <h2 className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <PublicWarrantyCheckCard />
          </div>
        </div>
      </div>
    </section>
  );
}
