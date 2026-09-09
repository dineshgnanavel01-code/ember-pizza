import { FiHome, FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function BottomNavigation({ onHome, onCart }) {
  const { itemCount } = useCart();
  const itemClass = "flex min-w-14 flex-col items-center gap-1 text-[10px] font-bold";
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#eaded2] bg-[#fffdfa]/95 px-5 pb-safe pt-3 shadow-[0_-14px_35px_rgba(73,44,24,.08)] backdrop-blur-xl">
      <div className="shell flex items-center justify-between">
        <button onClick={onHome} className={`${itemClass} text-[#e74b2e]`}><FiHome size={19} /><span>Home</span></button>
        <button onClick={onCart} className={`${itemClass} relative text-[#705c50]`}><FiShoppingBag size={19} /><span>Cart</span>{itemCount > 0 && <motion.span initial={{ scale: .6 }} animate={{ scale: 1 }} className="absolute -right-1 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e74b2e] px-1 text-[9px] font-black text-white">{itemCount}</motion.span>}</button>
        <button onClick={() => alert("Favorites coming soon!")} className={`${itemClass} text-[#705c50]`}><FiHeart size={19} /><span>Saved</span></button>
        <button onClick={() => alert("Profile coming soon!")} className={`${itemClass} text-[#705c50]`}><FiUser size={19} /><span>Profile</span></button>
      </div>
    </nav>
  );
}
