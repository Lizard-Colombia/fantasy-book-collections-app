import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
// import { moviesCollection } from "./data/firebase";
import db from "./data/firebase";
// import loadSampleData from "./data/load-sample-data";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// loadSampleData();

// var ratingOrder = db.collection("moves");

// db.collection("movies")
//   .orderBy("rating")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       return doc.rating, " => ", doc.data();
//       //   console.log(doc.rating, " => ", doc.data());
//     });
//   });

// export default ratingOrder;

//   moviesCollection.orderBy("rating", "desc").limit(3);

// it("should where and order by with limit", () => {
//     var citiesRef = db.collection("cities");
//     // [START filter_and_order]
//     citiesRef.where("population", ">", 100000).orderBy("population").limit(2)
//     // [END filter_and_order]
// });
