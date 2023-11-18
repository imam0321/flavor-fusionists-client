import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

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
  
  const updateUser = ( name, photo)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,  { displayName: name, photoURL : photo })  
  } 

  //Google login
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  //GitHub login
  const githubSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
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
    updateUser,
    signIn,
    logOut,
    googleSingIn,
    githubSingIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;