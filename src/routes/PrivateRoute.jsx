import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useCookies} from "react-cookie";

const PrivateRoute = (props) => {
    const isLogged = (cookie) => {
        return !!cookie;
    }

    return (
        isLogged(props.token) ? <Outlet/> : <Navigate to='/sign-in'/>
    )
};


export default PrivateRoute;