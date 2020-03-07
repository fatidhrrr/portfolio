import React, { Fragment } from "react";

const Service = () => {
    return (
        <Fragment>

            <div id="service">
                <h2 className="titre">Services</h2>
                <hr className="diviseur"></hr>
            </div>

            <div className="row service text-center">
                <div className="col-md-3 col-6">
                    <i className="fas fa-laptop-code fa-5x"></i>
                    <p className="mt-3">Website Creation</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="fas fa-magic fa-5x"></i>
                    <p className="mt-3">Web Designer</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="fas fa-tools fa-5x"></i>
                    <p className="mt-3">Hardware Repair</p>
                </div>
                <div className="col-md-3 col-6">
                    <i className="fas fa-mobile-alt fa-5x"></i>
                    <p className="mt-3">mobile Developement</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Service;