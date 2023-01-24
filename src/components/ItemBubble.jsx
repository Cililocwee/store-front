import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";
import AddToOrderButton from "./AddToOrderButton";
import { Link } from "react-router-dom";
export default function ItemBubble({ item, showItem }) {
  const { addOneItem, setItemOnDisplay } = useContext(CartContext);

  return (
    <section className="menu-item">
      <Link to="/menu/product" onClick={() => setItemOnDisplay(item)}>
        <img src={item.itemPic} alt="" />
      </Link>
      <h3>{item.itemName}</h3>
      <h5>${item.itemPrice}</h5>
    </section>
  );
}
