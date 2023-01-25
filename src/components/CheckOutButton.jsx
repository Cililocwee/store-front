import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckOutButton() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/checkout";
    navigate(path);
  };
  return (
    <button onClick={routeChange} id="check-out-button" className="minified">
      Check Out
    </button>
  );
}
