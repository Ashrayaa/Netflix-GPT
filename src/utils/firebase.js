// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATg8aCMpiXoRQ1CwzTybPHYl96vqtH8Og",
  authDomain: "netflixgpt-6d5bc.firebaseapp.com",
  projectId: "netflixgpt-6d5bc",
  storageBucket: "netflixgpt-6d5bc.firebasestorage.app",
  messagingSenderId: "649974967371",
  appId: "1:649974967371:web:9d315aed338e37e27731ce",
  measurementId: "G-5PMQ6ZE249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
