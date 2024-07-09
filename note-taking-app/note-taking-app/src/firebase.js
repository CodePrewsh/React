import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfSktGtUFBYxDSSwGEbfC0yBs-jBhG-cg",
    authDomain: "crudproject-c580a.firebaseapp.com",
    databaseURL: "https://crudproject-c580a-default-rtdb.firebaseio.com",
    projectId: "crudproject-c580a",
    storageBucket: "crudproject-c580a.appspot.com",
    messagingSenderId: "956492643293",
    appId: "1:956492643293:web:116b48654b4091fdc69434",
    measurementId: "G-WGDRV0ZMW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
