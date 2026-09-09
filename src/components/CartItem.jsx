import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex gap-3 border-b py-4">

      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 rounded-xl object-cover"
      />

      <div className="flex-1">

        <h3 className="font-bold">
          {item.name}
        </h3>

        <p className="text-sm text-slate-500">
          ₹{item.price}
        </p>

        <div className="mt-2 flex items-center gap-3">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="rounded-full bg-slate-100 p-1"
          >
            <Minus size={15} />
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="rounded-full bg-slate-100 p-1"
          >
            <Plus size={15} />
          </button>

        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="self-start text-red-500"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}