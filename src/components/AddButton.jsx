import React from "react";

export default function AddButton({ addFnc }) {
  return (
    <button className="add-btn" onClick={addFnc}>
      +
    </button>
  );
}
