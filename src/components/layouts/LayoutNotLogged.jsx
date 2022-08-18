import React from 'react';
import {Outlet, useNavigate} from "react-router";
import layoutCss from "./layout.css";
import CustomNavLink from "../CustomNavLink";

const LayoutNotLogged = () => {
    return (
        <div style={layoutCss.container}>
            <header style={layoutCss.header}>
                <nav style={layoutCss.nav}>
                    <CustomNavLink to={'/'}>Home</CustomNavLink>
                    <CustomNavLink to={'/sign-in'}>Sign-in</CustomNavLink>
                </nav>

            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutNotLogged;