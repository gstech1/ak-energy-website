import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Cable & Wire | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "High-quality electrical cables and wires for residential, commercial and industrial applications.",
};

export default function CableWirePage() {
  return (
    <main>
      <ProductHero
        title="Cable & Wire"
        subtitle="High-quality electrical cables and wiring solutions designed for safe, reliable and efficient power distribution."
      />

      <ProductOverview
        image="/images/products/cable-wire.png"
        title="Premium Cable & Wire Solutions"
        description="Arkar Min Thuka Electro Trading Co., Ltd. supplies premium-quality electrical cables and wires for residential, commercial, industrial and renewable energy applications. Our products are manufactured to meet international quality standards for safety, durability and long-term performance."
        features={[
          "Power Cable",
          "Control Cable",
          "Solar DC Cable",
          "Flexible Cable",
          "Flame Retardant Insulation",
          "Long Service Life",
        ]}
      />

      <ProductApplications
        applications={[
          "Residential Buildings",
          "Commercial Projects",
          "Industrial Plants",
          "Solar Power Systems",
        ]}
      />
    </main>
  );
}