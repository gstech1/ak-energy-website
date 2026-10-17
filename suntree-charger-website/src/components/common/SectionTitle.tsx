type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.3em] text-green-600">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}