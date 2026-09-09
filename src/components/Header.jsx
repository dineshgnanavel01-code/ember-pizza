import { FiMapPin, FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Header({ onCartClick }) {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-[#eaded2] bg-[#f8f3ed]/90 px-4 py-3 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#241612] text-xl shadow-lg shadow-[#241612]/15">🍕</div>
          <div className="min-w-0">
            <div className="font-display text-lg font-bold leading-none text-[#241612]">ember<span className="text-[#e74b2e]">.</span></div>
            <button className="mt-1 flex max-w-full items-center gap-1 truncate text-[10px] font-bold uppercase tracking-[.12em] text-[#8d7568]"><FiMapPin size={11} className="text-[#e74b2e]" /> Home · 12 min away</button>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button aria-label="Search" className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-[#eaded2] bg-white text-[#6f5a4e] sm:flex"><FiSearch size={17} /></button>
          <motion.button whileTap={{ scale: .86 }} aria-label="Open cart" onClick={onCartClick} className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e74b2e] text-white shadow-lg shadow-[#e74b2e]/20">
            <FiShoppingBag size={17} />
            {itemCount > 0 && <motion.span key={itemCount} initial={{ scale: .5 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#f8f3ed] bg-[#f3b53f] px-1 text-[10px] font-black text-[#241612]">{itemCount}</motion.span>}
          </motion.button>
          <button aria-label="Menu" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#eaded2] bg-white text-[#6f5a4e] sm:hidden"><FiMenu size={18} /></button>
        </div>
      </div>
    </header>
  );
}
