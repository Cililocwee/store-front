import React, { useState, createContext, useEffect } from "react";
import { food, coffees, teas } from "./menuitems/menu";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  // ** cart should always be an arr of arr[id,type,price]

  const [globalMenu, setGlobalMenu] = useState([...food, ...coffees, ...teas]);

  const [itemOnDisplay, setItemOnDisplay] = useState({
    itemName: "no item",
    itemPic: "",
    itemDescription: "",
    itemPrice: 0,
    itemTotal: 0,
    itemType: null,
  });

  const [globalTotalPrice, setGlobalTotalPrice] = useState(0);

  useEffect(() => {
    let grandTotal = 0;

    globalMenu.forEach((item) => {
      grandTotal += item.itemTotal * item.itemPrice;
    });

    setGlobalTotalPrice(grandTotal);
  }, [globalMenu]);

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
    globalTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
