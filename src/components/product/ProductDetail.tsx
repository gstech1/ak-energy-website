import Image from "next/image";
import { forwardRef } from "react";

interface ProductDetailProps {
  product: {
    title: string;
    images: string[];
  };
}

const ProductDetail = forwardRef<HTMLDivElement, ProductDetailProps>(
  ({ product }, ref) => {
    return (
      <section className="pb-20">
        <div className="container mx-auto max-w-6xl px-6">
          {product.images.map((image, index) => (
            <div
              key={index}
              ref={index === 0 ? ref : null}
              className="relative mb-12 h-[650px] w-full"
            >
              <Image
                src={image}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
);

ProductDetail.displayName = "ProductDetail";

export default ProductDetail;