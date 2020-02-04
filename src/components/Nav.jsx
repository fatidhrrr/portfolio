import React, { Fragment } from "react";

const Nav = () => {
    return (
        <nav>
            <ul className="liens row w-100 justify-content-center">
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Skill</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;