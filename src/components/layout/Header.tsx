"use client";

import Image from "next/image";
import Link from "next/link";

const menus = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">

        {/* Left */}
        <Link
          href="/"
          className="flex items-center gap-6 shrink-0"
        >
          <Image
            src="/images/logo/ak-logo.png"
            alt="Arkar Min Thuka"
            width={110}
            height={110}
            priority
            className="h-20 w-auto object-contain"
          />

          <div className="min-w-[330px]">
            <h1 className="whitespace-nowrap text-[32px] font-black leading-none tracking-tight text-slate-900">
              ARKAR MIN THU KHA
            </h1>

            <p className="mt-1 text-[20px] text-slate-500">
              Electro Trading Co., Ltd.
            </p>
          </div>
        </Link>

        {/* Center */}
        <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex">
          {menus.map((item) => {
  if (item.name === "Home") {
    return (
      <button
        key={item.name}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="text-[16px] font-semibold text-slate-700 transition hover:text-green-700"
      >
        Home
      </button>
    );
  }

  return (
    <Link
      key={item.name}
      href={item.href}
      className="text-[16px] font-semibold text-slate-700 transition hover:text-green-700"
    >
      {item.name}
    </Link>
  );
})}
        </nav>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-8">

          <Image
            src="/images/logo/suntree-logo.png"
            alt="Suntree Myanmar"
            width={180}
            height={60}
            className="h-25 w-auto object-contain"
          />

          <Link
            href="/warranty"
            className="rounded-xl bg-green-700 px-8 py-4 text-[16px] font-bold text-white transition hover:bg-green-800"
          >
            Warranty Center
          </Link>

        </div>

      </div>
    </header>
  );
}