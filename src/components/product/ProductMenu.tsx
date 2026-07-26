"use client";

interface ProductMenuProps {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}

export default function ProductMenu({
  items,
  selected,
  onSelect,
}: ProductMenuProps) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onSelect(item)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
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