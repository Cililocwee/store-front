import React from "react";
import { useState } from "react";
import MenuCard from "../components/MenuCard";
import MenuLink from "../components/MenuLink";
import coffees from "../menuitems/coffeeData";
import foods from "../menuitems/foodData";
import teas from "../menuitems/teaData";

export default function MenuPage() {
  const all = [...coffees, ...foods, ...teas];
  const [viewType, setViewType] = useState("all");
  const [menuDisplay, setMenuDisplay] = useState(all);

  const changeViewToAll = () => {
    setViewType("all");
    setMenuDisplay(all);
    document.getElementById("all-view").classList.add("menu-active");
    document.getElementById("tea-view").classList.remove("menu-active");
    document.getElementById("coffee-view").classList.remove("menu-active");
    document.getElementById("food-view").classList.remove("menu-active");
  };

  const changeViewToTea = () => {
    setViewType("tea");
    setMenuDisplay(teas);
    document.getElementById("all-view").classList.remove("menu-active");
    document.getElementById("tea-view").classList.add("menu-active");
    document.getElementById("coffee-view").classList.remove("menu-active");
    document.getElementById("food-view").classList.remove("menu-active");
  };

  const changeViewToCoffee = () => {
    setViewType("coffee");
    setMenuDisplay(coffees);
    document.getElementById("all-view").classList.remove("menu-active");
    document.getElementById("tea-view").classList.remove("menu-active");
    document.getElementById("coffee-view").classList.add("menu-active");
    document.getElementById("food-view").classList.remove("menu-active");
  };

  const changeViewToFood = () => {
    setViewType("food");
    setMenuDisplay(foods);
    document.getElementById("all-view").classList.remove("menu-active");
    document.getElementById("tea-view").classList.remove("menu-active");
    document.getElementById("coffee-view").classList.remove("menu-active");
    document.getElementById("food-view").classList.add("menu-active");
  };

  return (
    <div className="page-wrapper menu-page">
      <div className="menu-selection">
        <div className="menu-links">
          <MenuLink
            className="menu-link menu-active"
            id="all-view"
            display="All"
            onClick={() => changeViewToAll()}
          />
          <MenuLink
            className="menu-link"
            id="tea-view"
            display="Tea"
            onClick={() => changeViewToTea()}
          />
          <MenuLink
            className="menu-link"
            id="coffee-view"
            display="Coffee"
            onClick={() => changeViewToCoffee()}
          />
          <MenuLink
            className="menu-link"
            id="food-view"
            display="Food"
            onClick={() => changeViewToFood()}
          />
        </div>
      </div>

      <MenuCard viewName={viewType} viewArr={menuDisplay} />
    </div>
  );
}
