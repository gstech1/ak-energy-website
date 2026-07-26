import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Battery Backup System | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Reliable lithium battery backup and energy storage solutions.",
};

export default function BatteryPage() {
  return (
    <main>
      <ProductHero
        title="Battery Backup System"
        subtitle="Reliable lithium battery backup and energy storage solutions for residential, commercial and industrial applications."
      />

      <ProductOverview
        image="/images/products/battery.jpg"
        title="Reliable Energy Storage Solutions"
        description="Arkar Min Thuka Electro Trading Co., Ltd. provides high-quality lithium battery systems designed for long service life, maximum safety and dependable backup power. Our solutions are suitable for homes, businesses, factories and renewable energy systems."
        features={[
          "LiFePO₄ Battery Technology",
          "Long Cycle Life",
          "High Energy Density",
          "Built-in Battery Management System (BMS)",
          "Fast Charging",
          "Compatible with Hybrid Inverters",
        ]}
      />

      <ProductApplications
        applications={[
          "Residential Backup Power",
          "Commercial Buildings",
          "Industrial Facilities",
          "Solar Energy Storage",
        ]}
      />
    </main>
  );
}