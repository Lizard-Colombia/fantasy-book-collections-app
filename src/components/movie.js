import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import { moviesCollection } from "../data/firebase";
import "./movie.css";

// var ratingOrder = db.collection("movies");

// db.collection("movies")
//   .orderBy("rating")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       return doc.rating, " => ", doc.data();
//     });
//   });

// export default ratingOrder;

function Movie(props) {
  const { id, data } = props;
  const { title, releaseYear, rating, viewed } = data;

  const ratingString = "💜 ".repeat(rating) + "🤍 ".repeat(5 - rating);

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // var ratingOrder = db.collection("movies");

  // db.collection("movies")
  //   .orderBy("rating")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach(function (doc) {
  //       return doc.rating, " => ", doc.data();
  //     });
  //   });

  const deleteMovie = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = moviesCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
    }
    setIsDeleting(false);
  };

  return (
    <div className="movie">
      <div className="movie__contents">
        <div className="movie__title"> {title} </div>
        <div className="movie__rating">{ratingString}</div>
        <div className="movie__year">{releaseYear}</div>
        <div className="movie__viewed">{viewed}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="movie__button" disabled={isDeleting} onClick={deleteMovie}>
          <Delete />
        </button>
        <button className="movie__button" onClick={() => {}}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Movie;
