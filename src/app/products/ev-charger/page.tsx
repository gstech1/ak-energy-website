"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ProductHero from "@/components/product/ProductHero";
import ProductCategory from "@/components/product/ProductCategory";
import ProductCards from "@/components/product/ProductCards";
import ProductDetail from "@/components/product/ProductDetail";
import ProductApplications from "@/components/product/ProductApplications";

import { evCharger } from "@/data/product/ev-charger";

export default function EVChargerPage() {
  const detailRef = useRef<HTMLDivElement>(null);

  const [selectedProduct, setSelectedProduct] = useState(
    evCharger.products[0].id
  );

  useEffect(() => {
    setSelectedProduct(evCharger.products[0].id);
  }, []);

  const product = useMemo(() => {
    return (
      evCharger.products.find(
        (item) => item.id === selectedProduct
      ) ?? evCharger.products[0]
    );
  }, [selectedProduct]);

  const handleSelectProduct = (id: string) => {
    setSelectedProduct(id);

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!detailRef.current) return;

        const y =
          detailRef.current.getBoundingClientRect().top +
          window.scrollY -
          290;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 50);
    });
  };

  return (
    <>
      <div className="sticky top-0 z-20">
  <ProductHero
    backgroundImage="/images/products/hero/ev-charger-bg.png"
  />
</div>

      <ProductCategory
        heading={evCharger.heading}
        description={evCharger.description}
      />

      <ProductCards
        products={evCharger.products}
        selected={selectedProduct}
        onSelect={handleSelectProduct}
      />

      <ProductDetail
        ref={detailRef}
        product={product}
      />

      <ProductApplications
        applications={[
          "Residential Home Charging",
          "Office Buildings",
          "Commercial Parking Areas",
          "Shopping Malls",
          "Hotels & Resorts",
          "Public Charging Stations",
          "Fleet Charging",
          "Industrial Facilities",
        ]}
      />
    </>
  );
}