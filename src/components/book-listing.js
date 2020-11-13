import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { booksCollection } from "../data/firebase";
import  Book from "./book";
import "./book-listing.css";


// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function BookListing() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {

    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBooks(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your book ratings. Please try again.");
      console.error(error);
    };

    const unsubscribe = booksCollection.orderBy("title", "asc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="books-container">
      <h1> My Fantasy Book Collection</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="book-list">
        {books.map((bookDoc) => {
          const bookId = bookDoc.id;
          const bookData = bookDoc.data();
          return (
            <li key={bookId}>
              < Book id={bookId} data={bookData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default  BookListing;
