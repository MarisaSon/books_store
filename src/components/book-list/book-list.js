import React from 'react';
import { Component } from 'react';
import './book-list.css';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded, bookAddedToCart } from '../../actions';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books, onAddedToCart } = this.props;

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
