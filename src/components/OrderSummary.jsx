import { useCart } from "../context/CartContext";

export default function OrderSummary() {
  const {
    subtotal,
    deliveryFee,
    tax,
    total,
  } = useCart();

  return (
    <div className="rounded-2xl bg-slate-50 p-5">

      <h3 className="mb-4 text-lg font-black">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>
            {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-3 text-lg font-black">
          <div className="flex justify-between">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}