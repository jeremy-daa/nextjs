// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "lambda-blog-405220.firebaseapp.com",
  projectId: "lambda-blog-405220",
  storageBucket: "lambda-blog-405220.appspot.com",
  messagingSenderId: "582837389443",
  appId: "1:582837389443:web:5a7f3b5dab1c73ad09f3b6",
  measurementId: "G-3DTFQXN053",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
