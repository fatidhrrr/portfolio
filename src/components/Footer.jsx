import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="row text-center">
                    <div className="col-3">
                        <a href=""><i className="reseauxlogo fab fa-facebook-f fa-2x"></i></a>
                        <p className="reseau text-white mt-3">FACEBOOK</p>
                    </div>
                    <div className="col-3">
                        <a href=""><i className="reseauxlogo fab fa-twitter fa-2x"></i></a>
                        <p className="reseau text-white mt-3">TWITTER</p>
                    </div>
                    <div className="col-3">
                        <a href=""><i className="reseauxlogo fab fa-instagram fa-2x"></i></a>
                        <p className="reseau text-white mt-3">INSTAGRAM</p>
                    </div>
                    <div className="col-3">
                        <a href=""><i className="reseauxlogo fab fa-github fa-2x"></i></a>
                        <p className="reseau text-white mt-3">GITHUB</p>
                    </div>
                </div>

                <div className="text-center text-white mt-3">
                    <p>Copyright © 2020. All rights reserved</p>
                </div>
            </footer>
        </Fragment>

    );
}

export default Footer;