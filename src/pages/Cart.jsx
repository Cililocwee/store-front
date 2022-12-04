import React, { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { addItemToCart, setCartItems, removeItemFromCart, cart } =
    useContext(CartContext);

  return (
    <div>
      Items in cart:
      <ul>
        {cart.map(({ cartItem }) => {
          console.log(cartItem.price);
          return (
            // TODO See below // Implement actual item removal
            <li onClick={() => console.log("remove this")}>
              {cartItem.type.type} - ${cartItem.price.price}
            </li>
          );
        })}
      </ul>
      {/* TODO: Figure out how to implement a total */}
      <p>Total: </p>
    </div>
  );
}
