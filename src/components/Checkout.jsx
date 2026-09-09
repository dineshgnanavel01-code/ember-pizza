import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiUser, FiCheckCircle } from "react-icons/fi";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";

export default function Checkout({ cart, onPlaceOrder, onBack }) {
  const [address, setAddress] = useState("123 Gourmet Lane, Foodie Street");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [name, setName] = useState("Alex Morgan");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 0 ? 49 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen bg-[#fff7ed] pb-24 px-4 pt-4 max-w-md mx-auto relative text-gray-900"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-black tracking-tight">Checkout 🚀</h3>
        <button onClick={onBack} className="text-xs font-bold text-[#ff5b35] cursor-pointer">
          Back to Cart
        </button>
      </div>

      <div className="space-y-4">
        {/* Contact & Address */}
        <div className="bg-white p-4 rounded-2xl border border-orange-100/60 shadow-sm space-y-3">
          <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Delivery Details</h4>
          
          <div className="flex items-center gap-2.5 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
            <FiUser className="text-[#ff5b35]" size={16} />
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-xs font-bold outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-2.5 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
            <FiPhone className="text-[#ff5b35]" size={16} />
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent text-xs font-bold outline-none w-full"
            />
          </div>

          <div className="flex items-start gap-2.5 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
            <FiMapPin className="text-[#ff5b35] mt-0.5" size={16} />
            <textarea 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              rows={2}
              className="bg-transparent text-xs font-bold outline-none w-full resize-none"
            />
          </div>
        </div>

        <Coupon appliedCoupon={appliedCoupon} onApplyCoupon={setAppliedCoupon} />

        <OrderSummary 
          subtotal={subtotal} 
          discount={discount} 
          deliveryFee={deliveryFee} 
          total={total} 
        />

        {/* Payment Option */}
        <div className="bg-white p-4 rounded-2xl border border-orange-100/60 shadow-sm space-y-2">
          <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider">Payment Method</h4>
          <div className="grid grid-cols-2 gap-2">
            {["Online", "Cash on Delivery"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`p-2.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                  paymentMethod === method
                    ? "bg-[#ff5b35] text-white border-[#ff5b35] shadow-sm"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => onPlaceOrder({ name, phone, address, total, paymentMethod })}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#ff5b35] py-3.5 text-xs font-black text-white shadow-lg shadow-orange-200 cursor-pointer"
        >
          <FiCheckCircle size={16} />
          <span>Place Order (₹{total})</span>
        </motion.button>
      </div>
    </motion.div>
  );
}