import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if (user && user.email) {
        return (
            children
        );
    }
    else {
        return (
            <Navigate state={location.pathname} to={"/login"} />
        );
    }
};

export default PrivateRoute;