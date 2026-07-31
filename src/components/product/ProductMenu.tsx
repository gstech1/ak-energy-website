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
     <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-14 items-center justify-center gap-4">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onSelect(item)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
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