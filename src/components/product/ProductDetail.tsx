import Image from "next/image";

interface ProductDetailProps {
  product: {
    title: string;
    features: string[];
    images: {
      internalStructure: string;
      wiringDiagram: string;
      flameTest: string;
      technicalReference: string;
    };
  };
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  return (
    <section className="pb-20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">
            Features
          </h2>

          <ul className="list-disc space-y-3 pl-6 text-gray-700">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* INTERNAL STRUCTURE */}
        <div className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">
            Internal Structure
          </h2>

          <div className="relative h-[650px] w-full">
            <Image
              src={product.images.internalStructure}
              alt="Internal Structure"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* WIRING DIAGRAM */}
        <div className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">
            Wiring Diagram
          </h2>

          <div className="relative h-[650px] w-full">
            <Image
              src={product.images.wiringDiagram}
              alt="Wiring Diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* FLAME TEST */}
        <div className="mb-20">
          <h2 className="mb-6 text-3xl font-bold">
            Flame Test
          </h2>

          <div className="relative h-[650px] w-full">
            <Image
              src={product.images.flameTest}
              alt="Flame Test"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* TECHNICAL REFERENCE */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Technical Reference
          </h2>

          <div className="relative h-[900px] w-full">
            <Image
              src={product.images.technicalReference}
              alt="Technical Reference"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}