import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import DollarDisplay from "../components/DollarDisplay";
import InventoryInput from "../components/InventoryInput";

export default function CheckOutPage() {
  const { globalMenu, globalTotalPrice, setItemOnDisplay, currentDiscount } =
    useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/menu/product";
    navigate(path);
  };

  function handleClick(item) {
    //complete item object
    setItemOnDisplay(item);
    routeChange();
  }

  return (
    <div className="page" id="checkout-page">
      <section id="checkout-container">
        <ul>
          {globalTotalPrice === 0 ? <p>No items in cart</p> : <></>}
          {globalMenu.map(
            (item) =>
              item.itemTotal !== 0 && (
                <div className="checkout-item-bubble">
                  <img
                    src={item.itemPic}
                    alt={`${item.itemName} in cart`}
                    onClick={() => {
                      handleClick(item);
                    }}
                  />
                  <div>
                    <p>{item.itemName}</p>
                    <div>
                      <InventoryInput item={item} />
                    </div>
                  </div>
                  <DollarDisplay amount={item.itemTotal * item.itemPrice} />
                </div>
              )
          )}
        </ul>
        <section id="checkout-totals">
          <h4>Subtotal:</h4>
          <DollarDisplay amount={globalTotalPrice} />
          <h4>Discount:</h4>
          <DollarDisplay amount={currentDiscount} flag="discount" />

          <h4>Total:</h4>
          <DollarDisplay amount={globalTotalPrice} />
        </section>
        <button id="payment-button" className="hoverable-button">
          Choose Payment Method
        </button>
      </section>
    </div>
  );
}
