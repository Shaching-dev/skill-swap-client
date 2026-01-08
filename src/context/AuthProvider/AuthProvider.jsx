import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = useCallback(
    (email, password) => createUserWithEmailAndPassword(auth, email, password),
    []
  );

  const signInUserWithEmail = useCallback(
    (email, password) => signInWithEmailAndPassword(auth, email, password),
    []
  );

  const signInUserWithGoogle = useCallback(
    () => signInWithPopup(auth, googleProvider),
    []
  );

  const signOutUser = useCallback(() => signOut(auth), []);

  const updateUserProfile = (profile) => {
    if (!auth.currentUser) {
      return Promise.reject("No authenticated user");
    }
    return updateProfile(auth.currentUser, profile);
  };

  //   current user observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = useMemo(
    () => ({
      user,
      loading,
      registerUser,
      signInUserWithEmail,
      signInUserWithGoogle,
      signOutUser,
      updateUserProfile,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
