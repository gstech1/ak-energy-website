import Link from "next/link";
import Image from "next/image";

import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-slate-200 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-600">
            OUR PRODUCTS
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Complete Energy Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            From solar power generation to battery backup systems and premium
            circuit protection, AK Energy delivers complete energy solutions
            across Myanmar.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-6">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-slate-50 p-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={260}
                  height={260}
                  className="max-h-60 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {product.shortDescription}
                </p>

                <span className="mt-8 inline-flex font-bold text-green-600">
                  View Details →
                </span>
              </div>
            </Link>
          ))}

        </div>


<div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-blue-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}