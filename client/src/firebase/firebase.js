import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRyzKvjlwuaX7lWtkxfNAmOeLCzr3ksak",
  authDomain: "vivefaux.firebaseapp.com",
  databaseURL: "https://vivefaux.firebaseio.com",
  projectId: "vivefaux",
  storageBucket: "vivefaux.appspot.com",
  messagingSenderId: "1047989295459"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
