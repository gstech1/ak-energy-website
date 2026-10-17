"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/charger/26.png", alt: "Suntree home charger with an electric vehicle" },
  { src: "/images/charger/27.png", alt: "Suntree charger in a city setting" },
  { src: "/images/charger/28.png", alt: "Suntree public charging station" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[650px] overflow-hidden bg-[#07150f] text-white sm:min-h-[700px]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-[1400ms] ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(4,17,13,.88)_0%,rgba(4,17,13,.72)_34%,rgba(4,17,13,.24)_73%,rgba(4,17,13,.35)_100%)]" />
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(0deg,rgba(3,16,11,.88)_0%,transparent_38%,rgba(4,17,13,.12)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-center px-6 pb-7 pt-12 sm:min-h-[700px] sm:px-10 lg:px-16">
        <div className="max-w-[700px]">
          <div className="mb-4 h-[140px] w-[210px] rounded-2xl bg-white p-2.5 shadow-xl sm:h-[160px] sm:w-[240px] sm:p-3">
            <span
              className="block h-full w-full bg-right bg-no-repeat"
              role="img"
              aria-label="Suntree Charger Myanmar logo"
              style={{ backgroundImage: "url('/images/logo/suntree-myanmar-pair.png')", backgroundSize: "200% 100%" }}
            />
          </div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-slate-900/45 px-4 py-2 shadow-lg backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-white sm:text-xs">Suntree Charger Myanmar</span>
          </div>
          <h1 className="text-5xl font-black leading-[.98] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">Arkar Min Thuka</h1>
          <p className="mt-4 text-2xl font-extrabold text-emerald-300 sm:text-3xl">EV Charging Solutions</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">Explore Suntree charging options for home, business and public use, with product guidance and support from our Myanmar team.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#chargers" className="rounded-full bg-[#00a66a] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#008b59]">Explore charger range ↓</a>
            <a href="#contact" className="rounded-full border border-white/55 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20">Contact our team</a>
          </div>
        </div>

        <div className="mt-8 flex max-w-[650px] items-center justify-between gap-2 border-y border-white/35 py-4 text-[9px] font-bold text-white/95 sm:text-sm">
          <a href="https://arkarminthukha.com.mm" target="_blank" rel="noreferrer" className="whitespace-nowrap underline decoration-white/50 underline-offset-4 transition hover:text-emerald-200">https://arkarminthukha.com.mm</a>
          <a href="https://suntreemyanmar.com/" target="_blank" rel="noreferrer" className="whitespace-nowrap underline decoration-white/50 underline-offset-4 transition hover:text-emerald-200">https://suntreemyanmar.com/</a>
        </div>

        <div className="mt-5 grid max-w-[650px] grid-cols-3">
          <div className="flex items-baseline gap-2"><b className="text-xl font-black sm:text-2xl">05</b><span className="text-[10px] font-bold sm:text-xs">Charger series</span></div>
          <div className="flex items-baseline gap-2"><b className="text-xl font-black sm:text-2xl">09</b><span className="text-[10px] font-bold sm:text-xs">Listed models</span></div>
          <div className="flex items-baseline gap-2"><b className="text-xl font-black sm:text-2xl">40 kW</b><span className="text-[10px] font-bold sm:text-xs">Listed DC model</span></div>
        </div>
      </div>
    </section>
  );
}
