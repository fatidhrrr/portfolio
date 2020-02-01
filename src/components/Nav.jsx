import React, { Fragment } from "react";
import Logo from "../img/logo.png";

const Nav = () => {
    return (
        <Fragment>

            <div className="row">
                <div className="col-2">
                    <img className="logo" src={Logo} alt="" />
                </div>

                <ul className="liens col-10 nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active disabled" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Nav;