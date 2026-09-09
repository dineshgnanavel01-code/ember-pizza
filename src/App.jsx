import { useState } from "react";

import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState("home");

  if (showSplash) {
    return (
      <SplashScreen
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">

        {page === "home" && (
          <Header
            onCartClick={() => setPage("cart")}
          />
        )}

        {page === "home" && <Home />}

        {page === "cart" && (
          <CartPage
            onBack={() => setPage("home")}
            onCheckout={() => setPage("checkout")}
          />
        )}

        {page === "checkout" && (
          <CheckoutPage
            onBack={() => setPage("cart")}
            onSuccess={() => setPage("success")}
          />
        )}

        {page === "success" && (
          <SuccessPage
            onHome={() => setPage("home")}
          />
        )}

        {page !== "checkout" && page !== "success" && (
          <BottomNavigation
            onHome={() => setPage("home")}
            onCart={() => setPage("cart")}
          />
        )}

      </div>
    </CartProvider>
  );
}