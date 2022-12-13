import React from "react";

export default function MenuLink({ id, display, onClick, className }) {
  return (
    <div id={id} className={className} onClick={onClick}>
      {display}
    </div>
  );
}
