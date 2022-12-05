import React from "react";

import { useContext } from "react";
import { CartContext } from "../CartContext";
import uuid4 from "uuid4";

export default function DrinkCard({ type, image, description, price }) {
  const { addItemToCart, setCartItems } = useContext(CartContext);
  // TODO configure unique IDs so that they can be called later to remove from cart
  const cartItem = { id: uuid4(), type: { type }, price: { price } };

  return (
    <div onClick={() => addItemToCart({ cartItem })} className="drinkcard">
      <div className="add-btn"></div>
      <div className="drink-type">{type}</div>
      <div className="price">${price}</div>
      <img alt={`${type}`} src={image} />

      <div className="drink-description">{description}</div>
    </div>
  );
}
