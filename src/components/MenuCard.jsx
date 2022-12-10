import React from "react";
import DrinkCard from "./DrinkCard";

export default function MenuCard({ viewName, viewArr }) {
  return (
    <div className="menu-wrapper">
      {viewArr.map((item) => {
        return (
          <DrinkCard
            type={item.type}
            description={item.description}
            image={item.picture}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
