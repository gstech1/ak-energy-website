import Image from "next/image";

interface ProductOverviewProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export default function ProductOverview({
  image,
  title,
  description,
  features,
}: ProductOverviewProps) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-3xl bg-slate-100 p-10">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-black text-slate-900">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-10">
            <h3 className="mb-4 text-2xl font-bold">
              Key Features
            </h3>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-green-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}