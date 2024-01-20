
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7To3LW64ZUX03YYp46aSfPEv-x3LC8dA",
  authDomain: "netflixgpt-9d457.firebaseapp.com",
  projectId: "netflixgpt-9d457",
  storageBucket: "netflixgpt-9d457.appspot.com",
  messagingSenderId: "251987669713",
  appId: "1:251987669713:web:58ebb5694430e71d0e8bf0",
  measurementId: "G-6NNK8Y1TZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();