"use client";

import { forwardRef } from "react";
import { getWebsiteCmsImageUrl } from "@/lib/website-cms-api";

interface ProductDetailProps {
  product: {
    title: string;
    images: string[];
  };
}

const ProductDetail = forwardRef<HTMLDivElement, ProductDetailProps>(
  ({ product }, ref) => {
    return (
      <section className="pb-12 sm:pb-20">
        <div className="container mx-auto max-w-6xl px-3 sm:px-6">
          {product.images.map((image, index) => (
            <div
              key={index}
              ref={index === 0 ? ref : null}
              className="relative mb-6 w-full sm:mb-12 sm:h-[650px]"
            >
              <img
                src={getWebsiteCmsImageUrl(image)}
                alt={`${product.title} ${index + 1}`}
                className="block h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full"
              />
            </div>
          ))}
        </div>
      </section>
    );
  },
);

ProductDetail.displayName = "ProductDetail";

export default ProductDetail;
