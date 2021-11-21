import React from "react";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-5">
            <div className="container">
                <Link to="/" className="navbar-brand"><i className="fab fa-github p-2"></i>Github Finder</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navCollapse">
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;