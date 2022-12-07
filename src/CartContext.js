import React, { useState, createContext } from "react";
import { json } from "react-router-dom";
import coffees from "./menuitems/coffeeData";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [inventory, setInventory] = useState({});

  const addItemToCart = (item) => {
    setCartItems((current) => [...current, [item[0], item[1], item[2]]]);
    setTotal(total + parseFloat(item[2]));
  };

  const removeItemFromCart = (item) => {
    let positiveMatch = cart.filter((arr) => {
      return arr[0] === item[0];
    });

    if (positiveMatch.length > 0) {
      setTotal(total - item[2]);
    } else {
      console.log("No item");
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

  let counter = {};

  for (let element of cart.flat()) {
    if (counter[element]) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  }

  const value = {
    clearCart,
    cart,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    total,
    inventory,
    setInventory,
    counter,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
