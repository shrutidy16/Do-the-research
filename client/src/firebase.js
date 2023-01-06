// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ3yjtlsiaSpI7gPhb-fbj4GXGjXV-Mio",
  authDomain: "do-the-research.firebaseapp.com",
  projectId: "do-the-research",
  storageBucket: "do-the-research.appspot.com",
  messagingSenderId: "617645986937",
  appId: "1:617645986937:web:e191cac019a7aa229bb0a8",
  measurementId: "G-M4C7EX6276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};