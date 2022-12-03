import React from "react";
import DrinkCard from "../components/DrinkCard";
import food from "../menuitems/foodData";

export default function FoodPage({ type, drinkdata }) {
  return (
    <div className="page-wrapper">
      <div className="page-title">Food</div>
      <div className="menu-wrapper">
        {food.map((foodcoffee) => {
          return (
            <DrinkCard
              type={foodcoffee.type}
              description={foodcoffee.description}
              sizes={foodcoffee.sizes}
              image={foodcoffee.picture}
            />
          );
        })}
      </div>
    </div>
  );
}
