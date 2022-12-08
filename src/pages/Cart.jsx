import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";
import VariableInput from "../components/VariableInput";

export default function Cart() {
  const {
    alphabetizeCart,
    total,
    clearCart,
    addItemToCart,
    removeItemFromCart,
    cart,
    setInventory,
    inventory,
  } = useContext(CartContext);

  // an array [id,type,price,count]
  // ** Unimplemented
  const [countDisplay, setCountDisplay] = useState([]);

  // TODO I need counts to be a state so everything rerenders when it changes
  const counts = {};
  for (const num of cart) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // not implemented
  const sortCartForView = () => {
    // I need an array here [id,type,price,count]
    // ** This should be used in more places
    let invArr = Object.entries(counts);
    let semiSortedInvArr = [];
    invArr.forEach((entry) => {
      semiSortedInvArr.push([...entry[0].split(","), entry[1]]);
    });

    // console.log(semiSortedInvArr);

    // sort the semiSortedInvArr
    semiSortedInvArr.sort((a, b) => {
      return a[1].localeCompare(b[1]);
    });

    // console.log(semiSortedInvArr);
    setCountDisplay(semiSortedInvArr);
  };

  return (
    <div className="content">
      <div className="cart-wrapper">
        Items in cart:
        <ul>
          {Object.keys(counts).map((key) => {
            return (
              <li>
                {/* Still need to implement clicks */}
                <VariableInput
                  item={key.split(",")[1]}
                  number={counts[key.split(",")]}
                  decrement={() => removeItemFromCart(key.split(","))}
                  increment={() => addItemToCart(key.split(","))}
                />
              </li>
            );
          })}
        </ul>
        {/* TODO: Total should always be in the format of $x.xx */}
        <div className="total-box">Total: ${total}</div>
        <button
          id="check-out"
          onClick={() => {
            alert(`Thank you for shopping. Your total is $${total}`);
          }}
        >
          Check Out
        </button>
        <button id="cart-clear" onClick={clearCart}>
          Clear Cart
        </button>
        {/* <button onClick={() => sortCartForView()}>Alphabetize</button> */}
      </div>
    </div>
  );
}
