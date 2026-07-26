import Link from "next/link";

export default function HeroContent() {
  return (
    <>
      {/* Badge */}

      <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-wider text-white">
          SUNTREE AUTHORIZED DISTRIBUTOR • MYANMAR
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
        Powering
        <br />
        <span className="text-amber-400">Myanmar&apos;s Future</span>
        <br />
        With Clean Energy
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
        ArkarMinThuKha Energy is Myanmar&apos;s trusted provider of solar power systems,
        circuit protection devices, battery backup solutions and nationwide
        digital warranty management for residential, commercial and industrial
        customers.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          href="#contact"
          className="rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-slate-900 transition hover:bg-amber-300"
        >
          Contact Us
        </Link>

        <Link
          href="#projects"
          className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
        >
          View Projects
        </Link>
      </div>

      {/* Features */}

      <div className="mt-12 flex flex-wrap gap-8 text-sm text-white">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
          Authorized Suntree Distributor
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-amber-400"></span>
          Genuine Products
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-sky-400"></span>
          Nationwide Warranty Support
        </div>
      </div>
    </>
  );
}