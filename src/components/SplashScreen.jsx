import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Automatically hides after 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      onClick={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ff5b35] text-white cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-5xl shadow-2xl"
      >
        🍕
      </motion.div>
      <h1 className="text-xl font-black tracking-tight mt-4">Crust & Co.</h1>
      <p className="text-xs text-white/80 font-medium mt-1">Tap anywhere to start</p>
    </motion.div>
  );
}