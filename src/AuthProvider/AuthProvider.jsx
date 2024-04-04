import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const getRegister = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const getLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const getSingOut = () =>{
        setLoader(true)
        signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> unSubscribe()
    }, [])


    const userId = {
        user,
        loader,
        getLogin,
        getRegister,
        getSingOut
    }

    return (
        <AuthContext.Provider value={userId}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;