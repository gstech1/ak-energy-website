"use client";

import { useState } from "react";
import ProductCards from "./ProductCards";
import ProductGallery from "./ProductGallery";
import { cable } from "@/data/product/cable";

export default function CableProducts() {
  const products = cable.products;

  const [selected, setSelected] = useState(products[0].id);

  const selectedProduct =
    products.find((product) => product.id === selected) ?? products[0];

  return (
    <>
      <ProductCards
        products={products}
        selected={selected}
        onSelect={setSelected}
      />

      <ProductGallery images={selectedProduct.images} />
    </>
  );
}