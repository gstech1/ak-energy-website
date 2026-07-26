"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/product-hero1-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-10/75" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

        {/* Left */}
        <div>
          {/* Breadcrumb */}
          <div className="mb-25 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <span>/</span>

            <Link href="/products" className="hover:text-white">
              Products
            </Link>
          </div>

          {/* Company */}
          <div className="flex items-center gap-4">

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
              <h2 className="text-3xl font-bold text-white">
                ARKAR MIN THUKHA
              </h2>

              <p className="text-base tracking-widest text-green-300">
                ELECTRO TRADING CO., LTD.
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Official Distributor of SUNTREE in Myanmar
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}