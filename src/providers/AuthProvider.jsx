import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase-init';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    // console.log('loading: ',loading);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(current)=>{
            if(current){
                setUser(current);
            }
            else{
                setUser(null);
            }
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }
    },[])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logoutUser = ()=>{
        return signOut(auth);
    }
    const authInfo = {
        auth,
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;