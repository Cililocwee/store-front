import React from "react";

export default function DollarDisplay({ amount }) {
  if (amount !== 0) {
    return <p>${(amount / 100).toFixed(2)}</p>;
  } else {
    return <p>$0.00</p>;
  }
}
