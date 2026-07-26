import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "EV Charger | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Smart EV charging solutions for residential, commercial and public applications.",
};

export default function EVChargerPage() {
  return (
    <main>
      <ProductHero
        title="EV Charger"
        subtitle="Smart, safe and efficient electric vehicle charging solutions for homes, businesses and public charging stations."
      />

      <ProductOverview
        image="/images/products/ev-charger.png"
        title="Smart EV Charging Solutions"
        description="Arkar Min Thuka Electro Trading Co., Ltd. supplies reliable AC and DC EV charging solutions designed for residential, commercial and public infrastructure. Our products provide safe, intelligent and high-performance charging for modern electric vehicles."
        features={[
          "AC EV Charger",
          "DC Fast Charger",
          "Smart Charging Control",
          "Multiple Protection Functions",
          "Energy Efficient Design",
          "Easy Installation & Maintenance",
        ]}
      />

      <ProductApplications
        applications={[
          "Residential Homes",
          "Office Buildings",
          "Commercial Parking",
          "Public Charging Stations",
        ]}
      />
    </main>
  );
}