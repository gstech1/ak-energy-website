import ProductHero from "@/components/product/ProductHero";
import ProductMenu from "@/components/product/ProductMenu";
import InverterProducts from "@/components/product/InverterProducts";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Inverter | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Professional inverter solutions for residential, commercial and industrial applications.",
};

export default function InverterPage() {
  return (
    <>
      {/* Sticky Area */}
      <div className="sticky top-0 z-5 bg-white">
        <ProductHero
          backgroundImage="/images/products/hero/inverter-bg.png"
        />

        <ProductMenu items={[]} />
      </div>

      <InverterProducts />

      <ProductApplications
        applications={[
          "Residential",
          "Commercial Buildings",
          "Factories",
          "Warehouses",
        ]}
      />
    </>
  );
}