import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if(loading){
    return <span className="min-h-screen mx-96 loading loading-spinner text-neutral"></span>
  }
  if(user){
    return children;
  }
  return  <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRoutes;