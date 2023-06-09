import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loadig} = useContext(AuthContext);
    const location = useLocation()
    if(loadig){
        return <progress className="progress w-56"></progress>
    }
    if(user) {
        return children; 
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRout;