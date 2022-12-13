import React from "react";

export default function BackDrop({ background, children }) {
  return (
    <div
      className="back-drop"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
}
