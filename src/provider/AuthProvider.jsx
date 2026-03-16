import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const userLogout = () => {
        signOut(auth);
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
        
    // }, []);

    const authData = {
        user,
        setUser,
        createUser,
        userLogin,
        userLogout,
    }
    console.log(user)
    return (
        <AuthContext value={authData} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;