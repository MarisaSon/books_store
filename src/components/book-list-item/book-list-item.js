import React from 'react';
import './book-list-item.css';
import { Link } from 'react-router-dom';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage, id } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <Link to={'/books/' + id} className="book-title">
          {title}
        </Link>

        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
