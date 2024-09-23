import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Directly set the user details from the auth object
        setUserDetails({
          email: user.email,
          photo: user.photoURL,
          firstName: user.displayName.split(' ')[0], // Assuming the displayName is in "First Last" format
          lastName: user.displayName.split(' ')[1], // Assuming the displayName is in "First Last" format
        });
        console.log(user);
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {userDetails.photo && (
              <img
                src={userDetails.photo}
                width={"40%"}
                style={{ borderRadius: "50%" }}
                alt="Profile"
              />
            )}
          </div>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
