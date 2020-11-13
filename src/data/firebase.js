import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF7voEzYod_CBC-ysyXrBgxGQInvhTCPU",
  authDomain: "fantasy-book-collection.firebaseapp.com",
  databaseURL: "https://fantasy-book-collection.firebaseio.com",
  projectId: "fantasy-book-collection",
  storageBucket: "fantasy-book-collection.appspot.com",
  messagingSenderId: "1040213547901",
  appId: "1:1040213547901:web:9e9e3c99fab7c80c15ca14",
  measurementId: "G-SCPFJYKB0T"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const booksCollection = db.collection("booksCollection");

export default db;
export { booksCollection };
export { db, firebase };
