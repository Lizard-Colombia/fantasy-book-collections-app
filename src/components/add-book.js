import React, { useState } from "react";
import { booksCollection } from "../data/firebase";
import "./add-book.css";
import BookForm from "./book-form";

function AddBook() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onBookSumbit = async (title, author, yearPublished, readingLevel, fanRating, numberInSeries, pages ) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      await booksCollection.add({
        title,
        author,
        yearPublished,
        readingLevel,
        fanRating,
      
        numberInSeries,
        pages,
      });
      setFormMessage("Saved successfully!");
      console.log("Saved!");
    
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!");
      console.error(error);
    }

    setIsSaving(false);
  };


  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <BookForm onSubmit={onBookSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBook;
