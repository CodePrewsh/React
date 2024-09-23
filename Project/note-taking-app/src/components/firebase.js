import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAllUKEU4i5T2LAJg8VwHtBLg2g2sL7_-0",
  authDomain: "notes-b6c27.firebaseapp.com",
  projectId: "notes-b6c27",
  storageBucket: "notes-b6c27.appspot.com",
  messagingSenderId: "643621562940",
  appId: "1:643621562940:web:bc81151c3cea7f02497139",
  measurementId: "G-BY06822G2L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };