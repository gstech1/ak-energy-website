import Image from "next/image";
import Hero from "./hero";

const chargerFamilies = [
  {
    no: "01",
    series: "SSJ2E",
    category: "DC fast charger",
    power: "40 kW",
    variants: "1 model · Item 1",
    image: "/images/charger/44.png",
    alt: "Suntree SSJ2E DC charger series",
    summary: "A higher-power DC charging option for commercial and destination sites.",
    specs: ["DC output: 7–40 kW product range", "Output voltage: 200–750 / 1000 V", "IP54 protection · CE marking"],
    source: "https://www.chinasuntree.com/dc-ev-charger/ev-charger-ssj-2e.htm",
  },
  {
    no: "02",
    series: "SWJ3E",
    category: "AC wallbox / pedestal",
    power: "7 / 22 kW",
    variants: "2 models · Items 2–3",
    image: "/images/charger/46.png",
    alt: "Suntree SWJ3E AC wallbox charger",
    summary: "A compact AC family for home and commercial charging, with wallbox and pedestal formats.",
    specs: ["Manufacturer range: 7 / 11 / 22 kW", "Type 2 or GB/T connector options", "IP65 · RFID / app options · OCPP 1.6 optional"],
    source: "https://www.chinasuntree.com/wallbox-type/mini-ev-charger.htm",
  },
  {
    no: "03",
    series: "SWG5E",
    category: "LCD AC wallbox",
    power: "7 / 11 / 22 kW",
    variants: "3 models · Items 4–6",
    image: "/images/charger/49.png",
    alt: "Suntree SWG5E LCD wallbox charger",
    summary: "A connected wallbox series with a display, remote controls and a pedestal option.",
    specs: ["Single-phase 7 kW · three-phase 11 / 22 kW", "4.3-inch display · RFID / app options", "IP65 wallbox · OCPP 1.6 optional"],
    source: "https://www.chinasuntree.com/wallbox-type/lcd-type-ev-charger-7kw.htm",
  },
  {
    no: "04",
    series: "SPG3E",
    category: "Portable AC charger",
    power: "7 kW",
    variants: "1 model · Item 7",
    image: "/images/charger/53.png",
    alt: "Suntree SPG3E portable EV charger",
    summary: "A portable charger designed for flexible everyday charging and easy transport.",
    specs: ["Manufacturer range: 3.5 / 7 kW", "2.8-inch display · app charging", "IP65 · automatic stop at full charge"],
    source: "https://www.chinasuntree.com/portable-ev-charger/portable-ev-charger-357kw.htm",
  },
  {
    no: "05",
    series: "SPJ2E",
    category: "Portable AC charger",
    power: "11 / 22 kW",
    variants: "2 models · Items 8–9",
    image: "/images/charger/52.png",
    alt: "Suntree SPJ2E portable EV charger",
    summary: "A portable charging family with adjustable output and plug-in charging.",
    specs: ["Manufacturer page specifies SPJ2E-22 at 22 kW", "380 V three-phase · Type 2 connector", "5 m cable · IP54 protection"],
    source: "https://www.chinasuntree.com/portable-ev-charger/cargador-ev-porttil-spj2.htm",
  },
  {
    no: "06",
    series: "Type 2 → GB/T Adapter",
    category: "Charging accessory",
    power: "Accessory",
    variants: "Accessory · outside the 5 series / 9 models",
    image: "/images/charger/51.png",
    alt: "Type 2 to GB/T EV charging adapter",
    summary: "A connector adapter shown in your product image. Confirm vehicle and charger compatibility with our team before use.",
    specs: ["Type 2 to GB/T, as labeled on the supplied product image", "Compatibility can vary by vehicle and charger", "Contact us to confirm the right adapter"],
  },
];

const aboutCards = [
  {
    title: "Company Profile",
    href: "/about/company-profile",
    description: "Learn more about Arkar Min Thuka Electro Trading Co., Ltd.",
    image: "/images/trust/company-profile.png",
    alt: "Company profile illustration",
  },
  {
    title: "Vision & Mission",
    href: "/about/vision-mission",
    description: "Our vision, mission and core values.",
    image: "/images/trust/vision-mission.png",
    alt: "Vision and mission illustration",
  },
  {
    title: "Authorized Distributor",
    href: "/about/authorized-distributor",
    description: "Official distributor and trusted business partner.",
    image: "/images/trust/authorized.png",
    alt: "Authorized distributor illustration",
  },
  {
    title: "Certifications",
    href: "/about/certifications",
    description: "Company certificates and official documents.",
    image: "/images/trust/certifications.png",
    alt: "Certificates and official documents illustration",
  },
];

