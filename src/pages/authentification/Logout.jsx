import React from 'react';
import {useCookies} from "react-cookie";

const Logout = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["accessToken"])
    return (
        removeCookie("accessToken")
    );
};

export default Logout;