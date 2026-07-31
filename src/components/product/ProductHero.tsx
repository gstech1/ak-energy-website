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
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Breadcrumb */}
        <div className="absolute left-6 top-8 flex items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <Link href="/products" className="transition hover:text-white">
            Products
          </Link>
        </div>

        {/* Company */}
        <div className="mt-10 flex items-center gap-6">
          <Image
            src="/images/logo/ak-logo2.png"
            alt="AK"
            width={120}
            height={58}
            className="rounded-lg bg-white p-1"
            priority
          />

          <Image
            src="/images/logo/suntree-logo.png"
            alt="Suntree"
            width={170}
            height={40}
            className="rounded-lg bg-white px-2 py-1"
            priority
          />

          <div>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              ARKAR MIN THUKHA
            </h2>

            <p className="mt-2 text-lg tracking-[0.25em] text-green-300">
              ELECTRO TRADING CO., LTD.
            </p>

            <p className="mt-2 text-sm text-slate-300">
              Official Distributor of SUNTREE in Myanmar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}