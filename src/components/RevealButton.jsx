import React from "react";

export default function RevealButton({ revealFnc }) {
  function toggleTransform() {
    const revealBtn = document.getElementById("reveal-component");
    const checkOut = document.getElementById("check-out-button");

    checkOut.classList.toggle("minified");
    if (revealBtn.classList.contains("selected")) {
      revealBtn.classList.remove("selected");
    } else {
      revealBtn.classList.add("selected");
    }
  }

  function handleClick() {
    revealFnc();
    toggleTransform();
  }

  return (
    <button
      onClick={handleClick}
      id="reveal-component"
      className="plus-cancel"
    ></button>
  );
}
