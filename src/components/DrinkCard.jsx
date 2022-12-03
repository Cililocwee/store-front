import React from "react";

export default function DrinkCard({ type, image, description }) {
  return (
    <div className="drinkcard">
      <div className="drink-type">{type}</div>
      <img alt={`picture of ${type}`} src={image} />

      <div className="drink-description">{description}</div>
    </div>
  );
}
