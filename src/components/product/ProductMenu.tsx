"use client";

interface ProductMenuProps {
  items: string[];
  selected?: string;
  onSelect?: (item: string) => void;
}

export default function ProductMenu({
  items,
  selected = "",
  onSelect = () => {},
}: ProductMenuProps) {
  return (
    <section className="sticky top-[96px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Mobile */}
        <div className="flex h-14 items-center sm:hidden">
          <div className="relative w-full">
            <select
              value={selected}
              onChange={(event) => onSelect(event.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 pr-10 text-sm font-semibold text-gray-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            >
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
              ▼
            </span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden h-14 items-center justify-center gap-4 sm:flex">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onSelect(item)}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                selected === item
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}