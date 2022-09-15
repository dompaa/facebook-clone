import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA82tlglbs4rsZuOUXD1GG0uyHhopZtwII",
  authDomain: "facebook-clone-554b9.firebaseapp.com",
  databaseURL: "https://facebook-clone-554b9.firebaseio.com",
  projectId: "facebook-clone-554b9",
  storageBucket: "facebook-clone-554b9.appspot.com",
  messagingSenderId: "63173011965",
  appId: "1:63173011965:web:432520cd836f0e85625194",
  measurementId: "G-ZZD716VRRW"
};

// passin the object above and connect together (front and back-end)
const firebaseApp = firebase.initializeApp(firebaseConfig);
//access to the database
const db = firebaseApp.firestore();
// allow us to do the login in, sign in, etc.
const auth = firebase.auth();
// this will tell firebase we want the google login service
const provider = new firebase.auth.GoogleAuthProvider();

// access stuff from the outside of the file
export { auth, provider };
export default db;