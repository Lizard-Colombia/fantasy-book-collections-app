import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import {useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { booksCollection } from "../data/firebase";
import "./book.css";

function Book (props) {
  const { id, data } = props;
  const { title, author, yearPublished, readingLevel, fanRating, series, numberInSeries, pages } = data;

  const fanRatingString = "💙 ".repeat(fanRating) + "🤍 ".repeat(5 - fanRating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBook = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef =booksCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
    }
    setIsDeleting(false);
  };

  return (
    <div className="book">
      <div className="book__contents">
        <div className="book__title"> Title: {title} </div>
        <div className="book__viewed"> Author: {author} </div>
        <div className="book__viewed"> Year: {yearPublished} </div>
        <div className="book__viewed"> Reading Level: {readingLevel} </div>
        <div className="book__rating">Fan Rating: {fanRatingString}</div>
        <div className="book__viewed">Part of a Series: {series}</div>
        <div className="book__viewed">Book Number in Series: {numberInSeries}</div>
        <div className="book__viewed">Total Pages:  {pages}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="book__button" disabled={isDeleting} onClick={deleteBook}>
          <Delete />
        </button>
        <button className="book__button" onClick={() => history.push (`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
  }

export default Book;
