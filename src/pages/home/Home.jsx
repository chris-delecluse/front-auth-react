import React from 'react';
import '../../styles/reset.css';

const Home = () => {
    const xsrfToken = window.localStorage.getItem('xsrfToken')

    return (
        <>
            <h1>welcome to the home page !</h1>
            <p>{xsrfToken}</p>
        </>
    );
};

export default Home;