import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { toast } from "react-toastify";

function SignInWithGoogle() {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
      window.location.href = "/profile";
      toast.success("User signed in with Google", {
        position: "top-center",
      });
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
