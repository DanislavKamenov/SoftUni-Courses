import React from 'react';
import { Link } from 'react-router-dom';
import LogoutLink from './LogoutLink';

const AuthNav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="navbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/draft/start">Start a draft</Link>
                </li>
                <li className="nav-item">
                    <LogoutLink />
                </li>
            </ul>
        </div>
    </nav>
)

export default AuthNav;