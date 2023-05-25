
import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(()=>{
  //       const url = `https://api.imgbb.com/1/upload?expiration=600&key=3a18e766256285294071cef60adb0051`
  //         fetch(url,{
  //             method:"GET",
  //         })
  //         .then(res=>res.json())
  //         .then(data=>{
  //             console.log(data)
  //         });
  // },[])

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    localStorage.removeItem("my-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    userLogin,
    logOut,
    isLoading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
