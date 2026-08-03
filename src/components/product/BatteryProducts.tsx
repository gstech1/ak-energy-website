"use client";

import Image from "next/image";

export default function InverterProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto space-y-10 px-6">

        {/* Product 1 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/s280.png"
              alt="Inverter 1"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/s280 sp.png"
              alt="Specification 1"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Product 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/s314.png"
              alt="Inverter 2"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/s314 sp.png"
              alt="Specification 2"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Product 3 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/vami.png"
              alt="Inverter 3"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/vami sp"
              alt="Specification 3"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Product 4 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/po4.png"
              alt="Inverter 4"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <Image
              src="/images/products/battery/rine.png"
              alt="Specification 4"
              width={800}
              height={800}
              className="h-auto w-full cursor-pointer object-contain transition hover:scale-[1.02]"
            />
          </div>
        </div>

        

      </div>
    </section>
  );
}