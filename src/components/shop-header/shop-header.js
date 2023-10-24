import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ count, total }) => {
  return (
    <header className="shop-header">
      <Link to="/" className="logo text-dark">
        Restore
      </Link>

      <div className="shopping-cart">
        <Link to="/cart" className="link">
          <i className="cart-icon fa-solid fa-cart-shopping" />
          {count} items (${total})
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ count, orderTotal }) => {
  return {
    count: count,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
