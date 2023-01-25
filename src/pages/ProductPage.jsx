import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddToOrderButton from "../components/AddToOrderButton";
import DollarDisplay from "../components/DollarDisplay";
import MenuNav from "../components/MenuNav";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { itemOnDisplay, addOneItem } = useContext(CartContext);

  if (itemOnDisplay.itemName !== "no item") {
    return (
      <div className="page product-page">
        <MenuNav />
        <img src={itemOnDisplay.itemPic} alt="" id="item-display-pic" />
        <h2>{itemOnDisplay.itemName}</h2>
        <h3>
          <DollarDisplay amount={itemOnDisplay.itemPrice} />
        </h3>
        <p className="product-description">{itemOnDisplay.itemDescription}</p>
        <AddToOrderButton addFnc={() => addOneItem(itemOnDisplay.itemName)} />
      </div>
    );
  } else {
    return (
      <div className="page">
        <h2>You seem to be lost!</h2>
        <br />
        <h3>Let me help:</h3>
        <br />
        <Link to="/menu">Return to menu page</Link>
      </div>
    );
  }
}
