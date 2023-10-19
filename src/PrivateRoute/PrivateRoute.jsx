import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)
  
  if(loading){
   return <div>  <h1> Loading ...</h1> </div>
  }

  if(user){
    return children
  }

  
  return <Navigate to="/login" />

};

export default PrivateRoute;