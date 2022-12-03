import React from "react";
import DrinkCard from "../components/DrinkCard";
import coffees from "../menuitems/coffeeData";

export default function CoffeePage() {
  return (
    <div className="page-wrapper">
      <div className="page-title">Coffee</div>
      <div className="menu-wrapper">
        {coffees.map((coffee) => {
          return (
            <DrinkCard
              type={coffee.type}
              description={coffee.description}
              sizes={coffee.sizes}
              image={coffee.picture}
            />
          );
        })}
      </div>
    </div>
  );
}
