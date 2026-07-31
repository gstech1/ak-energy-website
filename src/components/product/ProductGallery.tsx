interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  if (!images?.length) return null;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}