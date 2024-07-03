// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfSN2h1O4Kh7zpo26YrCysjOXl6NDeOo4",
    authDomain: "notetakingapp-aecf3.firebaseapp.com",
    projectId: "notetakingapp-aecf3",
    storageBucket: "notetakingapp-aecf3.appspot.com",
    messagingSenderId: "769287820485",
    appId: "1:769287820485:web:338e730f7391ade8eb8cac"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
