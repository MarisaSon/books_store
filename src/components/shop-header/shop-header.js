import React from "react";
import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <div className="logo text-dark">Restore</div>

      <div className="shopping-cart">
        <i className="cart-icon fa-solid fa-cart-shopping" />
        {numItems} items (${total})
      </div>
    </header>
  );
};

export default ShopHeader;
