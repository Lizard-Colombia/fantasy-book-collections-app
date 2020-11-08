import React from "react";
import { Helmet } from "react-helmet";
import MovieListing from "../components/book-listing";

function BooksPage() {
  return (
    <main>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <MovieListing />
    </main>
  );
}

export default BooksPage;
