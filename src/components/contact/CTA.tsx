export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-green-700 py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-[24px] bg-white p-6 shadow-2xl sm:gap-12 sm:rounded-[32px] sm:p-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:mb-4 sm:text-sm sm:tracking-[0.25em]">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight text-slate-900 sm:mb-6 sm:text-5xl">
              Ready to Power Your
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Next Project?
            </h2>

            <p className="mb-7 max-w-xl text-base leading-7 text-slate-600 sm:mb-8 sm:text-lg sm:leading-9">
              Looking for solar power systems, genuine Suntree products or
              professional engineering services? Our team is ready to provide
              reliable energy solutions across Myanmar.
            </p>

            <div className="space-y-5 sm:space-y-5">
              <div>
                <h3 className="mb-2 text-base font-bold text-slate-900 sm:text-lg">
                  📍 MTK Solar
                </h3>

                <p className="text-sm leading-6 text-slate-600 sm:text-base">
                  No. 141, Parami Road,
                  <br />
                  South Okkalapa Township,
                  <br />
                  Yangon, Myanmar.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                  ☎ Solar & Battery Backup System Sales
                </h3>

                <a
                  href="tel:+959777499600"
                  className="text-sm text-green-700 hover:underline sm:text-base"
                >
                  +95 9 777 499 600
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                  ☎ Suntree Myanmar
                </h3>

                <a
                  href="tel:+959880941715"
                  className="text-sm text-green-700 hover:underline sm:text-base"
                >
                  +95 9 880 941 715
                </a>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="flex h-14 w-full max-w-sm items-center justify-center rounded-2xl bg-green-600 text-base font-bold text-white transition hover:bg-green-700 sm:h-16 sm:w-80 sm:text-lg"
            >
              Get a Free Quote →
            </a>

            <a
              href="tel:+959777499600"
              className="flex h-14 w-full max-w-sm items-center justify-center rounded-2xl border border-slate-300 bg-white text-base font-bold text-slate-800 transition hover:bg-slate-100 sm:h-16 sm:w-80 sm:text-lg"
            >
              📞 Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}