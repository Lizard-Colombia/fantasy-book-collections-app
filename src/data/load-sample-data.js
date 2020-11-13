import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addBook);
}

async function addBook({ title, author, yearPublished, readingLevel, fanRating,  series, numberInSeries, pages }) {
  try {
    const data = { title, author, yearPublished, readingLevel, fanRating, series, numberInSeries, pages  };

    // Look up a movie matching the title and release year.
    const snapshot = await db
      .collection("booksCollection")
      .where("title", "==", title)
      .where("author", "==", author)
      .where("yearPublished", "==", yearPublished)
      .where("readingLevel", "==", readingLevel)
      .where("fanRating", "==", fanRating)
      .where("series", "==", series)
      .where("numberInSeries", "==", numberInSeries)
      .where("pages", "==", pages)
      .get();

    // Create a doc reference that points to where this movie is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("booksCollection").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
