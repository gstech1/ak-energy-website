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
        image="/images/about/company-profile.png"
        title="Who We Are"
       description="Arkar Min Thuka Electro Trading Co., Ltd. is a leading provider of electrical products, renewable energy solutions, and engineering services in Myanmar. As the official authorized distributor of SUNTREE, we are dedicated to delivering genuine products, innovative technologies, and professional technical support. Our commitment is to provide safe, reliable, and sustainable energy solutions that create long-term value for residential, commercial, and industrial customers."
        features={[
  "Official SUNTREE Authorized Distributor",
  "Electrical Protection Solutions",
  "Solar Energy & PV Systems",
  "Battery Energy Storage Solutions",
  "Professional Engineering Services",
  "Nationwide Sales & Technical Support",
]}
      />
    </main>
  );
}