import { categories } from "../data/pizzas";

export default function CategorySlider({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7">

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black text-slate-900">
          Explore
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`min-w-[90px] rounded-2xl p-2 transition ${
              selectedCategory === category.name
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-slate-50 text-slate-700 hover:bg-orange-50"
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="mx-auto h-14 w-14 rounded-full object-cover"
            />

            <span className="mt-2 block text-sm font-semibold">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}