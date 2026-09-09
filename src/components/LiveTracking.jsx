import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle, FiClock, FiMapPin, FiPhone, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function LiveTracking() {
  const navigate = useNavigate();

  const steps = [
    { title: "Order Confirmed", desc: "Your order has been received by the kitchen.", time: "12:30 PM", done: true },
    { title: "Preparing Pizza", desc: "Chef is tossing dough and adding fresh toppings.", time: "12:32 PM", done: true },
    { title: "Baking in Oven", desc: "Getting baked to crispy perfection at 450°F.", time: "12:40 PM", done: false },
    { title: "Out for Delivery", desc: "Delivery partner Rahul is on the way.", time: "Pending", done: false },
  ];

  return (
    <div className="min-h-screen bg-[#fff7ed] pb-24 px-4 pt-4 max-w-md mx-auto text-gray-900 relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm border border-orange-100 cursor-pointer"
        >
          <FiArrowLeft size={16} />
        </button>
        <h3 className="text-base font-black tracking-tight">Live Order Tracking 🛵</h3>
      </div>

      {/* ETA Banner */}
      <div className="bg-[#ff5b35] text-white p-5 rounded-3xl shadow-lg shadow-orange-200 mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase font-bold tracking-wider text-orange-100">Estimated Arrival</p>
          <h2 className="text-2xl font-black mt-0.5">20-25 mins</h2>
          <p className="text-xs font-medium text-orange-50 mt-1">Order #CRUST-4821</p>
        </div>
        <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
          🍕
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="bg-white p-5 rounded-3xl border border-orange-100/60 shadow-sm mb-4 space-y-4">
        <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider mb-2">Order Progress</h4>
        
        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-orange-100">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <span
                className={`absolute -left-6 top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black ${
                  step.done
                    ? "bg-green-500 text-white shadow-md shadow-green-200"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.done ? "✓" : idx + 1}
              </span>
              <div>
                <div className="flex items-center justify-between">
                  <h5 className={`text-xs font-black ${step.done ? "text-gray-900" : "text-gray-400"}`}>
                    {step.title}
                  </h5>
                  <span className="text-[10px] font-bold text-gray-400">{step.time}</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Partner Card */}
      <div className="bg-white p-4 rounded-3xl border border-orange-100/60 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">
            👨‍🦰
          </div>
          <div>
            <h4 className="text-xs font-black text-gray-900">Rahul Kumar</h4>
            <p className="text-[10px] text-gray-400 font-medium">Your Delivery Partner</p>
          </div>
        </div>
        <a
          href="tel:+919876543210"
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-[#ff5b35] hover:bg-orange-100 transition-colors cursor-pointer"
        >
          <FiPhone size={16} />
        </a>
      </div>
    </div>
  );
}