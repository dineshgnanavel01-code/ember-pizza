import { motion } from "framer-motion";

export default function HeroBanner({ onOrder }) {
  return (
    <section className="overflow-hidden px-4 pt-4">
      <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff4d3d] via-red-500 to-orange-500 p-6 text-white shadow-xl shadow-red-500/20">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10"
        />

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 text-3xl"
        >
          🧀
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[62%]"
        >
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-md">
            🔥 LIMITED TIME
          </span>

          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight">
            Your pizza.
            <br />
            Your rules.
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/85">
            Get 30% OFF your first order and enjoy handcrafted pizza
            delivered hot.
          </p>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onOrder}
            className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-red-500 shadow-lg"
          >
            Order Now →
          </motion.button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
          alt="Pizza"
          className="absolute -bottom-2 -right-20 h-56 w-56 rounded-full object-cover shadow-2xl ring-8 ring-white/10"
        />

        <motion.span
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-16 top-8 text-2xl"
        >
          🌿
        </motion.span>

        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-28 text-2xl"
        >
          🍅
        </motion.span>
      </div>
    </section>
  );
}