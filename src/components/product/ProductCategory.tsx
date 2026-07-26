interface ProductCategoryProps {
  heading: string;
  description: string[];
}

export default function ProductCategory({
  heading,
  description,
}: ProductCategoryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-900">
          {heading}
        </h2>

        {description.map((text, index) => (
          <p
            key={index}
            className="mx-auto mb-4 max-w-4xl leading-8 text-gray-600"
          >
            {text}
          </p>
        ))}

        <h3 className="mt-12 text-2xl font-bold text-green-600">
          OUR PRODUCT OFFERINGS
        </h3>
      </div>
    </section>
  );
}