const trustCards = [
  {
    title: "Authorized Distributor",
    href: "/about/authorized-distributor",
    description: "Official Suntree distributor providing genuine electrical protection products.",
    image: "/images/trust/why-1.png",
    alt: "Authorized distributor support",
  },
  {
    title: "Warranty Policy",
    href: "/warranty-policy",
    description: "Learn about warranty coverage, terms, conditions and claim procedures for all genuine Suntree products.",
    image: "/images/trust/why-2.png",
    alt: "Warranty policy support",
  },
  {
    title: "Professional Team",
    href: "/#contact",
    description: "Experienced engineers and technical specialists ready to support your projects.",
    image: "/images/trust/why-3.png",
    alt: "Professional technical team",
  },
  {
    title: "Technical Support",
    href: "/#contact",
    description: "Fast after-sales service and nationwide customer support.",
    image: "/images/trust/why-4.png",
    alt: "Technical support illustration",
  },
];

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`} role="img" aria-label="Suntree Charger Myanmar logo">
      <span
        className="absolute inset-0 bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/logo/suntree-myanmar-pair.png')", backgroundSize: "200% 100%" }}
      />
    </span>
  );
}

function PhotoCards({ cards, columns = "" }: { cards: typeof aboutCards; columns?: string }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-4 ${columns}`}>
      {cards.map((card) => (
        <a key={card.title} href={card.href} className="group block overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(11,35,25,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,35,25,.13)] focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
          <div className="relative aspect-[1.12/1] overflow-hidden bg-[#f2f6f5]">
            <Image src={card.image} alt={card.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]" />
          </div>
          <div className="min-h-[166px] bg-[#f7f9fb] p-6">
            <h3 className="text-xl font-extrabold leading-tight text-[#101b31]">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#101b31]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex min-h-[82px] max-w-[1440px] flex-wrap items-center justify-between gap-x-4 px-4 sm:px-7 lg:flex-nowrap lg:px-10">
          <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Arkar Min Thu Kha home">
            <Image src="/images/logo/ak-logo1.png" alt="AK logo" width={76} height={58} priority className="h-11 w-[54px] shrink-0 object-contain sm:h-[58px] sm:w-[72px]" />
            <span className="min-w-0 leading-tight text-[#101b31]"><span className="block truncate text-[10px] font-black uppercase tracking-[.04em] sm:text-[15px] sm:tracking-[.07em]">ARKAR MIN THU KHA</span><span className="mt-1 block truncate text-[10px] text-slate-500 sm:text-sm">Electro Trading Co., Ltd.</span></span>
          </a>
          <nav className="order-3 -mx-1 flex w-full gap-6 overflow-x-auto border-t border-slate-100 px-1 py-3 text-xs font-semibold text-slate-600 sm:gap-8 sm:text-sm lg:order-none lg:mx-0 lg:w-auto lg:overflow-visible lg:border-0 lg:py-0" aria-label="Page sections">
            <a className="shrink-0 transition hover:text-emerald-700" href="#home">Home</a>
            <a className="shrink-0 transition hover:text-emerald-700" href="#chargers">Products</a>
            <a className="shrink-0 transition hover:text-emerald-700" href="#about">About</a>
            <a className="shrink-0 transition hover:text-emerald-700" href="#contact">Contact</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <BrandLogo className="h-[52px] w-[78px] sm:h-[68px] sm:w-[102px]" />
            <a href="https://suntreemyanmar.com/warranty" className="hidden rounded-md bg-[#00864f] px-4 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-[#006f43] md:inline-flex">Warranty</a>
          </div>
        </div>
      </header>

      <Hero />

      <section id="chargers" className="scroll-mt-24 bg-[#f4f7f6] py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[.24em] text-emerald-700">Suntree EV charger range</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Five series. Nine listed models.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Browse the five charger families in your import list. Power options below follow that list; manufacturer specifications are linked on each card.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {chargerFamilies.map((charger) => (
              <article key={charger.series} className="group flex flex-col overflow-hidden rounded-[1.65rem] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(11,35,25,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(11,35,25,.13)]">
                <div className="relative aspect-[1.08/1] overflow-hidden bg-[linear-gradient(135deg,#f4f7f7,#e8eeec)]">
                  <Image src={charger.image} alt={charger.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain p-2 sm:p-3 transition duration-500 group-hover:scale-[1.035]" />
                  {charger.series === "SPJ2E" && <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-emerald-200/70 bg-emerald-800/95 px-5 py-1.5 text-sm font-black tracking-wide text-white shadow-lg">SPJ2</span>}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><p className="mb-1 text-[10px] font-extrabold uppercase tracking-[.16em] text-emerald-700">{charger.category}</p><h3 className="text-2xl font-black tracking-tight text-[#101b31]">{charger.series}</h3><p className="mt-1 text-xs font-semibold text-slate-500">{charger.variants}</p></div>
                    <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-800">{charger.power}</span>
                  </div>
                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-600">{charger.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-600">
                    {charger.specs.map((spec) => <li key={spec} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{spec}</li>)}
                  </ul>
                  {"source" in charger ? <a href={charger.source} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-800 transition hover:text-emerald-600">Official manufacturer details <span aria-hidden="true">↗</span></a> : <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-800 transition hover:text-emerald-600">Ask about compatibility <span aria-hidden="true">→</span></a>}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">Power options reflect the supplied import list. Manufacturer pages may show additional variants; confirm the exact model datasheet before installation.</p>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[.24em] text-emerald-700">About us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Discover Our Company</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Learn more about our company, our values and our commitment to delivering reliable energy solutions across Myanmar.</p>
          </div>
          <PhotoCards cards={aboutCards} />
        </div>
      </section>

      <section id="why-us" className="scroll-mt-24 bg-[#e8eef5] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[.24em] text-emerald-700">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Trusted Energy Partner</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">We deliver reliable energy solutions backed by professional service and genuine products.</p>
          </div>
          <PhotoCards cards={trustCards} />
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#07150f] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.24em] text-emerald-300">Let’s work together</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Ready to power your next project?</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Talk with our team about Suntree charger models, suitable power options and support in Myanmar.</p>
            <a href="tel:+959880941715" className="mt-7 inline-flex text-xl font-extrabold text-emerald-300 transition hover:text-emerald-200">+95 9 880 941 715</a>
          </div>
          <div className="grid overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[.06] sm:grid-cols-[1fr_.82fr]">
            <div className="p-6 sm:p-8">
              <p className="text-2xl font-black uppercase tracking-[.1em] text-slate-200 sm:text-3xl">MTK Solar</p>
              <p className="mt-4 text-base font-bold leading-7">No. 141, Parami Road,<br />South Okkalapa Township,<br />Yangon, Myanmar.</p>
              <a href="https://suntreemyanmar.com/" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-extrabold text-[#062016] transition hover:bg-emerald-300">Call SUNTREECHARGERMYANMAR <span className="ml-2" aria-hidden="true">↗</span></a>
            </div>
            <div className="relative min-h-[270px] overflow-hidden sm:min-h-[330px]">
              <Image src="/images/trust/contact-team.png" alt="Arkar Min Thu Kha team member at the company showroom" fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover object-[center_28%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07150f]/30 via-transparent to-transparent sm:bg-gradient-to-l sm:from-transparent sm:via-transparent sm:to-[#07150f]/25" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#040c09] px-5 py-9 text-white sm:px-8">
        <div className="mx-auto max-w-[1440px] border-t border-white/10 pt-5 text-center text-xs leading-6 text-slate-400"><p>© 2026 Arkar Min Thu Kha Electro Trading Co., Ltd. All Rights Reserved.</p><p>Website Designed &amp; Developed by <span className="font-bold text-emerald-400">GS Creative - Art &amp; Management</span></p><p className="text-[11px] text-slate-500">Software Development Team</p></div>
      </footer>
    </main>
  );
}
