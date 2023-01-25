import React from "react";

export default function SubtractButton({ subtractFnc }) {
  return (
    <button className="subtract-btn" onClick={subtractFnc}>
      −
    </button>
  );
}
