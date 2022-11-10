import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail} from 'firebase/auth'
import {app} from '../firebase/firebase.init'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [update,setUpdate] = useState(false)

    // google signup

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = ()=>{

        setLoading(true)
       
        return signInWithPopup(auth,googleProvider)
    }


    // create user

    const createUser = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // user signIn

    const signIn=(email,pass)=>{
        setLoading(true)

      return signInWithEmailAndPassword(auth,email,pass)
    }

    // update user

    const updateUser = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    // reset pass
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    // logout

    const logOut = ()=>{
        return signOut(auth)
    }



    // oAuth change
    
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

          setUser(currentUser)
          setUpdate(!update)
          setLoading(false)
          });

          return()=>{
              unsubscribe()
          }
    }, [update])

    

    const authInfo = {
        user,
        signInWithGoogle,
        createUser,
        signIn,
        isLoading,
        setLoading,
        updateUser,
        resetPassword,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;