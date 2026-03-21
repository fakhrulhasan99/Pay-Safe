import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import app from '../firebase.config';
import { toast } from 'react-toastify';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user)

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogout = () => {
        return signOut(auth);
    }
    const userProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }
    const userEmail = (updatedEmail) => {
        return updateEmail(auth.currentUser, updatedEmail)
    }

    const [balance, setBalance] = useState(10000);

    const [paidBills, setPaidBills] = useState([]);

    const payBill = (bill) => {

        if (paidBills.includes(bill.id)) {
            toast.info("This bill is already paid ❌");
            return;
        }

        if (balance < bill.amount) {
            toast.error("Insufficient balance ❌");
            return;
        }

        setBalance(prev => prev - bill.amount);
        setPaidBills(prev => [...prev, bill.id]);

        toast.success(`Paid ৳${bill.amount} successfully 💸`);

        return true;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authData = {
        signInWithGoogle,
        user,
        setUser,
        createUser,
        userLogin,
        userLogout,
        userProfile,
        userEmail,
        loading,
        balance,
        setBalance,
        paidBills,
        payBill
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;