import React, { useContext } from "react";

import { CartContext } from "../CartContext";

export default function Cart() {
  const {
    total,
    clearCart,
    addItemToCart,
    setCartItems,
    removeItemFromCart,
    cart,
  } = useContext(CartContext);

  return (
    <div className="cart-wrapper">
      Items in cart:
      <ul>
        {cart.map(({ cartItem }) => {
          return (
            // TODO See below // Implement actual item removal
            <div
              className="cart-item"
              id={cartItem.id}
              onClick={(e) => removeItemFromCart(e.target.id)}
            >
              {cartItem.type.type} - ${cartItem.price.price}
            </div>
          );
        })}
      </ul>
      <p>Total: ${total}</p>
      <button
        onClick={() => {
          console.log("not implemented");
        }}
      >
        Check Out
      </button>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => console.log(cart)}>Check cart</button>
    </div>
  );
}
