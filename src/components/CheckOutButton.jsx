import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckOutButton({ additionalFnc }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/checkout";
    navigate(path);
  };

  function handleClick() {
    routeChange();
    additionalFnc();
  }
  return (
    <button
      onClick={handleClick}
      id="check-out-button"
      className="minified hoverable-button"
    >
      Check Out
    </button>
  );
}
