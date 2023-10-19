import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)
  
  if(loading){
   return <div className="my-60  text-center">  <span className="loading loading-spinner loading-lg text-blue-500 "></span> </div>
  }

  if(user){
    return children
  }

  
  return <Navigate to="/login" />

};

export default PrivateRoute;