import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-green-700 py-24">

      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Let&apos;s Work Together
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Ready to Power Your Next Project?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                From residential installations to industrial power systems,
                our engineering team is ready to deliver reliable and
                professional energy solutions across Myanmar.
              </p>

            </div>

            <div className="flex flex-col gap-5 lg:items-end">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <Phone size={20} />
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}