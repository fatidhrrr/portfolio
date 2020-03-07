import React, { Fragment } from "react";

const Nav = () => {
    return (
        <nav>
            <ul className="liens row w-100 justify-content-center">
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#service">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#portfolio">Portfolio</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link ml-2 " href="#">Blog</a>
                </li> */}    
                <li className="nav-item">
                    <a className="nav-link ml-2 " href="#contact">Contact</a>
                </li>
            </ul>   
        </nav>
    );
}

export default Nav;