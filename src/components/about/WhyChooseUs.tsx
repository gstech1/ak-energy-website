import Link from "next/link";
import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import { whyChooseItems } from "@/data/whyChoose";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="border-t border-slate-100 bg-slate-200 py-24"
    >
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="WHY CHOOSE US"
          title="Trusted Energy Partner"
          description="We deliver reliable energy solutions backed by professional service and genuine products."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(16,185,129,0.18)]"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-r-full bg-gradient-to-r from-emerald-500 to-green-300 transition-all duration-500 group-hover:w-full"></div>

              {/* Image */}
              <div className="flex h-72 items-center justify-center bg-white p-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={320}
                  className="h-56 w-auto object-contain transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </section>
  );
}