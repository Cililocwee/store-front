import React from "react";

export default function VariableInput({
  number = 0,
  item,
  increment,
  decrement,
  className = "receipt-input",
}) {
  if (className === "receipt-input") {
    return (
      <>
        <div className={className}>
          <button onClick={increment}>+ </button>
          <span>{number}</span>
          <button onClick={decrement}>−</button>
        </div>
        <div className="receipt-item">{item}</div>
      </>
    );
  } else {
    return (
      <>
        <div className={className}>
          <button onClick={increment}>+ </button>
          <span>{number}</span>
          <button onClick={decrement}>−</button>
        </div>
      </>
    );
  }
}
