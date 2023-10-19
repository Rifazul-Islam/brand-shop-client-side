import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
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


 const authInfo ={
  user,
  loading,
  createNewUser
 }             

return (
<AuthContext.Provider value={authInfo}>
{children}                                
</AuthContext.Provider>
);
};

export default AuthProviders;