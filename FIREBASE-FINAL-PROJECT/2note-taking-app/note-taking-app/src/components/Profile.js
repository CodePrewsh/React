import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Extract user details from Firebase Auth user object
        const { email, displayName, photoURL } = user;
        setUserDetails({
          email,
          firstName: displayName.split(' ')[0], // Assuming the displayName is in "First Last" format
          lastName: displayName.split(' ')[1], // Assuming the displayName is in "First Last" format
          photo: photoURL
        });
        setLoading(false); // Update loading state once user details are set
      } else {
        console.log("User is not logged in");
        setLoading(false); // Update loading state in case user is not logged in
      }
    });

    return () => unsubscribe(); // Clean up listener to prevent memory leaks
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login"; // Redirect after logout
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="body-background">
      <div className="container-custom">
        {loading ? (
          <p>Loading...</p>
        ) : userDetails ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {userDetails.photo && (
                <img
                  src={userDetails.photo}
                  alt="Profile"
                  style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                />
              )}
            </div>
            <h2 className="heading">Welcome {userDetails.firstName}</h2>
            <div>
              <p>Email: {userDetails.email}</p>
              <p>First Name: {userDetails.firstName}</p>
              {userDetails.lastName && <p>Last Name: {userDetails.lastName}</p>}
            </div>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
