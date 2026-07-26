"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import ProductMenu from "@/components/product/ProductMenu";
import ProductCategory from "@/components/product/ProductCategory";
import ProductCards from "@/components/product/ProductCards";
import ProductDetail from "@/components/product/ProductDetail";
import ProductHero from "@/components/product/ProductHero";
import { productMenu } from "@/data/product/product-menu";
import { productCategories } from "@/data/product";

export default function CircuitProtectionPage() {
  // Selected Menu
  const [selectedCategory, setSelectedCategory] = useState(productMenu[0]);

  // Current Category
  const category =
    productCategories[
      selectedCategory as keyof typeof productCategories
    ];

  // Selected Product
  const [selectedProduct, setSelectedProduct] = useState(
    category.products[0].id
  );

  // Reset first product when category changes
  useEffect(() => {
    setSelectedProduct(category.products[0].id);
  }, [category]);

  // Current Product
  const product = useMemo(() => {
    return (
      category.products.find(
        (item) => item.id === selectedProduct
      ) ?? category.products[0]
    );
  }, [category, selectedProduct]);

  return (
  <>
    <ProductHero
      title={category.heading}
      subtitle={category.description[0]}
    />

    <ProductMenu
      items={productMenu}
      selected={selectedCategory}
      onSelect={setSelectedCategory}
    />

    <ProductCategory
      heading={category.heading}
      description={category.description}
    />

    <ProductCards
      products={category.products}
      selected={selectedProduct}
      onSelect={setSelectedProduct}
    />

    <ProductDetail
      product={product}
    />
  </>
);
}