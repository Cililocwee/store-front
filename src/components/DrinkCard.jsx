import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { CartContext } from "../CartContext";
import VariableInput from "./VariableInput";

export default function DrinkCard({ type, image, description, price, id }) {
  const { addItemToCart, removeItemFromCart, cart, counter } =
    useContext(CartContext);

  // let counter = 0;

  // cart.forEach((item) => {
  //   counter++;
  // });

  return (
    <div className="card-wrapper">
      <div className="drinkcard">
        <div className="drink-type">{type}</div>
        <div className="price">${price}</div>
        <img alt={`${type}`} src={image} />

        <div className="drink-description">{description}</div>
      </div>
      <div className="add-remove-btn">
        <VariableInput
          increment={() => addItemToCart([id, type, price])}
          decrement={() => removeItemFromCart([id, type, price])}
          number={counter[id]}
        />
      </div>
    </div>
  );
}
