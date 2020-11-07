import React from "react";
import "./add-movie.css";
import MovieForm from "./movie-form";

function AddMovie() {
  const onMovieSumbit = async (title, rating, releaseYear) => {};

  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <MovieForm />
    </div>
  );
}

export default AddMovie;
