import ProductHero from "@/components/product/ProductHero";
import ProductMenu from "@/components/product/ProductMenu";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Solar System | Arkar Min Thukha Electro Trading Co., Ltd.",
  description:
    "Complete solar energy solutions for residential, commercial and industrial applications.",
};

export default function SolarPage() {
  return (
    <>
      {/* Sticky Area */}
      <div className="sticky top-0 z-5 bg-white">
        <ProductHero
          backgroundImage="/images/products/hero/solar-bg.png"
        />

        <ProductMenu items={[]} />
      </div>

      <ProductOverview
        image="/images/products/solar/solar1.jpg"
        title="Complete Solar Energy Solutions"
        description="Arkar Min Thukha Electro Trading Co., Ltd. provides complete solar power solutions including system design, quality equipment supply, professional installation and after-sales support. Our solutions help customers reduce electricity costs while ensuring reliable long-term performance."
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
    </>
  );
}