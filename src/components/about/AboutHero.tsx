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
    <section className="relative overflow-hidden py-24 text-white">
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <div>
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-300">
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
          <div className="flex items-center gap-8">
            {/* Logos */}
            <div className="flex items-center gap-5">
              <div className="rounded-3xl bg-white/95 p-3 shadow-2xl backdrop-blur">
                <Image
                  src="/images/logo/ak-logo2.png"
                  alt="AK Logo"
                  width={85}
                  height={85}
                  priority
                  className="h-20 w-25 object-contain"
                />
              </div>

              <div className="rounded-3xl bg-white/95 px-2 py-3 shadow-2xl backdrop-blur">
                <Image
                  src="/images/logo/suntree-logo.png"
                  alt="Suntree Logo"
                  width={150}
                  height={100}
                  priority
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white">
                ARKAR MIN THUKHA
              </h2>

              <p className="mt-2 text-1xl font-semibold tracking-[0.28em] text-green-300">
                ELECTRO TRADING CO., LTD.
              </p>

              <p className="mt-3 text-base text-slate-200">
                Official Distributor of SUNTREE in Myanmar
              </p>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="mt-14 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-6xl font-black leading-tight text-transparent">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-100">
            {subtitle}
          </p>
        </div>

        
      </div>
    </section>
  );
}