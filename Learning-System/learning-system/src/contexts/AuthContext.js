// src/contexts/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app'; // Ensure firebase is imported

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);
  const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };
  const signOut = () => auth.signOut();

  return (
    <AuthContext.Provider value={{ currentUser, signUp, signIn, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
