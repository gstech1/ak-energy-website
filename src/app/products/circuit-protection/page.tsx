"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ProductMenu from "@/components/product/ProductMenu";
import ProductCategory from "@/components/product/ProductCategory";
import ProductCards from "@/components/product/ProductCards";
import ProductDetail from "@/components/product/ProductDetail";
import ProductHero from "@/components/product/ProductHero";
import { productMenu } from "@/data/product/product-menu";
import { getWebsiteProductCategories } from "@/lib/website-cms-api";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001";

function getImageUrl(
  image: string | null | undefined,
) {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  if (image.startsWith("/website-cms/uploads/")) {
    return `${API_URL}${image}`;
  }

  return image;
}

export default function CircuitProtectionPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState(productMenu[0]);

  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data =
          await getWebsiteProductCategories();

        setCategories(data);
      } catch (error) {
        console.error(
          "Failed to load CMS product categories:",
          error,
        );
      }
    }

    loadCategories();
  }, []);

  const category = useMemo(() => {
  const categoryTitle =
    selectedCategory === "DC SPD"
      ? "DC Surge Protection Device"
      : selectedCategory;

  const cmsCategory = categories.find(
    (item) =>
      item.title === categoryTitle,
  );

  if (!cmsCategory) {
    return null;
  }

  return cmsCategory;
}, [categories, selectedCategory]);

  const products = useMemo(() => {
    if (!category) return [];

    return (category.products || [])
      .filter(
        (product: any) =>
          product.isPublished,
      )
      .map((product: any) => ({
        id: product.id,
        title: product.title,
        image: getImageUrl(
          product.mainImage,
        ),
        images: (product.images || [])
          .sort(
            (a: any, b: any) =>
              a.sortOrder -
              b.sortOrder,
          )
          .map((image: any) =>
            getImageUrl(
              image.imageUrl,
            ),
          ),
      }));
  }, [category]);

  const [selectedProduct, setSelectedProduct] =
    useState<string>("");

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(
        products[0].id,
      );
    } else {
      setSelectedProduct("");
    }
  }, [products]);

  const product = useMemo(() => {
    return (
      products.find(
        (item: any) =>
          item.id === selectedProduct,
      ) ?? products[0]
    );
  }, [products, selectedProduct]);

  const handleSelectProduct = (
    id: string,
  ) => {
    setSelectedProduct(id);

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!detailRef.current) return;

        const y =
          detailRef.current.getBoundingClientRect()
            .top +
          window.scrollY -
          370;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 50);
    });
  };

  if (!category) {
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

        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-slate-500">
            Loading products...
          </p>
        </div>
      </>
    );
  }

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
        products={products}
        selected={selectedProduct}
        onSelect={handleSelectProduct}
      />

      {product && (
        <ProductDetail
          ref={detailRef}
          product={product}
        />
      )}
    </>
  );
}