import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // ** cart should always be an arr of arr[id,type,price]
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [inventory, setInventory] = useState({});

  const handleInventoryChange = (arr) => {
    // always sort
    let arrQueue = arr;
    arrQueue.sort((a, b) => {
      return a[1].localeCompare(b[1]);
    });
    // apply any changes
    setCartItems(arr);
  };

  const addItemToCart = (item) => {
    let arrQueue = [...cart, [item[0], item[1], item[2]]];
    handleInventoryChange(arrQueue);
    setTotal(total + parseFloat(item[2]));
  };

  // receives arr[id,type,price]
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
    handleInventoryChange(completedFilter);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  // ** used in DrinkCards
  // keeps track of the amount of each item in the cart
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
