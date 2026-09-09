import { ArrowLeft, Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetails({ pizza, onBack }) {
  const { addToCart } = useCart();

  if (!pizza) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">

      <div className="mx-auto max-w-4xl">

        <button
          onClick={onBack}
          className="m-4 rounded-full bg-slate-100 p-3"
        >
          <ArrowLeft />
        </button>

        <img
          src={pizza.image}
          alt={pizza.name}
          className="h-72 w-full object-cover md:h-96"
        />

        <div className="p-6">

          <div className="flex items-center justify-between">
            <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
              {pizza.category}
            </span>

            <span className="flex items-center gap-1">
              <Star
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />
              {pizza.rating}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-black">
            {pizza.name}
          </h1>

          <p className="mt-3 text-slate-600">
            {pizza.description}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <span className="text-3xl font-black">
              ₹{pizza.price}
            </span>

            <button
              onClick={() => addToCart(pizza)}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white"
            >
              <Plus size={20} />
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}