import React from "react";
import "./Shops.css";
import ShopButton from "./ShopButton";
import Cart from "../Products/Cart";

export default function Shops() {
  return (
    <div className="shops">
        <h1>Shops</h1>
        <ShopButton />
    </div>
  );
}
