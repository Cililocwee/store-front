import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";

export default function InventoryInput({ item }) {
  const { addOneItem, subtractOneItem } = useContext(CartContext);
  return (
    <div className="inventory-input-buttons">
      <AddButton addFnc={() => addOneItem(item.itemName)} />
      <p>{item.itemTotal}</p>
      <SubtractButton subtractFnc={() => subtractOneItem(item.itemName)} />
    </div>
  );
}
