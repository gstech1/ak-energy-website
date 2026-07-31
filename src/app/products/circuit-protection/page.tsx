"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ProductMenu from "@/components/product/ProductMenu";
import ProductCategory from "@/components/product/ProductCategory";
import ProductCards from "@/components/product/ProductCards";
import ProductDetail from "@/components/product/ProductDetail";
import ProductHero from "@/components/product/ProductHero";
import { productMenu } from "@/data/product/product-menu";
import { productCategories } from "@/data/product";

export default function CircuitProtectionPage() {
  const [selectedCategory, setSelectedCategory] = useState(productMenu[0]);

  const detailRef = useRef<HTMLDivElement>(null);

  const category =
    productCategories[
      selectedCategory as keyof typeof productCategories
    ];

  const [selectedProduct, setSelectedProduct] = useState(
    category.products[0].id
  );

  useEffect(() => {
    setSelectedProduct(category.products[0].id);
  }, [category]);

  const product = useMemo(() => {
    return (
      category.products.find(
        (item) => item.id === selectedProduct
      ) ?? category.products[0]
    );
  }, [category, selectedProduct]);

  const handleSelectProduct = (id: string) => {
    setSelectedProduct(id);

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!detailRef.current) return;

        const y =
          detailRef.current.getBoundingClientRect().top +
          window.scrollY -
          370;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 50);
    });
  };

  return (
    <>
      {/* Sticky Area */}
      <div className="sticky top-0 z-5 bg-white">
        <ProductHero
          backgroundImage="/images/products/hero/circuit-protection-bg2.png"
        />

        <ProductMenu
          items={productMenu}
          selected={selectedCategory}
          onSelect={(item) => {
            setSelectedCategory(item);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>

      <ProductCategory
        heading={category.heading}
        description={category.description}
      />

      <ProductCards
        products={category.products}
        selected={selectedProduct}
        onSelect={handleSelectProduct}
      />

      <ProductDetail
        ref={detailRef}
        product={product}
      />
    </>
  );
}