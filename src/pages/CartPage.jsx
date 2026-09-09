import Cart from "../components/Cart";

export default function CartPage({ onBack, onCheckout }) {
  return (
    <Cart
      onBack={onBack}
      onCheckout={onCheckout}
    />
  );
}