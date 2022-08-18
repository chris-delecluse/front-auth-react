import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomNavLink = (props) => {
    const linkMatch = useMatch(props.to)

    const style = {
        textTransform: 'uppercase',
        color: linkMatch ? '#487de8' : 'white',
        transition: linkMatch ? '.5s ease' : '.5 ease'
    }

    return (
        <Link to={props.to}
              onClick={props.onclick}
              style={style}
        >
            {props.children}
        </Link>
    );
}

export default CustomNavLink;