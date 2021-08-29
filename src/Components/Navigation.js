import React from 'react';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav id="navbar__">
            <ul className="navbar__1">
                <li className="navbar__li">Documentation</li>
                <li className="navbar__li">API</li>
            </ul>
            <ul className="navbar__2">
                <li className="navbar__li2"><button className="navbar__btn">Register</button></li>
                <li className="navbar__li2">Login</li>
            </ul>
        </nav>
    );
}

export default Navigation;