"use client";

import Image from "next/image";

interface Product {
  id: string;
  title: string;
  image: string;
}

interface ProductCardsProps {
  products: Product[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function ProductCards({
  products,
  selected,
  onSelect,
}: ProductCardsProps) {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelect(product.id)}
              className={`overflow-hidden rounded-xl border bg-white text-left shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected === product.id
                  ? "border-green-600 ring-2 ring-green-600"
                  : "border-gray-200"
              }`}
            >
              <div className="relative h-64 w-full bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="border-t border-gray-100 p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}