import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./book-form.css";

function BookForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.author === undefined) initialState.author = "";
  if (initialState.yearPublished === undefined) initialState.yearPublished = 2020;
  if (initialState.readingLevel === undefined) initialState.readingLevel = "Average";
  if (initialState.fanRating === undefined) initialState.fanRating = 3;
  if (initialState.series === undefined) initialState.series = true;
  if (initialState.numberInSeries === undefined) initialState.numberInSeries = 1;
  if (initialState.pages === undefined) initialState.pages = 0;
  

  const [title, setTitle] = useState(initialState.title);
  const [author, setAuthor] = useState(initialState.author);
  const [yearPublished, setYearPublished] = useState(initialState.yearPublished);

  const [readingLevel, setReadingLevel] = useState(initialState.readingLevel);
  const [fanRating, setFanRating] = useState(initialState.fanRating);
  const [series, setSeries] = useState(initialState.series);
  const [numberInSeries, setNumberInSeries] = useState(initialState.numberInSeries);
  const [pages, setPages] = useState(initialState.pages);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const onYearPublishedChange = (event) => {
    setYearPublished(event.target.value);
  };

  const onReadingLevelChange = (event) => {
    setReadingLevel(event.target.value);
  };

  const onFanRatingChange = (event) => {
    setFanRating(event.target.value);
  };
  const onSeriesChange = (event) => {
    setSeries(event.target.value);
  };
  const onNumberInSeriesChange = (event) => {
    setNumberInSeries(event.target.value);
  };

   const onPagesChange = (event) => {
    setPages(event.target.value);
  };

  const onBookSumbit = async (event) => {
    event.preventDefault();
    // onSubmit(title, author, yearPublished, readingLevel, 
    // fanRating, series, numberInSeries, pages);
  };

  return (
    <form className="book-form" onSubmit={onBookSumbit}>
      <h2 className="book-form__title">Book Details</h2>
      {message && <p className="book-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="book-form__controls" disabled={isSaving}>
        <label className="book-form__label">Book Title:</label>
        <input className="book-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="book-form__label">Author:</label>
        <input
          className="book-form__input"
          type="text"
          value={author}
          onChange={onAuthorChange}
        />
{/* year published */}
        <label className="book-form__label">Year Published:</label>
        <input
          className="book-form__input"
          type="number"
          value={yearPublished}
          onChange={onYearPublishedChange}
        />
{/* Reading Level */}
<label className="book-form__label">Reading Level:</label>
        <input
          className="book-form__input"
          type="text"
          value={readingLevel}
          onChange={onReadingLevelChange}
        />

{/* Fan Rating */}
<label className="book-form__label">Fan Rating:</label>
        <input
          className="book-form__input"
          type="number"
          value={fanRating}
          onChange={onFanRatingChange}
        />

{/* Series */}
<label className="book-form__label">Part of a series:</label>
        <input
          className="book-form__input"
          type="boolean"
          value={series}
          onChange={onSeriesChange}
        />

{/* Number In Series */}
<label className="book-form__label">Number in the series:</label>
        <input
          className="book-form__input"
          type="number"
          value={numberInSeries}
          onChange={onNumberInSeriesChange}
        />

{/* Pages */}
<label className="book-form__label">Pages:</label>
        <input
          className="book-form__input"
          type="number"
          value={pages}
          onChange={onPagesChange}
        />

        {/* Submit Button */}
        <input
          className="book-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default BookForm;
