// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKyRzxihflvBHMiCk4y01Gwa8omETYGoY",
  authDomain: "expense-tracker-56123.firebaseapp.com",
  projectId: "expense-tracker-56123",
  storageBucket: "expense-tracker-56123.appspot.com",
  messagingSenderId: "642224058009",
  appId: "1:642224058009:web:c763ef8d51ae4138c3d208",
  measurementId: "G-9GC3YJYZ9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Deploy to Firebase Hosting
// firebase login
// firebase init
// firebase deploy