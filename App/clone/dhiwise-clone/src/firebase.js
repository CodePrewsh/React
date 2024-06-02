// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8FQ6uBj_qRkRQIwTSTRGaF7FvKXcB-U",
  authDomain: "dhwiseclose.firebaseapp.com",
  projectId: "dhwiseclose",
  storageBucket: "dhwiseclose.appspot.com",
  messagingSenderId: "445901393853",
  appId: "1:445901393853:web:7d5d530b32ee1fe3850cd4",
  measurementId: "G-RRSK4XC2BL"
};


// firebase login
// firebase init
// firebase deploy




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;