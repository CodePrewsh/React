import React from "react";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user information to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName || "",
        lastLogin: new Date(),
        notes: [] // Initialize user's notes as an empty array
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
    <div className="google-signin-container">
      <h3>Sign In with Google</h3>
      <div className="d-grid">
        <button type="button" className="btn btn-secondary" onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
