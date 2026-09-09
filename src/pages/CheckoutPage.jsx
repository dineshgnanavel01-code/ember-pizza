import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";

export default function CheckoutPage({ cart, setCart }) {
  const navigate = useNavigate();

  const handlePlaceOrder = (orderDetails) => {
    // Clear cart or save order state if needed
    setCart([]);
    navigate("/success", { state: { orderDetails } });
  };

  return (
    <Checkout
      cart={cart}
      onPlaceOrder={handlePlaceOrder}
      onBack={() => navigate(-1)}
    />
  );
}