import React from "react";
import "./add-book.css";
import BookForm from "./book-form";

function AddBook() {
  const onBookSumbit = async (title, rating, releaseYear) => {};

  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <BookForm />
    </div>
  );
}

export default AddBook;
