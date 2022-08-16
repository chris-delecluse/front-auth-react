import React from 'react';
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import notFoundCss from "./notFound.css"
import DotFalling from "../../components/DotFalling";
import {useCookies} from "react-cookie";

const NotFound = () => {
    return (
        <article style={notFoundCss.article}>
            <div style={notFoundCss.container}>
                <div style={notFoundCss.text}>Oups
                    <DotFalling/>
                </div>
                <p style={notFoundCss.title}>404</p>

                <Link to='/'>
                    <Button customStyle={notFoundCss.button}
                            value={'Go Home'}
                            type={'button'}/>
                </Link>
            </div>
        </article>
    );
};

export default NotFound;