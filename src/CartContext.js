import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems((current) => [...current, item]);
    setTotal(total + parseFloat(item.cartItem.price.price));
  };

  const removeItemFromCart = (itemId) => {
    let foo = [];
    cart.forEach((position) => {
      if (position.cartItem.id !== itemId) {
        foo.push(position);
      } else {
        setTotal(total - position.cartItem.price.price);
      }
    });
    setCartItems(foo);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  const value = {
    clearCart,
    cart,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
