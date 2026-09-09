import { motion, AnimatePresence } from "framer-motion";
import PizzaCard from "./PizzaCard";

export default function PizzaGrid({
  pizzas,
  onSelect,
}) {
  return (
    <section className="mt-7 px-4 pb-32">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-red-500">
            Fresh from oven
          </p>

          <h2 className="mt-1 text-2xl font-black text-zinc-900">
            Popular pizzas
          </h2>
        </div>

        <span className="text-xs font-semibold text-zinc-400">
          {pizzas.length} items
        </span>
      </div>

      <AnimatePresence mode="popLayout">
        {pizzas.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 gap-3"
          >
            {pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                pizza={pizza}
                onSelect={onSelect}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl bg-white py-16 text-center ring-1 ring-zinc-100">
            <div className="text-5xl">🍕</div>
            <h3 className="mt-4 font-bold text-zinc-900">
              Nothing here yet
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Try another category.
            </p>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}