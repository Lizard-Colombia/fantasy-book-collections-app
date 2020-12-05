import React from "react";
import useSaveBook from "../hooks/use-save-book";
import "./add-book.css";
import BookForm from "./book-form";

function AddBook(props) {
  // console.log(props.user);
  const userId = props.user.uid;
  const [saveBook, isSaving, formMessage] = useSaveBook();

  const onBookSumbit = async (title, rating, releaseYear) => {
    saveBook({ title, rating, releaseYear }, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <BookForm onSubmit={onBookSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBook;
// import React, { useState } from "react";
// import { booksCollection } from "../data/firebase";
// import "./add-book.css";
// import BookForm from "./book-form";

// function AddBook() {
//   const [isSaving, setIsSaving] = useState(false);
//   const [formMessage, setFormMessage] = useState("");

//   const onBookSumbit = async (title, author, yearPublished, readingLevel, fanRating, series, numberInSeries, pages ) => {
//     setIsSaving(true);
//     setFormMessage("");

//     try {
//       await booksCollection.add({
//         title,
//         author,
//         yearPublished,
//         readingLevel,
//         fanRating,
//       series,
//         numberInSeries,
//         pages,
//       });
//       setFormMessage("Saved successfully!");
//       console.log("Saved!");
    
//     } catch (error) {
//       setFormMessage("Something went wrong. Please try again!");
//       console.error(error);
//     }

//     setIsSaving(false);
//   };


//   return (
//     <div className="add-container">
//       <h1>Add Book</h1>
//       <BookForm onSubmit={onBookSumbit} isSaving={isSaving} message={formMessage} />
//     </div>
//   );
// }

// export default AddBook;
