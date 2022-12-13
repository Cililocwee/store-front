import React from "react";
import DrinkCard from "../components/DrinkCard";
import teas from "../menuitems/teaData";

export default function TeaPage() {
  return (
    <div className="page-wrapper">
      <div className="page-title">Tea</div>
      <div className="menu-wrapper">
        {teas.map((tea) => {
          return (
            <DrinkCard
              type={tea.type}
              description={tea.description}
              image={tea.picture}
              price={tea.price}
              id={tea.id}
            />
          );
        })}
      </div>
    </div>
  );
}
