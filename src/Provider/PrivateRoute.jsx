import { useContext } from "react";
import { AdventureContext } from "./AdventureProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AdventureContext);
    const location = useLocation();
    
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRoute;