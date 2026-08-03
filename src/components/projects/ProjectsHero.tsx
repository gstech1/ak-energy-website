import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="/images/projects/projects-bg.png"
        alt="Projects Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/35" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>

          {/* Company */}
          <div className="mb-10 flex items-center gap-6">
            <div className="rounded-3xl bg-white p-4 shadow-2xl">
              <Image
                src="/images/logo/ak-logo2.png"
                alt="Arkar Min Thukha"
                width={90}
                height={90}
              />
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-white">
                Arkar Min Thukha
              </h3>

              <p className="mt-2 text-xl text-slate-200">
                Electro Trading Co., Ltd.
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-7xl font-black leading-none text-white">
            Our <span className="text-green-400">Projects</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-2xl leading-10 text-slate-100">
            Explore our completed solar energy, electrical and backup power
            projects across Myanmar. Every installation demonstrates our
            commitment to quality, safety and reliable long-term performance.
          </p>

          {/* Stats */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/20 bg-slate-900/45 p-6 backdrop-blur-xl">
              <BriefcaseBusiness className="h-10 w-10 text-green-400" />
              <h4 className="mt-4 text-4xl font-extrabold text-white">
                500+
              </h4>
              <p className="mt-2 text-base text-slate-200">
                Projects Completed
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-slate-900/45 p-6 backdrop-blur-xl">
              <MapPin className="h-10 w-10 text-green-400" />
              <h4 className="mt-4 text-4xl font-extrabold text-white">
                Myanmar
              </h4>
              <p className="mt-2 text-base text-slate-200">
                Nationwide Coverage
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-slate-900/45 p-6 backdrop-blur-xl">
              <Zap className="h-10 w-10 text-green-400" />
              <h4 className="mt-4 text-4xl font-extrabold text-white">
                15000kW+
              </h4>
              <p className="mt-2 text-base text-slate-200">
                Installed Capacity
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-slate-900/45 p-6 backdrop-blur-xl">
              <ShieldCheck className="h-10 w-10 text-green-400" />
              <h4 className="mt-4 text-4xl font-extrabold text-white">
                100%
              </h4>
              <p className="mt-2 text-base text-slate-200">
                Quality Commitment
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap gap-5">
            <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
             ← Back to Home
            </Link>
                                
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}