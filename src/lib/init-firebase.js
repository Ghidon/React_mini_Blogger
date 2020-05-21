// import * as firebase from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBj1tqNzrBz-gJf3nHJkzroQ1Cw-MzvuRc",
  authDomain: "testproject-60171.firebaseapp.com",
  databaseURL: "https://testproject-60171.firebaseio.com",
  projectId: "testproject-60171",
  storageBucket: "testproject-60171.appspot.com",
  messagingSenderId: "763533658200",
  appId: "1:763533658200:web:0ae1344b4abba6ffd2a22d",
  measurementId: "G-9RXD2HK8BL",
};

// Initialize Firebase
// const bloggProject = firebase.initializeApp(firebaseConfig);
// export const defaultStorage = bloggProject.storage();
// export const defaultFirestore = bloggProject.firestore();
const defaultDb = firebase.initializeApp(firebaseConfig).firestore();
export default defaultDb;
// const firebaseBlog = {
//   defaultStorage: bloggProject.storage(),
//   defaultFirestore: bloggProject.firestore(),
//   defaultDb: bloggProject.database(),
// };
// export default firebaseBlog;
