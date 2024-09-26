// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfSN2h1O4Kh7zpo26YrCysjOXl6NDeOo4",
  authDomain: "notetakingapp-aecf3.firebaseapp.com",
  projectId: "notetakingapp-aecf3",
  storageBucket: "notetakingapp-aecf3.appspot.com",
  messagingSenderId: "769287820485",
  appId: "1:769287820485:web:ea713986a34d27efeb8cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, googleProvider, db };