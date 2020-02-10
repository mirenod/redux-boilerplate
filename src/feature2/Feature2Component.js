import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBooks, resetBooks } from "./actions";

const Feature2Component = ({ getBooks, resetBooks, books }) => {
  const handleOnClick = async () => {
    getBooks();
  };

  return (
    <>
      <div>
        <h3>Feature 2:</h3>
        <button onClick={handleOnClick}>Get Books API 2</button>
        <button
          onClick={() => {
            resetBooks();
          }}
        >
          Reset Books
        </button>
        {books.map((book, index) => (
          <div key={index}>{book.name}</div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.feature2.books
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBooks,
      resetBooks
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Feature2Component);
// https://the-one-api.herokuapp.com/v1/book
