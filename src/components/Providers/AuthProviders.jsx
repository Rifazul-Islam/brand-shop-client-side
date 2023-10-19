import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

 export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {

 const [user,setUser] = useState(null)
 const[loading,setLoading] = useState(true)

 // create A New user
 const createNewUser = (email,password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }


 // user Profile Update 
 const userProfileUpdate = (userInfo ,profile)=>{
  setLoading(true)
  return updateProfile(userInfo,profile)
 }

 // singOut 
 const loginOut = ()=>{
  setLoading(true)
  return signOut(auth)
 }

 // user login
 const userLogin = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
 }

 // On Auth State

 useEffect( ()=>{
  const unSubscribe= onAuthStateChanged(auth, currentUser=>{
    console.log(currentUser);
     setUser(currentUser)
     setLoading(false)
 })
 return ()=>{
   unSubscribe()
 }
 },[])




 const authInfo ={
  user,
  loading,
  createNewUser,
  userLogin,
  userProfileUpdate,
  setUser,
  loginOut
 }             

return (
<AuthContext.Provider value={authInfo}>
{children}                                
</AuthContext.Provider>
);
};

export default AuthProviders;