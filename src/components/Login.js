import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase"; // Import Google Auth provider
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isSignUp) {
        // Sign up user
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Log in user
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      const user = userCredential.user;

      // Save or update user information in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName || "",
        lastLogin: new Date()
      }, { merge: true });

      console.log("User processed successfully");
      toast.success(`User ${isSignUp ? "signed up" : "logged in"} successfully`, {
        position: "top-center",
      });
      navigate("/notes");
    } catch (error) {
      console.error("Auth error:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save or update user information in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName || "",
        lastLogin: new Date()
      }, { merge: true });

      console.log("User signed in with Google successfully");
      toast.success("User signed in with Google successfully", {
        position: "top-center",
      });
      navigate("/notes");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isSignUp ? "Sign Up" : "Login"}</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </div>

      <div className="d-grid mt-2">
        <button type="button" className="btn btn-secondary" onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>

      <p className="forgot-password text-right">
        {isSignUp ? "Already registered" : "New user"} <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Login" : "Register Here"}
        </a>
      </p>
    </form>
  );
}

export default Login;
