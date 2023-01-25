import React from "react";

export default function DollarDisplay({ amount }) {
  if (amount !== 0) {
    return (
      <div>
        <p>${(amount / 100).toFixed(2)}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>$0.00</p>
      </div>
    );
  }
}
