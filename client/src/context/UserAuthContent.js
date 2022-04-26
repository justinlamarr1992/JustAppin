import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,

  // getIdToken,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext({
  user: null,
});
const USER = { name: "Guest", isGuestUser: true };

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    console.log("Email", email);
    console.log("Using the function logIn");
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut(auth) {
    console.log("Using the function logOut");
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  // function getIdToken() {
  //   const test = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const token = await getIdToken(user);
  //     }
  //   });
  //   return test();
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User Signed in");
      console.log("User is: ", currentUser);
      setUser(currentUser);
    });
    return () => {
      console.log("User Signed out");

      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        // getIdToken
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
