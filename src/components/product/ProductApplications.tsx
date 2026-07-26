interface ProductApplicationsProps {
  applications: string[];
}

export default function ProductApplications({
  applications,
}: ProductApplicationsProps) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-600">
            APPLICATIONS
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Recommended Applications
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}