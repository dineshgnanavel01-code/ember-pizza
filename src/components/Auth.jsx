import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fff7ed] flex flex-col justify-center px-6 max-w-md mx-auto text-gray-900 relative">
      <div className="mb-8 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff5b35] text-white text-3xl shadow-lg shadow-orange-200 mb-3">
          🍕
        </div>
        <h2 className="text-xl font-black">
          {isLogin ? "Welcome Back! 👋" : "Create Account 🚀"}
        </h2>
        <p className="text-xs text-gray-500 font-medium mt-1">
          {isLogin ? "Enter your phone to sign in" : "Sign up for exclusive pizza deals"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl border border-orange-100/60 shadow-sm space-y-4">
        {!isLogin && (
          <div>
            <label className="text-xs font-bold text-gray-500">Full Name</label>
            <div className="flex items-center gap-2.5 bg-orange-50/50 p-3 rounded-xl border border-orange-100 mt-1">
              <FiUser className="text-[#ff5b35]" size={16} />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-xs font-bold outline-none w-full"
                required
              />
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-bold text-gray-500">Phone Number</label>
          <div className="flex items-center gap-2.5 bg-orange-50/50 p-3 rounded-xl border border-orange-100 mt-1">
            <FiPhone className="text-[#ff5b35]" size={16} />
            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent text-xs font-bold outline-none w-full"
              required
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff5b35] py-3 text-xs font-black text-white shadow-lg shadow-orange-200 cursor-pointer mt-2"
        >
          <span>{isLogin ? "Sign In" : "Register"}</span>
          <FiArrowRight size={16} />
        </motion.button>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-xs font-bold text-gray-600 hover:text-[#ff5b35] cursor-pointer"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/")}
          className="text-xs font-medium text-gray-400 hover:text-gray-600 cursor-pointer underline"
        >
          Skip and go to Home
        </button>
      </div>
    </div>
  );
}