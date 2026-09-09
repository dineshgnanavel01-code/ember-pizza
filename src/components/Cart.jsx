import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";

export default function Cart({ onBack, onCheckout }) {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-white">

      <div className="mx-auto max-w-3xl px-4 py-6">

        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-slate-600"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </button>

        <h1 className="mb-6 text-3xl font-black">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="py-20 text-center">

            <ShoppingBag
              size={60}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-5 text-xl font-bold">
              Your cart is empty
            </h2>

            <button
              onClick={onBack}
              className="mt-5 rounded-full bg-orange-500 px-6 py-3 font-bold text-white"
            >
              Browse Pizzas
            </button>

          </div>
        ) : (
          <>
            <div className="mb-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="space-y-5">
              <Coupon />
              <OrderSummary />

              <button
                onClick={onCheckout}
                className="w-full rounded-full bg-orange-500 py-4 font-bold text-white shadow-lg shadow-orange-100"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}