import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import useAxiosPublic from '../Hooks/useAxiosPublic';

const FbProvider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosSecurePublic=useAxiosPublic();



    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }

    const googleLogIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const githubLogIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const loginWithFacebook = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, FbProvider);
        } catch (error) {
            console.error('Facebook login error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo={email:currentUser.email}
                axiosSecurePublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token);
                        setLoading(false);
                    }
                })
            }
            else{
                localStorage.removeItem('token');
                setUser(null);
                setLoading(false);
            }
            
        });

        return ()=>{
            return unsubscribe();
        }
    },[axiosSecurePublic])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleLogIn,
        updateUserProfile,
        loginWithFacebook ,
        githubLogIn


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;