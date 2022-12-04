import React from "react";

import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function DrinkCard({ type, image, description, price, clicky }) {
  const { addItemToCart, setCartItems } = useContext(CartContext);
  const cartItem = { type: { type }, price: { price } };

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
