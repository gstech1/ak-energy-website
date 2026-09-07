const menuItems = [
  { label: "Overview", icon: "⌂" },
  { label: "Website", icon: "▣" },
  { label: "Warranty", icon: "✓" },
  { label: "Warehouse", icon: "▤" },
  { label: "Dealers", icon: "♙" },
  { label: "Reports", icon: "▥" },
  { label: "Settings", icon: "⚙" },
];

const stats = [
  { label: "Total Products", value: "—" },
  { label: "Active Warranties", value: "—" },
  { label: "Pending Claims", value: "—" },
  { label: "Available Stock", value: "—" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Suntree Warranty Management
            </p>
            <h1 className="text-lg font-bold text-slate-900">
              SWMS Dashboard
            </h1>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            A
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop Sidebar */}
        <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r border-slate-200 bg-white p-4 md:block">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  index === 0
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-6">
            <p className="text-sm font-medium text-slate-500">
              Welcome back
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Dashboard Overview
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Manage your SWMS operations from one place.
            </p>
          </div>

          {/* Mobile Menu */}
          <div className="mb-6 grid grid-cols-2 gap-3 md:hidden">
            {menuItems.slice(1).map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Content Cards */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">Recent Activity</h3>
              <p className="mt-2 text-sm text-slate-500">
                Recent system activities will appear here.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">Quick Actions</h3>
              <p className="mt-2 text-sm text-slate-500">
                Quick management actions will appear here.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}