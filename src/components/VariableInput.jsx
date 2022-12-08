import React from "react";

export default function VariableInput({
  number = 0,
  item,
  increment,
  decrement,
}) {
  return (
    <div>
      <div className="receipt-line">
        <div className="receipt-input">
          <button onClick={increment}>+ </button>
          <span>{number}</span>
          <button onClick={decrement}>-</button>
        </div>
        <div className="receipt-item">{item}</div>
      </div>
    </div>
  );
}
