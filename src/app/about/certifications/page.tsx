import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Certifications | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Official certifications, licenses and quality commitments of Arkar Min Thuka Electro Trading Co., Ltd.",
};

export default function CertificationsPage() {
  return (
    <main>
      <AboutHero
        title="Certifications"
        subtitle="Official certifications that demonstrate our quality and professionalism."
      />

      <ProductOverview
        image="/images/about/certifications.jpg"
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
    </main>
  );
}