export default function CTA() {
  return (
<section
  id="contact"
  className="bg-green-700 py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 rounded-[32px] bg-white p-12 shadow-2xl lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mb-6 text-5xl font-black leading-tight text-slate-900">
              Ready to Power Your
              <br />
              Next Project?
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-9 text-slate-600">
              Looking for solar power systems, genuine Suntree products or
              professional engineering services? Our team is ready to provide
              reliable energy solutions across Myanmar.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  📍 MTK Solar
                </h3>

                <p className="text-slate-600">
                  No. 141, Parami Road,
                  <br />
                  South Okkalapa Township,
                  <br />
                  Yangon, Myanmar.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  ☎ Solar & Battery Backup System Sales
                </h3>

                <a
                  href="tel:+959777499600"
                  className="text-green-700 hover:underline"
                >
                  +95 9 777 499 600
                </a>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  ☎ Suntree Myanmar
                </h3>

                <a
                  href="tel:+959880941715"
                  className="text-green-700 hover:underline"
                >
                  +95 9 880 941 715
                </a>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="#contact"
              className="flex h-16 w-80 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-white transition hover:bg-green-700"
            >
              Get a Free Quote →
            </a>

            <a
              href="tel:+959777499600"
              className="flex h-16 w-80 items-center justify-center rounded-2xl border border-slate-300 bg-white text-lg font-bold text-slate-800 transition hover:bg-slate-100"
            >
              📞 Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}