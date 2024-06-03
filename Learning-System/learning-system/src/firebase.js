// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtCdBIHLra3N8zNlP9RTMi-scy7SMBMk0",
  authDomain: "learning-management-syst-7cf64.firebaseapp.com",
  projectId: "learning-management-syst-7cf64",
  storageBucket: "learning-management-syst-7cf64.appspot.com",
  messagingSenderId: "1002769623836",
  appId: "1:1002769623836:web:7415011a435b35cbf528d9",
  measurementId: "G-BKE2TEKV70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;