import React from 'react';
import {Outlet} from "react-router";
import CustomNavLink from "../CustomNavLink";
import layoutCss from "./layout.css";
import '../../styles/reset.css'

const LayoutLogged = (props) => {
    const logout = () => {
        if (props.token) props.removeToken("accessToken")
    }

    return (
        <div style={layoutCss.container}>
            <header style={layoutCss.header}>
                <nav style={layoutCss.nav}>
                    <CustomNavLink to={'/'}>Home</CustomNavLink>
                    <button style={layoutCss.logout} onClick={logout}>Logout</button>
                </nav>

            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutLogged;