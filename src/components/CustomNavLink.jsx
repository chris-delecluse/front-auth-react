import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomNavLink = ({children, to, ...props}) => {
    const linkMatch = useMatch(to)

    const style = {
        textTransform: 'uppercase',
        color: linkMatch ? '#487de8' : 'white',
        transition : linkMatch ? '.5s ease' : '.5 ease'
    }

    return (
        <Link to={to}
              {...props}
              style={style}
        >
            {children}
        </Link>
    );
}

export default CustomNavLink;