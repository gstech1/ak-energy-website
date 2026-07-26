export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-600">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}