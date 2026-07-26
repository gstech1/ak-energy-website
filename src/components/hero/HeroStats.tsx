export default function HeroStats() {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "1000+",
      label: "Projects Completed",
    },
    {
      value: "5000+",
      label: "Products Installed",
    },
    {
      value: "24/7",
      label: "Technical Support",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
        >
          <h3 className="text-4xl font-black text-amber-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-300">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}