import React, { Fragment } from "react";

const Nav = () => {
    return (
        <nav>
            <ul className="liens row w-100 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 text-dark" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;