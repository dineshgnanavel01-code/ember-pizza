import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess({ orderDetails }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-[#fff7ed] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto relative text-gray-900"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-200 mb-4"
      >
        <FiCheckCircle size={40} />
      </motion.div>

      <h2 className="text-lg font-black tracking-tight">Order Placed Successfully!</h2>
      <p className="text-xs text-gray-500 font-medium mt-1">
        Your hot, delicious pizza is getting prepared with care. 🍕
      </p>

      <div className="w-full bg-white p-4 rounded-2xl border border-orange-100/60 shadow-sm mt-6 text-left space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500 font-medium">Order Number</span>
          <span className="font-black text-gray-900">#CRUST-{Math.floor(1000 + Math.random() * 9000)}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500 font-medium">Estimated Delivery</span>
          <span className="font-black text-green-600 flex items-center gap-1">
            <FiClock size={12} /> 25-30 mins
          </span>
        </div>
        {orderDetails && (
          <div className="flex justify-between text-xs pt-2 border-t border-gray-100">
            <span className="text-gray-500 font-medium">Total Paid</span>
            <span className="font-black text-[#ff5b35]">₹{orderDetails.total}</span>
          </div>
        )}
      </div>

      <div className="w-full space-y-2.5 mt-6">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/live-tracking")}
          className="w-full py-3 rounded-2xl bg-[#ff5b35] text-white text-xs font-black shadow-lg shadow-orange-200 cursor-pointer"
        >
          Track Order Live
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-2xl bg-white text-gray-800 text-xs font-black border border-orange-100 shadow-sm cursor-pointer flex items-center justify-center gap-2"
        >
          <FiHome size={14} /> Back to Home
        </motion.button>
      </div>
    </motion.div>
  );
}