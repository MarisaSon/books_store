import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../../actions";

const ShopHeader = ({ items, total }) => {
  let countItem = 0;
  items.forEach((element) => {
    countItem += element.count;
  });
  return (
    <header className="shop-header">
      <Link to="/" className="logo text-dark">
        Restore
      </Link>

      <div className="shopping-cart">
        <Link to="/cart" className="link">
          <i className="cart-icon fa-solid fa-cart-shopping" />
          {countItem} items (${total})
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
