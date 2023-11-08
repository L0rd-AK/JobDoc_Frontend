import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toogle, setToogle] = useState(false);
    const [name, setName] = useState(true);
    const [pic, setPic] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const upDateProfile=(Name,URL)=>{
        setLoading(true);
        setName(Name);setPic(URL);
        updateProfile(auth.currentUser, {
            displayName: Name, photoURL: URL
          }).then(() => {
            console.log(user);
            // ...
          }).catch((error) => {
            // An error occurred
            console.log(error);
            // ...
          });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        const logedEmail={email:user.email}
        setLoading(true);
        axios.post('http://localhost:5000/logout',logedEmail,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
        })
        
        return signOut(auth);
    }

  
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
                if(currentUser){
                    const logedEmail={email:currentUser.email}
                    axios.post('http://localhost:5000/jwt',logedEmail,{withCredentials:true})
                    .then(res=>{
                        console.log(res.data);
                        if(res.data.success){
                            //navigate here
                        }
                    })
                }
        });
        return () => {
            unSubscribe();
        }
    }, [])
    // console.log(user);
    // console.log(toogle);
    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        upDateProfile,
        name,
        pic,
        toogle,
        setToogle
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.element,
};
export default AuthProvider;