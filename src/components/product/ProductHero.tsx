"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductHeroProps {
  backgroundImage: string;
}

export default function ProductHero({
  backgroundImage,
}: ProductHeroProps) {
  return (
    <section className="relative h-[320px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/35" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="absolute left-4 top-5 flex items-center gap-2 text-sm text-slate-300 sm:left-6 sm:top-8">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <Link href="/products" className="transition hover:text-white">
            Products
          </Link>
        </div>

        {/* Company */}
        <div className="mt-10 flex w-full flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          {/* Logos */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-6">
            <Image
              src="/images/logo/ak-logo2.png"
              alt="AK"
              width={120}
              height={58}
              className="w-[82px] rounded-lg bg-white p-1 sm:w-[120px]"
              priority
            />

            <Image
              src="/images/logo/suntree-logo.png"
              alt="Suntree"
              width={170}
              height={40}
              className="w-[115px] rounded-lg bg-white px-2 py-1 sm:w-[170px]"
              priority
            />
          </div>

          {/* Company Text */}
          <div className="min-w-0">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              ARKAR MIN THUKHA
            </h2>

            <p className="mt-1 text-[11px] tracking-[0.16em] text-green-300 sm:mt-2 sm:text-lg sm:tracking-[0.25em]">
              ELECTRO TRADING CO., LTD.
            </p>

            <p className="mt-1 text-xs text-slate-300 sm:mt-2 sm:text-sm">
              Official Distributor of SUNTREE in Myanmar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}