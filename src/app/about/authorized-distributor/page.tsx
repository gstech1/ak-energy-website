import Image from "next/image";

import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Authorized Distributor | Arkar Min Thuka Electro Trading Co., Ltd.",
};

const distributorImages = [
  {
    image: "/images/about/certi/dis.png",
    title: "Official Authorization Certificate",
  },
  
];

export default function AuthorizedDistributorPage() {
  return (
    <main>
      <AboutHero
        title="Authorized Distributor"
        subtitle="Official distributor and trusted business partner."
      />

      <ProductOverview
        image="/images/about/authorized.png"
        title="Official Authorized Distributor"
        description="Arkar Min Thuka Electro Trading Co., Ltd. is the official authorized distributor of SUNTREE products in Myanmar. We are committed to delivering genuine products, dependable technical expertise, comprehensive warranty support, and professional after-sales services to customers across the country. Our mission is to provide reliable electrical and renewable energy solutions while building long-term partnerships based on trust, quality, and customer satisfaction."
        features={[
  "Official Authorized Distributor of SUNTREE",
  "100% Genuine & Certified Products",
  "Manufacturer-Backed Warranty Support",
  "Professional Technical Consultation",
  "Nationwide Sales & Distribution Network",
  "Reliable After-Sales Service",
]}
      />

      {/* Distributor Gallery */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-slate-900">
              Official Authorization
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Official documents recognizing Arkar Min Thuka Electro Trading Co., Ltd.
              as an authorized distributor.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {distributorImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="w-full rounded-xl object-cover"
                />

                <div className="pt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}