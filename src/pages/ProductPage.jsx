import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddToOrderButton from "../components/AddToOrderButton";
import FloatingCart from "../components/FloatingCart";
import MenuNav from "../components/MenuNav";

export default function ProductPage() {
  const { itemOnDisplay, addOneItem } = useContext(CartContext);

  return (
    <div className="page product-page">
      <MenuNav />
      <img src={itemOnDisplay.itemPic} alt="" id="item-display-pic" />
      <h2>{itemOnDisplay.itemName}</h2>
      <h3>${itemOnDisplay.itemPrice}</h3>
      <p className="product-description">{itemOnDisplay.itemDescription}</p>
      <AddToOrderButton addFnc={() => addOneItem(itemOnDisplay.itemName)} />
    </div>
  );
}
