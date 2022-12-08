import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // ** cart should always be an arr of arr[id,type,price]
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [inventory, setInventory] = useState({});

  // ** This should recieve an arr of arr[id,type,price]
  // might need to get rid of this
  // const alphabetizeCart = (arr) => {
  //   let arrQueue = arr;
  //   arrQueue.sort((a, b) => {
  //     return a[1].localeCompare(b[1]);
  //   });

  //   console.log(inventory);
  //   return arrQueue;
  // };

  const handleInventoryChange = (arr) => {
    let arrQueue = arr;
    arrQueue.sort((a, b) => {
      return a[1].localeCompare(b[1]);
    });

    setCartItems(arr);
  };

  const addItemToCart = (item) => {
    let arrQueue = [...cart, [item[0], item[1], item[2]]];

    handleInventoryChange(arrQueue);

    // setCartItems((current) => [...current, [item[0], item[1], item[2]]]);
    setTotal(total + parseFloat(item[2]));
  };

  // receive [id,type,price]
  // TODO As a result of this implementation, the displayed list reorders every time :(
  //! Need to refactor this, this is super annoying
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
    //setcartitems should be in a function that sorts and then setcartitems
    // setCartItems(completedFilter);
    handleInventoryChange(completedFilter);
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
    // alphabetizeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
