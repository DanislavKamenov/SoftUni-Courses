import React from 'react';
import { Link } from 'react-router-dom';

const UnauthNav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>                
            </ul>
        </div>
    </nav>
)

export default UnauthNav;