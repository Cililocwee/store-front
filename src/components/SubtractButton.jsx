import React from "react";

export default function SubtractButton({ subtractFnc }) {
  return (
    <button className="subtract-btn hoverable-button" onClick={subtractFnc}>
      −
    </button>
  );
}
