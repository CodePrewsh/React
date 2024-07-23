import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase authentication function
import React, { useState } from "react"; // Import React and useState hook
import { auth } from "./firebase"; // Import Firebase authentication instance
import { toast } from "react-toastify"; // Import toast notifications

function Register() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [fname, setFname] = useState(""); // State for first name input
  const [lname, setLname] = useState(""); // State for last name input

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser; // Get the current user
      console.log(user);
      console.log("User Registered Successfully!!");
      // Display success toast notification
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      // Display error toast notification
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Register;
