// App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/Register";
import Profile from "./components/Profile";
import NoteList from "./components/NoteList";
import { ToastContainer } from "react-toastify";
import { auth, db } from "./components/firebase"; // Make sure db is exported from your firebase.js
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        console.log("User state changed:", user); // Debugging line

        // Save user information to Firestore
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          email: user.email,
          displayName: user.displayName || "", // Add other fields if necessary
          lastLogin: new Date() // You can add a timestamp for the last login
        }, { merge: true });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={user ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/notes" element={user ? <NoteList /> : <Navigate to="/login" />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
