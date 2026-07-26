import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | Arkar Min Thuka Electro Trading Co., Ltd.",
  description: "Explore our complete range of energy and electrical solutions.",
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-green-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-black">
            Our Products
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-slate-200">
            Discover our complete range of energy, electrical and renewable
            solutions for residential, commercial and industrial applications.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-72 items-center justify-center bg-slate-50 p-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="max-h-60 w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-black text-slate-900">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-slate-600">
                    {product.shortDescription}
                  </p>

                  <span className="mt-8 inline-flex font-bold text-green-600">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>
    </main>
  );
}