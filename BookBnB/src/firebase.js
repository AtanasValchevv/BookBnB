// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr_fYcW5L4vprK74iHmairSa3opDv4-o4",
  authDomain: "bookbnb-afcdf.firebaseapp.com",
  databaseURL: "https://bookbnb-afcdf-default-rtdb.firebaseio.com",
  projectId: "bookbnb-afcdf",
  storageBucket: "bookbnb-afcdf.appspot.com",
  messagingSenderId: "817630724052",
  appId: "1:817630724052:web:6b2090e53ffe92f25ce041",
  measurementId: "G-8YE4HRM3SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, app, storage}