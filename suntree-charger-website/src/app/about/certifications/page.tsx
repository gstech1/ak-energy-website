import Image from "next/image";

import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Certifications | Arkar Min Thukha Electro Trading Co., Ltd.",
  description:
    "Official certifications, licenses and quality commitments of Arkar Min Thukha Electro Trading Co., Ltd.",
};

const certificates = [
  {
    image: "/images/about/certi/1.png",
    title: "Company Registration",
  },
  {
    image: "/images/about/certi/dis.png",
    title: "Authorized Distributor Certificate",
  },
  {
    image: "/images/about/certi/c2.png",
    title: "ISO-9001",
  },
  {
    image: "/images/about/certi/c3.png",
    title: "ISO Certification",
  },
  {
    image: "/images/about/certi/c4.png",
    title: "Quality Certificate",
  },
  
];

export default function CertificationsPage() {
  return (
    <main>
      <AboutHero
        title="Certifications"
        subtitle="Official certifications that demonstrate our quality and professionalism."
      />

      <ProductOverview
        image="/images/about/certifications.png"
        title="Our Certifications"
        description="We operate with the necessary certifications, licenses and business registrations required to provide reliable electrical products and renewable energy solutions. These certifications reflect our commitment to quality, compliance and customer confidence."
        features={[
          "Company Registration",
          "Authorized Distribution Certificates",
          "Business Licenses",
          "Quality Assurance",
          "Professional Documentation",
          "Trusted Industry Partner",
        ]}
      />

      {/* Certificate Gallery */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-slate-900">
              Official Certificates
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Company registrations, business licenses and official authorization certificates.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={800}
                  height={1100}
                  className="w-full rounded-xl object-cover"
                />

                <div className="pt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    {certificate.title}
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