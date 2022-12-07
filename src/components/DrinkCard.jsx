import React from "react";

import { useContext } from "react";
import { CartContext } from "../CartContext";
import uuid4 from "uuid4";
import VariableInput from "./VariableInput";

export default function DrinkCard({ type, image, description, price, id }) {
  const { addItemToCart, removeItemFromCart, cart } = useContext(CartContext);
  // TODO configure unique IDs so that they can be called later to remove from cart
  const cartItem = { id: { id }, type: { type }, price: { price } };

  return (
    <div className="card-wrapper">
      <div
        // onClick={() => addItemToCart({ cartItem })}
        className="drinkcard"
      >
        <div className="add-btn"></div>
        <div className="drink-type">{type}</div>
        <div className="price">${price}</div>
        <img alt={`${type}`} src={image} />

        <div className="drink-description">{description}</div>
      </div>
      <div className="add-remove-btn">
        <VariableInput
          increment={() => addItemToCart({ cartItem })}
          decrement={() => removeItemFromCart([id, type, price])}
        />
        {/* <button>+</button>
        <p>0</p>
        <button>-</button> */}
      </div>
    </div>
  );
}
