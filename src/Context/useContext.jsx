import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function userCartLength() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartTrigger, setCartTrigger] = useState(false);
  return (
    <CartContext.Provider value={{ cartTrigger, setCartTrigger }}>
      {children}
    </CartContext.Provider>
  );
}
