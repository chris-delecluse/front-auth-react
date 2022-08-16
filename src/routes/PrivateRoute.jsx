import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useCookies} from "react-cookie";

const PrivateRoute = () => {
    let [cookie, setCookie] = useCookies(["accessToken"])
    return (
        (cookie.accessToken) ? <Outlet/> : <Navigate to='/sign-in'/>
    )
};

export default PrivateRoute;