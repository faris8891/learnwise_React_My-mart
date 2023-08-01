import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const OTPContext = createContext();
export const OTPValueContext = createContext();

export function userCartLength() {
  return useContext(CartContext);
}

export function OTPToggle() {
  return useContext(OTPContext);
}

export function CartProvider({ children }) {
  const [cartTrigger, setCartTrigger] = useState(false);
  const [OTPShow, setOTPShow] = useState(false);

  return (
    <CartContext.Provider value={{ cartTrigger, setCartTrigger }}>
      <OTPContext.Provider value={{ OTPShow, setOTPShow }}>
        {children}
      </OTPContext.Provider>
    </CartContext.Provider>
  );
}
