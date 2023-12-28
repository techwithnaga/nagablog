// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nagablog-be2b9.firebaseapp.com",
  projectId: "nagablog-be2b9",
  storageBucket: "nagablog-be2b9.appspot.com",
  messagingSenderId: "754413952438",
  appId: "1:754413952438:web:e0bf5aede93fed0337f517",
  measurementId: "G-DZBC6B9ZBZ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
