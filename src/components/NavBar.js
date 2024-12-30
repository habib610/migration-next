import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex gap-10 items-center h-14 border-b mb-5">
            <h1>Logo</h1>
            <ul className="flex items-center gap-2">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
