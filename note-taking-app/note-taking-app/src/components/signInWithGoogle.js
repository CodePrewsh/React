import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "./firebase"; // Ensure db is exported from your firebase.js
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

function SignInWithGoogle() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user information to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName || "", 
        lastLogin: new Date() // add a timestamp for the last login
      }, { merge: true });

      console.log("User signed in with Google");
      toast.success("User signed in with Google", {
        position: "top-center",
      });
      window.location.href = "/profile";
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="google-sign-in btn btn-danger">
      Sign in with Google
    </button>
  );
}

export default SignInWithGoogle;
