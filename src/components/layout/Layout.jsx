import React from 'react';
import {Outlet} from "react-router";
import CustomNavLink from "../CustomNavLink";
import layoutCss from "./layout.css";
import config from "./config";
import '../../styles/reset.css'

const Layout = () => {
    return (
        <div style={layoutCss.container}>
            <header style={layoutCss.header}>
                <nav style={layoutCss.nav}>
                    {config.link.map((link, key) => {
                        return (<CustomNavLink key={key} to={link.to}>{link.text}</CustomNavLink>)
                    })}
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;