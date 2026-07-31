import ProductHero from "@/components/product/ProductHero";
import ProductMenu from "@/components/product/ProductMenu";
import CableProducts from "@/components/product/CableProducts";
import ProductApplications from "@/components/product/ProductApplications";

export const metadata = {
  title: "Cable & Wire | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "High-quality electrical cables and wires for residential, commercial and industrial applications.",
};

export default function CableWirePage() {
  return (
    <>
      {/* Sticky Area */}
      <div className="sticky top-0 z-5 bg-white">
        <ProductHero
          backgroundImage="/images/products/hero/cable-bg.png"
        />

        <ProductMenu items={[]} />
      </div>

     <CableProducts />

<ProductApplications
  applications={[
    "Residential Buildings",
    "Commercial Projects",
    "Industrial Plants",
    "Solar Power Systems",
  ]}
/>

     
    </>
  );
}