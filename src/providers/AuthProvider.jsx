import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  //Email, Password login register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  } 

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  } 

  const logOut = () => {
    return signOut(auth);
  }

  //Google login
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    })

    return () =>{
      unsubscribe();
    }
  }, [])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSingIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;