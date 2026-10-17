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
  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-24">
      {/* Background */}
      <Image
        src="/images/about/hero/about.png"
        alt="About Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/65" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:text-sm">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <Link href="/#about" className="transition hover:text-white">
            ABOUT US
          </Link>

          <span>/</span>

          <span className="text-white">{title}</span>
        </div>

        {/* Company */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Logos */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <div className="rounded-2xl bg-white/95 p-2 shadow-2xl backdrop-blur sm:rounded-3xl sm:p-3">
              <Image
                src="/images/logo/ak-logo2.png"
                alt="AK Logo"
                width={85}
                height={85}
                priority
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
            </div>

            <div className="rounded-2xl bg-white/95 px-2 py-2 shadow-2xl backdrop-blur sm:rounded-3xl sm:px-2 sm:py-3">
              <Image
                src="/images/logo/suntree-logo.png"
                alt="Suntree Logo"
                width={150}
                height={100}
                priority
                className="h-16 w-auto object-contain sm:h-20"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="min-w-0">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-3xl">
              ARKAR MIN THUKHA
            </h2>

            <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-green-300 sm:text-base sm:tracking-[0.28em]">
              ELECTRO TRADING CO., LTD.
            </p>

            <p className="mt-2 text-sm text-slate-200 sm:mt-3 sm:text-base">
              Official Distributor of SUNTREE in Myanmar
            </p>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="mt-10 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-4xl font-black leading-tight text-transparent sm:mt-14 sm:text-6xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-100 sm:mt-6 sm:text-xl sm:leading-9">
          {subtitle}
        </p>
      </div>
    </section>
  );
}