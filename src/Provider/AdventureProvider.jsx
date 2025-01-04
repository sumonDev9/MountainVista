import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/Firebase_init";

export const AdventureContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AdventureProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
   
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // userlogin
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updateprofile
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    // signOut
    const userSignout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // forgetpasword
    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // google provider
    const logInbyGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //urrent user is by setting an observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        userSignout,
        userLogin,
        updateUserProfile,
        loading,
        forgetPassword,
        logInbyGoogle
    }

    return (
        <AdventureContext.Provider value={authInfo}>
            {children}
        </AdventureContext.Provider>
    );
};

export default AdventureProvider;