import AboutHero from "@/components/about/AboutHero";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata = {
  title: "Warranty Policy | Arkar Min Thukha Electro Trading Co., Ltd.",
};

export default function WarrantyPolicyPage() {
  return (
    <main>
      <AboutHero
        title="Warranty Policy"
        subtitle="Warranty coverage, terms and after-sales service information."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle
            badge="WARRANTY POLICY"
            title="Warranty Coverage"
            description="Please read the following warranty information carefully before requesting warranty service."
          />

          <div className="space-y-16">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">
                SUNTREE Circuit Breakers Warranty
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                All genuine SUNTREE circuit breakers officially distributed by
                Arkar Min Thukha Electro Trading Co., Ltd. are covered by the
                manufacturer&apos;s warranty. Warranty service applies only to genuine
                products that have been installed correctly, operated under normal
                conditions, and have not been modified, misused, or damaged by
                external factors. Warranty claims are subject to inspection and
                verification in accordance with the manufacturer&apos;s warranty policy.
              </p>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">
                Warranty for Solar & Electrical Systems
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                For complete solar energy systems and electrical projects supplied
                and installed by Arkar Min Thukha Electro Trading Co., Ltd.,
                warranty coverage includes installation workmanship together with
                applicable manufacturer warranties for equipment. Warranty terms
                may vary depending on the project agreement, equipment
                specifications, and installation scope. Our engineering team
                provides professional after-sales support, technical inspection,
                maintenance guidance, and warranty services throughout the
                warranty period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}