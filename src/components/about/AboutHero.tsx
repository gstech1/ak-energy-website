import Link from "next/link";
import Image from "next/image";

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export default function AboutHero({
  title,
  subtitle,
}: AboutHeroProps) {
  return (<section className="bg-gradient-to-r from-slate-950 via-slate-800 to-blue-900 py-24 text-white">
    
      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <Link href="/#about" className="transition hover:text-white">
           ABOUT TEST
          </Link>

          <span>/</span>

          <span className="text-white">{title}</span>
        </div>

        {/* Company */}
        <div className="flex items-center gap-6">

          <div className="rounded-3xl bg-white/95 p-3 shadow-2xl backdrop-blur">
            <Image
              src="/images/logo/ak-logo2.png"
              alt="Arkar Min Thuka Electro Trading Co., Ltd."
              width={85}
              height={85}
              priority
              className="h-20 w-20 object-contain"
            />
          </div>

          <div>
            <h2 className="text-5xl font-black leading-tight tracking-tight">
              Arkar Min Thuka
            </h2>

            <p className="mt-2 text-2xl font-semibold text-pink-200">
              Electro Trading Co., Ltd.
            </p>
          </div>

        </div>

        {/* Page Title */}
        <h1 className="mt-10 text-6xl font-black leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
          {subtitle}
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white hover:text-slate-900"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}