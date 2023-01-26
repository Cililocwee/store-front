import React from "react";

export default function AddButton({ addFnc }) {
  return (
    <button className="add-btn hoverable-button" onClick={addFnc}>
      +
    </button>
  );
}
