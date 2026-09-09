import { FiHome, FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function BottomNavigation({ onHome, onCart }) {
  const { totalItems } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 px-6 py-2 flex items-center justify-between max-w-md mx-auto shadow-lg">
      <button
        onClick={onHome}
        className="flex flex-col items-center gap-1 text-[#ff5b35] cursor-pointer"
      >
        <FiHome size={18} />
        <span className="text-[10px] font-black">Home</span>
      </button>

      <button
        onClick={onCart}
        className="relative flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <FiShoppingBag size={18} />
        <span className="text-[10px] font-bold">Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5b35] text-[8px] font-black text-white">
            {totalItems}
          </span>
        )}
      </button>

      <button
        onClick={() => alert("Favorites coming soon!")}
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <FiHeart size={18} />
        <span className="text-[10px] font-bold">Saved</span>
      </button>

      <button
        onClick={() => alert("Profile coming soon!")}
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <FiUser size={18} />
        <span className="text-[10px] font-bold">Profile</span>
      </button>
    </div>
  );
}