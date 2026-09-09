import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.crust === product.crust &&
          JSON.stringify(item.toppings || []) ===
            JSON.stringify(product.toppings || [])
      );

      if (existing) {
        return current.map((item) =>
          item.cartId === existing.cartId
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: product.quantity || 1,
          cartId: `${product.id}-${Date.now()}-${Math.random()}`,
        },
      ];
    });
  };

  const removeFromCart = (cartId) => {
    setCart((current) =>
      current.filter((item) => item.cartId !== cartId)
    );
  };

  const updateQuantity = (cartId, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: Math.max(0, item.quantity + amount),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 40;

  const discount = subtotal >= 599 ? Math.round(subtotal * 0.1) : 0;

  const total = subtotal + deliveryFee - discount;

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        discount,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}