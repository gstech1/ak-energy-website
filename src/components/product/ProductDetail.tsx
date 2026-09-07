"use client";

import { forwardRef } from "react";

interface ProductDetailProps {
  product: {
    title: string;
    images: string[];
  };
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001";

function getImageUrl(image: string) {
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
                src={getImageUrl(image)}
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