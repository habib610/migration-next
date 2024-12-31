import NextLink from "next/link";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex gap-10 items-center h-14 border-b mb-5 px-2">
            <h1 className="text-2xl text-red-600">Client Nav [ReactLink]</h1>
            <ul className="flex items-center gap-2 text-2xl text-gray-600">
                <li>
                    <NextLink href="/">NextHome</NextLink>
                </li>
                <li>
                    <Link to="/auth/profile">Profile</Link>
                </li>{" "}
                <li>
                    <Link to="/auth/dashboard">dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
