import Link from "next/link";
import Image from "next/image";
import { aboutItems } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: "url('/images/about/about-bg.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/15"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            About Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Discover Our Company
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Learn more about our company, our values and our commitment to
            delivering reliable energy solutions across Myanmar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {aboutItems.map((item) => (
            <Link
              key={item.id}
              href={`/about/${item.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="flex h-72 items-center justify-center bg-white/50 p-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={240}
                  className="max-h-56 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.shortDescription}
                </p>

                <span className="mt-8 inline-flex font-bold text-green-600 transition group-hover:translate-x-1">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}