import React from "react";

export default function AddToOrderButton({ addFnc }) {
  return (
    <button onClick={addFnc} className="add-to-order-btn">
      Add to Order
    </button>
  );
}
