import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)

    // google signup

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = ()=>{

        setLoading(true)
       
        return signInWithPopup(auth,googleProvider)
    }


    // create user

    const createUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // user signIn

    const signIn=(email,pass)=>{

      return signInWithEmailAndPassword(auth,email,pass)
    }

    // update user

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // logout

    const logOut = ()=>{
        return signOut(auth)
    }



    // oAuth change
    
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

          setUser(currentUser)
          setLoading(false)
          });

          return()=>{
              unsubscribe()
          }
    }, [])

    

    const authInfo = {
        user,
        signInWithGoogle,
        createUser,
        signIn,
        isLoading,
        updateUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;