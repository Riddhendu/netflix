// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCI65-heZxYemF0FHOB6Obm9NjJa6jNgc",
  authDomain: "netflixgpt-1b2cb.firebaseapp.com",
  projectId: "netflixgpt-1b2cb",
  storageBucket: "netflixgpt-1b2cb.appspot.com",
  messagingSenderId: "744156243480",
  appId: "1:744156243480:web:04878ce09c26ff7daa056d",
  measurementId: "G-X7CL7RHP41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();