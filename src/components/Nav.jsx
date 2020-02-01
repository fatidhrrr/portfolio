import React, { Fragment } from "react";

const Nav = () => {
    return (
        <Fragment>

            <header>
                <div className="row">

                    <h1 className="logo col-4 ml5 text-center">
                        <span className="mr-2">DAHRI</span>
                        <i className="fas fa-code fa-2x mr-3"></i>
                        <span>FATIMA</span>
                    </h1>

                    <ul className="liens col-8 nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active disabled text-white" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </header>
        </Fragment>
    );
}

export default Nav;