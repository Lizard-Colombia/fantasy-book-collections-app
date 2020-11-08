import React from "react";
import { Helmet } from "react-helmet";
import EditBook from "../components/edit-book";

function EditBookPage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditBook />
    </main>
  );
}

export default EditBookPage;
