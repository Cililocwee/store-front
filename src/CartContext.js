import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    // setCartItems(cart.append(item));
    // setCartItems((prevCart) => cart.append(item));
    setCartItems((current) => [...current, item]);
    // console.log(cart);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cart - 1);
  };

  const value = { cart, setCartItems, addItemToCart, removeItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
