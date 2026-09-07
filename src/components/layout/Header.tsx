"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menus = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      return;
    }

    if (window.location.hash !== "#about") {
      return;
    }

    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const headerOffset = 96;

        const targetPosition =
          aboutSection.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "auto",
        });

        attempts += 1;

        // Run again while the page is still settling/loading.
        if (attempts < 10) {
          timer = setTimeout(scrollToAbout, 300);
        }

        return;
      }

      attempts += 1;

      if (attempts < 20) {
        timer = setTimeout(scrollToAbout, 200);
      }
    };

    timer = setTimeout(scrollToAbout, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleHomeClick = () => {
    setMobileMenuOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.location.href = "/";
  };

  const handleAboutClick = () => {
    setMobileMenuOpen(false);

    if (window.location.pathname === "/") {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const headerOffset = 96;

        const targetPosition =
          aboutSection.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });
      }

      return;
    }

    window.location.href = "/#about";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        {/* Left */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex min-w-0 shrink items-center gap-3 sm:gap-4 lg:gap-6"
        >
          <Image
            src="/images/logo/ak-logo.png"
            alt="Arkar Min Thuka"
            width={110}
            height={110}
            priority
            className="h-14 w-auto shrink-0 object-contain sm:h-16 lg:h-20"
          />

          <div className="min-w-0 lg:min-w-[330px]">
            <h1 className="truncate text-[18px] font-black leading-none tracking-tight text-slate-900 sm:text-[24px] lg:whitespace-nowrap lg:text-[32px]">
              ARKAR MIN THU KHA
            </h1>

            <p className="mt-1 truncate text-[12px] text-slate-500 sm:text-[15px] lg:text-[20px]">
              Electro Trading Co., Ltd.
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex">
          {menus.map((item) => {
            if (item.name === "Home") {
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={handleHomeClick}
                  className="text-[16px] font-semibold text-slate-700 transition hover:text-green-700"
                >
                  Home
                </button>
              );
            }

            if (item.name === "About") {
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={handleAboutClick}
                  className="text-[16px] font-semibold text-slate-700 transition hover:text-green-700"
                >
                  About
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

        {/* Right - Desktop */}
        <div className="hidden shrink-0 items-center gap-8 lg:flex">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 lg:hidden"
        >
          <span className="text-2xl leading-none">
            {mobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6">
            <div className="flex flex-col">
              {menus.map((item) => {
                if (item.name === "Home") {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={handleHomeClick}
                      className="border-b border-slate-100 px-2 py-3 text-left text-sm font-semibold text-slate-700 transition hover:text-green-700"
                    >
                      Home
                    </button>
                  );
                }

                if (item.name === "About") {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={handleAboutClick}
                      className="border-b border-slate-100 px-2 py-3 text-left text-sm font-semibold text-slate-700 transition hover:text-green-700"
                    >
                      About
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-slate-100 px-2 py-3 text-sm font-semibold text-slate-700 transition hover:text-green-700"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/warranty"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 rounded-xl bg-green-700 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-800"
              >
                Warranty Center
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}