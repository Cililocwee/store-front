import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import VariableInput from "./VariableInput";

export default function DrinkCard({ type, image, description, price, id }) {
  const { addItemToCart, removeItemFromCart, counter } =
    useContext(CartContext);

  return (
    <div className="card-wrapper">
      <div className="drinkcard">
        <div className="drink-type">{type}</div>
        <div className="price">
          ${price.toString().split("").slice(0, -2)}.
          {price.toString().split("").slice(-2)}
        </div>
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
