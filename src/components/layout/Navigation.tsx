// ==========================================
// SECTION 1 - IMPORTS
// ==========================================

"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ChevronDown, Menu } from "lucide-react";

// ==========================================
// SECTION 2 - DATA
// ==========================================

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const warrantyItems = [
  {
    name: "Verify Warranty",
    href: "/warranty",
  },
  {
    name: "Dealer Login",
    href: "/dealer-login",
  },
  {
    name: "Warehouse Login",
    href: "/warehouse-login",
  },
  {
    name: "Warranty Policy",
    href: "/warranty/policy",
  },
];

// ==========================================
// SECTION 3 - COMPONENT
// ==========================================

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Arkar Min Thu Kha"
            width={55}
            height={55}
            priority
          />

          <div className="hidden md:block leading-tight">
            <h2 className="font-bold text-lg text-green-900">
              Arkar Min Thu Kha
            </h2>

            <p className="text-xs text-gray-500">
              Electro Trading Co., Ltd.
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 hover:text-green-700 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Warranty Dropdown */}

          <div className="relative group">

            <button
              className="
                flex items-center gap-2
                rounded-lg
                bg-green-700
                px-5
                py-2.5
                text-white
                font-semibold
                hover:bg-green-800
                transition
              "
            >
              <ShieldCheck size={18} />

              Warranty Center

              <ChevronDown size={16} />
            </button>

            <div
              className="
                invisible
                absolute
                right-0
                mt-3
                w-64
                rounded-xl
                bg-white
                shadow-xl
                opacity-0
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
              "
            >
              {warrantyItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    border-b
                    border-gray-100
                    px-5
                    py-3
                    text-gray-700
                    hover:bg-green-50
                    hover:text-green-700
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>

        </nav>

        {/* Mobile Button */}

        <button
          className="
            lg:hidden
            rounded-lg
            border
            p-2
          "
        >
          <Menu />
        </button>

      </div>

    </header>
  );
}