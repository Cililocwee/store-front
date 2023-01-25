import React, { useState, createContext } from "react";
import { food, coffees, teas } from "./menuitems/menu";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // ** cart should always be an arr of arr[id,type,price]

  const [globalMenu, setGlobalMenu] = useState([...food, ...coffees, ...teas]);

  const [itemOnDisplay, setItemOnDisplay] = useState({
    itemName: "no item",
    itemDescription: "",
  });
  function addOneItem(itemId) {
    const queuedSet = [...globalMenu];
    queuedSet.forEach((place) => {
      if (place.itemName === itemId) {
        place.itemTotal++;
      }
    });
    setGlobalMenu(queuedSet);
  }

  function subtractOneItem(itemId) {
    const queuedSet = [...globalMenu];
    queuedSet.forEach((place) => {
      if (place.itemName === itemId) {
        if (place.itemTotal > 0) {
          place.itemTotal--;
        }
      }
    });
    setGlobalMenu(queuedSet);
  }

  const value = {
    globalMenu,
    addOneItem,
    subtractOneItem,
    itemOnDisplay,
    setItemOnDisplay,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
