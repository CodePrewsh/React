import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKyRzxihflvBHMiCk4y01Gwa8omETYGoY",
    authDomain: "expense-tracker-56123.firebaseapp.com",
    projectId: "expense-tracker-56123",
    storageBucket: "expense-tracker-56123.appspot.com",
    messagingSenderId: "642224058009",
    appId: "1:642224058009:web:c763ef8d51ae4138c3d208",
    measurementId: "G-9GC3YJYZ9V"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
