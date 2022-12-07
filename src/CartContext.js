import React, { useState, createContext } from "react";
import coffees from "./menuitems/coffeeData";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems((current) => [
      ...current,
      [item.cartItem.id.id, item.cartItem.type.type, item.cartItem.price.price],
    ]);
    setTotal(total + parseFloat(item.cartItem.price.price));
  };

  const removeItemFromCart = (item) => {
    let positiveMatch = cart.filter((arr) => {
      return arr[0] === item[0];
    });

    if (positiveMatch.length > 0) {
      setTotal(total - item[2]);
      console.log(item[2]);
    } else {
      console.log("its gone");
    }
    positiveMatch.pop();

    const negativeMatch = cart.filter((arr) => {
      return arr[0] !== item[0];
    });

    let completedFilter = [...positiveMatch, ...negativeMatch];

    setCartItems(completedFilter);
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
