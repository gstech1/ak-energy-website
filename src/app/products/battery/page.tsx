import ProductHero from "@/components/product/ProductHero";
import ProductMenu from "@/components/product/ProductMenu";
import BatteryProducts from "@/components/product/BatteryProducts";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Battery Backup System | Arkar Min Thukha Electro Trading Co., Ltd.",
  description:
    "Reliable lithium battery backup and energy storage solutions.",
};

export default function BatteryPage() {
  return (
    <>
      {/* Sticky Area */}
      <div className="sticky top-0 z-5 bg-white">
        <ProductHero
          backgroundImage="/images/products/hero/battery-bg.png"
        />

        <ProductMenu items={[]} />
      </div>

      <BatteryProducts />

      <ProductApplications
        applications={[
          "Residential Backup Power",
          "Commercial Buildings",
          "Industrial Facilities",
          "Solar Energy Storage",
        ]}
      />
    </>
  );
}