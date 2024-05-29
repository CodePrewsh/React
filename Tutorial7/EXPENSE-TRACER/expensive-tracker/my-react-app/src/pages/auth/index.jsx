import { auth, provider } from "../../config/firebase-config";
import {signInWithPopup } from "firebase/auth";
export const Auth = ()  => {
const signInWithGoogle = async () => {
    const results = (signInWithPopup, auth, provider);
console.log(results);
};
    return (
    <div className="login-page" >
        <p>sign In With Google to continue</p>
        <button className="login-With-google-btn" onClick={signInWithGoogle}>
         {" "}   
        Sign In With Google</button>
    </div>
    );
};
