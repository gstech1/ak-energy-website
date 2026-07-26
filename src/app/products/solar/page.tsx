import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Solar System | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Complete solar energy solutions for residential, commercial and industrial applications.",
};

export default function SolarPage() {
  return (
    <main>
      <ProductHero
        title="Solar System"
        subtitle="Complete solar energy solutions designed to deliver clean, reliable and cost-effective power for homes, businesses and industries."
      />

      <ProductOverview
        image="/images/products/jsolar.jpg"
        title="Complete Solar Energy Solutions"
        description="Arkar Min Thuka Electro Trading Co., Ltd. provides complete solar power solutions including system design, quality equipment supply, professional installation and after-sales support. Our solutions help customers reduce electricity costs while ensuring reliable long-term performance."
        features={[
          "Residential Solar Systems",
          "Commercial Solar Solutions",
          "Industrial Solar Projects",
          "On-Grid & Off-Grid Systems",
          "Hybrid Solar Systems",
          "Professional Installation & Support",
        ]}
      />

      <ProductApplications
        applications={[
          "Homes & Villas",
          "Commercial Buildings",
          "Factories & Warehouses",
          "Hotels & Hospitals",
        ]}
      />
    </main>
  );
}