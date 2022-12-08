import React from "react";
import DrinkCard from "../components/DrinkCard";
import foods from "../menuitems/foodData";

export default function FoodPage() {
  return (
    <div className="page-wrapper">
      <div className="page-title">Food</div>
      <div className="menu-wrapper">
        {foods.map((food) => {
          return (
            <DrinkCard
              type={food.type}
              description={food.description}
              image={food.picture}
              price={food.price}
              id={food.id}
            />
          );
        })}
      </div>
    </div>
  );
}
