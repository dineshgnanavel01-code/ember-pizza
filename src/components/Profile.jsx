import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMapPin, FiClock, FiArrowLeft, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fff7ed] pb-24 px-4 pt-4 max-w-md mx-auto text-gray-900 relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm border border-orange-100 cursor-pointer"
        >
          <FiArrowLeft size={16} />
        </button>
        <h3 className="text-base font-black tracking-tight">My Profile 👤</h3>
      </div>

      {/* User Info Card */}
      <div className="bg-white p-5 rounded-3xl border border-orange-100/60 shadow-sm flex items-center gap-4 mb-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl shadow-inner">
          😎
        </div>
        <div>
          <h4 className="text-sm font-black text-gray-900">Alex Morgan</h4>
          <p className="text-xs text-gray-500 font-medium mt-0.5">+91 98765 43210</p>
          <span className="inline-block mt-2 rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-black text-[#ff5b35]">
            Gold Member 🍕
          </span>
        </div>
      </div>

      {/* Menu / Options List */}
      <div className="bg-white rounded-3xl border border-orange-100/60 shadow-sm overflow-hidden divide-y divide-gray-100 mb-6">
        <div className="flex items-center gap-3 p-4 hover:bg-orange-50/50 cursor-pointer transition-colors">
          <FiMapPin className="text-[#ff5b35]" size={18} />
          <div>
            <p className="text-xs font-black text-gray-900">Saved Addresses</p>
            <p className="text-[10px] text-gray-400 font-medium">Manage delivery locations</p>
          </div>
        </div>

        <div 
          onClick={() => navigate("/live-tracking")}
          className="flex items-center gap-3 p-4 hover:bg-orange-50/50 cursor-pointer transition-colors"
        >
          <FiClock className="text-[#ff5b35]" size={18} />
          <div>
            <p className="text-xs font-black text-gray-900">Order History</p>
            <p className="text-[10px] text-gray-400 font-medium">View past orders & live status</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 hover:bg-orange-50/50 cursor-pointer transition-colors">
          <FiPhone className="text-[#ff5b35]" size={18} />
          <div>
            <p className="text-xs font-black text-gray-900">Help & Support</p>
            <p className="text-[10px] text-gray-400 font-medium">Get assistance with orders</p>
          </div>
        </div>
      </div>

      {/* Logout / Sign Out Button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/auth")}
        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-red-50 py-3.5 text-xs font-black text-red-600 border border-red-100 shadow-sm cursor-pointer"
      >
        <FiLogOut size={16} />
        <span>Log Out</span>
      </motion.button>
    </div>
  );
}