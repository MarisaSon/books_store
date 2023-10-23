import React from "react";
import "./book-description.css";
import { Link } from "react-router-dom";

const BookDescription = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage, id, description } = book;
  return (
    <div className="book-description">
      <div className="cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="details">
        <Link to={'/books/' + id} className="title">
          {" "}
          {title}
        </Link>

        <div className="author">{author}</div>
        <div className="price">${price}</div>
        <div className="description">{description}</div>
        <button onClick={onAddedToCart} className="btn btn-primary btn-lg add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookDescription;
