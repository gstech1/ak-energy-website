import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Company Profile | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Learn more about Arkar Min Thuka Electro Trading Co., Ltd.",
};

export default function CompanyProfilePage() {
  return (
    <main>
      <AboutHero
        title="Company Profile"
        subtitle="Learn more about Arkar Min Thuka Electro Trading Co., Ltd."
      />

      <ProductOverview
        image="/images/about/company-profile.jpg"
        title="Who We Are"
        description="Arkar Min Thuka Electro Trading Co., Ltd. is one of Myanmar's trusted suppliers of electrical products, renewable energy systems and engineering solutions. We are committed to delivering genuine products, professional technical support and long-term value to residential, commercial and industrial customers."
        features={[
          "Electrical Products",
          "Solar Energy Systems",
          "Battery Backup Solutions",
          "Engineering Services",
          "Professional Technical Support",
          "Nationwide Distribution",
        ]}
      />
    </main>
  );
}