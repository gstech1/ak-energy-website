import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Inverter | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Professional inverter solutions for residential, commercial and industrial applications.",
};

export default function InverterPage() {
  return (
    <main>
      <ProductHero
        title="Inverter"
        subtitle="Professional Hybrid, On-Grid and Off-Grid inverter solutions for residential, commercial and industrial applications."
      />

      <ProductOverview
        image="/images/products/inverter.jpg"
        title="Professional Inverter Solutions"
        description="Arkar Min Thuka Electro Trading Co., Ltd. supplies high-performance inverter solutions engineered for reliable operation, excellent efficiency and long service life. Our products are suitable for residential, commercial and industrial solar energy systems."
        features={[
          "Hybrid Inverter",
          "On-Grid Inverter",
          "Off-Grid Inverter",
          "High Conversion Efficiency",
          "Smart Monitoring",
          "Reliable Protection System",
        ]}
      />

      <ProductApplications
        applications={[
          "Residential",
          "Commercial Buildings",
          "Factories",
          "Warehouses",
        ]}
      />
    </main>
  );
}