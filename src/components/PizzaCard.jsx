import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function PizzaCard({ pizza, onSelect }) {
  const { addToCart } = useCart();

  const handleAdd = (event) => {
    event.stopPropagation();

    addToCart({
      ...pizza,
      size: "Medium",
      crust: "Classic",
      toppings: [],
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(pizza)}
      className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100"
    >
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.35 }}
          src={pizza.image}
          alt={pizza.name}
          className="h-44 w-full object-cover"
        />

        <span
          className={`absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-md border-2 bg-white ${
            pizza.type === "veg"
              ? "border-green-500"
              : "border-red-500"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              pizza.type === "veg"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          />
        </span>

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-bold shadow">
          <Star
            size={12}
            className="fill-yellow-400 text-yellow-400"
          />
          {pizza.rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="truncate text-base font-extrabold text-zinc-900">
          {pizza.name}
        </h3>

        <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-zinc-500">
          {pizza.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-black text-zinc-900">
              ₹{pizza.price}
            </span>

            <span className="ml-1 text-[10px] text-zinc-400">
              / medium
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.82 }}
            onClick={handleAdd}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/20"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}