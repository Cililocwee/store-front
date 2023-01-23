import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";
import AddToOrderButton from "./AddToOrderButton";

export default function ItemBubble({ item, showItem }) {
  const { addOneItem } = useContext(CartContext);
  const [itemOnDisplay, setItemOnDisplay] = useState();

  return (
    <section className="menu-item">
      <img src={item.itemPic} alt="" onClick={showItem} />
      <h3>{item.itemName}</h3>
      {/* <h4>{item.itemDescription}</h4> */}
      <h5>${item.itemPrice}</h5>
      <div className="amount-input">
        <AddToOrderButton addFnc={() => addOneItem(item.itemName)} />
      </div>
    </section>
  );
}
