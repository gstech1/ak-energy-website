import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | Arkar Min Thukha Electro Trading Co., Ltd.",
  description:
    "Explore our complete range of energy and electrical solutions.",
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="sticky top-0 z-30 h-[320px] overflow-hidden">
        {/* Background */}
        <Image
          src="/images/products/hero/pro-bg.png"
          alt="Products Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/45" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <span>/</span>

              <span className="text-white">Products</span>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6">
              <Image
                src="/images/logo/ak-logo2.png"
                alt="AK Logo"
                width={120}
                height={60}
                className="rounded-lg bg-white p-1"
              />

              <Image
                src="/images/logo/suntree-logo.png"
                alt="Suntree Logo"
                width={140}
                height={60}
                className="rounded-lg bg-white px-1 py-2"
              />
            </div>

            {/* Company */}
            <h1 className="mt-8 text-5xl font-black text-white">
              ARKAR MIN THUKHA
            </h1>

            <p className="mt-3 text-xl tracking-[0.3em] text-green-300">
              ELECTRO TRADING CO., LTD.
            </p>

            <p className="mt-4 text-lg text-slate-200">
              Official Distributor of SUNTREE in Myanmar
            </p>
          </div>

          
        </div>
      </section>

      {/* Products */}
      <section className="mt-0 py-24">
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