import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import DollarDisplay from "../components/DollarDisplay";

export default function CheckOutPage() {
  const { globalMenu, globalTotalPrice } = useContext(CartContext);
  return (
    <div className="page" id="checkout-page">
      <section id="checkout-container">
        <ul>
          {globalMenu.map(
            (item) =>
              item.itemTotal !== 0 && (
                <div className="checkout-item-bubble">
                  <img src={item.itemPic} alt={`${item.itemName} in cart`} />
                  <div>
                    <p>{item.itemName}</p>
                    <div>
                      <button>+</button>3<button>-</button>
                    </div>
                  </div>
                  <DollarDisplay amount={item.itemTotal * item.itemPrice} />
                </div>
              )
          )}
        </ul>
        <section id="checkout-totals">
          <h4>Subtotal:</h4>
          <p>$x.00</p>

          <h4>Discount:</h4>
          <p>-$y.00</p>

          <h4>Total:</h4>
          <DollarDisplay amount={globalTotalPrice} />
        </section>
        <button id="payment-button">Choose Payment Method</button>
      </section>
    </div>
  );
}
