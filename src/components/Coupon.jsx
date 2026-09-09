import { useState } from "react";

export default function Coupon() {
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "PIZZA50") {
      setApplied(true);
    }
  };

  return (
    <div className="rounded-2xl border p-4">

      <h3 className="mb-3 font-bold">
        Have a coupon?
      </h3>

      <div className="flex gap-2">

        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon"
          className="min-w-0 flex-1 rounded-xl border px-3 py-2 outline-none focus:border-orange-500"
        />

        <button
          onClick={applyCoupon}
          className="rounded-xl bg-slate-900 px-4 font-bold text-white"
        >
          Apply
        </button>

      </div>

      {applied && (
        <p className="mt-2 text-sm font-semibold text-green-600">
          Coupon PIZZA50 applied!
        </p>
      )}

    </div>
  );
}