import React, { Fragment } from "react";

const Footer = () => {
    const Click = () => {
        document.documentElement.scrollTop = 0;
    }
    return (
        <Fragment>
            <footer className="footer">
                <div className="row text-center">
                    <div className="col-md-1 col-12"></div>
                    <div className="col-md-2 col-12">
                        <a href="https://www.facebook.com/La.Peutiteuuuh"><i className="reseauxlogo fab fa-facebook-f fa-2x"></i></a>
                        <p className="text-white mt-3">FACEBOOK</p>
                    </div>
                    <div className="col-md-2 col-12">
                        <a href="https://www.instagram.com/fati.dhr/"><i className="reseauxlogo fab fa-instagram fa-2x"></i></a>
                        <p className="text-white mt-3">INSTAGRAM</p>
                    </div>
                    <div className="col-md-2 col-12">
                        <a href=""><i className="reseauxlogo fab fa-twitter fa-2x"></i></a>
                        <p className="text-white mt-3">TWITTER</p>
                    </div>
                    <div className="col-md-2 col-12">
                        <a href="https://github.com/fatidhrrr"><i className="reseauxlogo fab fa-github fa-2x"></i></a>
                        <p className="text-white mt-3">GITHUB</p>
                    </div>
                    <div className="col-md-2 col-12">
                        <a href="https://www.linkedin.com/in/fatima-dahri-742a0219b/"><i className="reseauxlogo fab fa-linkedin-in fa-2x"></i></a>
                        <p className="text-white mt-3">LINKEDIN</p>
                    </div>
                    <div className="col-md-1 col-12"></div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6 col-12 text-center text-white mt-3">
                        <p>Copyright © 2020. Made by Fatima</p>
                    </div>

                    <div className="col-md-6 col-12 backto text-white">
                        <a href=""><i onClick={Click} className="fas fa-angle-double-up text-white mr-3 fa-2x"></i></a>
                        <a href="" className="text-white">BACK TO OP</a>
                        {/* <p>BACK TO OP</p> */}
                    </div>
                </div>
            </footer>
        </Fragment>

    );
}

export default Footer;