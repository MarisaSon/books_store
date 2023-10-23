import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/" className="logo text-dark">
        Restore
      </Link>

      <div className="shopping-cart">
        <Link to="/cart" className="link">
          <i className="cart-icon fa-solid fa-cart-shopping" />
          {numItems} items (${total})
        </Link>
      </div>
    </header>
  );
};

export default ShopHeader;
