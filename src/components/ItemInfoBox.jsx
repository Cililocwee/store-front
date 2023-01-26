import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddToOrderButton from "./AddToOrderButton";

export default function ItemInfoBox({ item }) {
  const { addOneItem, globalMenu, itemOnDisplay } = useContext(CartContext);

  function hideOverlay() {
    const flyOver = document.getElementById("item-overlay");
    flyOver.classList.toggle("overlay-hidden");
    flyOver.classList.toggle("overlay-flex");
  }

  return (
    <div id="item-overlay" onClick={hideOverlay} className="overlay-hidden">
      <div id="item-info-box" className="flyover-box">
        <section id="info-box-pic-container">
          <img src={itemOnDisplay.itemPic} alt="" />
        </section>
        <section id="info-box-body">
          <h4>{item}</h4>
          <p>{itemOnDisplay.itemDescription}</p>
        </section>

        <AddToOrderButton addFnc={() => addOneItem(item)} />
      </div>
    </div>
  );
}
