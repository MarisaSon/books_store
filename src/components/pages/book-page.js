import React, { useEffect } from "react";
import BookDescription from "../book-description/book-description";
import withBookstoreService from "../hoc/with-bookstore-service";
import { connect } from "react-redux";
import { booksLoaded, bookAddedToCart } from "../../actions";
import { useParams } from "react-router-dom";

const BookPage = ({ bookstoreService, booksLoaded, books, onAddedToCart }) => {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, []);

  const { bookId } = useParams();
  const book = books.find((element) => Number(bookId) === element.id);

  if (book) {
    return (
      <BookDescription
        book={book}
        onAddedToCart={() => onAddedToCart(book.id)}
      />
    );
  } else {
    return;
  }
};

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
export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookPage)
);
