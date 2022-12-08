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
              image={coffee.picture}
              price={coffee.price}
              id={coffee.id}
            />
          );
        })}
      </div>
    </div>
  );
}
