import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Header({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-sm font-black text-gray-900 tracking-tight">Crust & Co. 🍕</h1>
        <p className="text-[10px] text-gray-400 font-bold">Deliver to Home • 123 Gourmet Lane</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onCartClick}
          className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#ff5b35] cursor-pointer"
        >
          <FiShoppingBag size={16} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5b35] text-[9px] font-black text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}