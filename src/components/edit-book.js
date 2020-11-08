import React, { useState } from "react";
import "./edit-book.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BookForm from "./book-form";

function EditBook(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookData, setBookData] = useState(null);

  const onMovieSubmit = async (title, rating, releaseYear) => {};

  return (
    <div className="edit-container">
      <h2>Edit Book</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {bookData && <BookForm />}
    </div>
  );
}

export default EditBook;
