import React, { Fragment } from "react";

const Service = () => {
    return (
        <Fragment>

            <div>
                <h2 className="titre">Services</h2>
                <hr className="diviseur"></hr>
            </div>

            <div className="row service text-center">
                <div className="col-3">
                    <i class="fas fa-laptop-code fa-5x"></i>
                    <p className="mt-3">Web Developement</p>
                </div>
                <div className="col-3">
                    <i class="fas fa-magic fa-5x"></i>
                    <p className="mt-3">Web Designer</p>
                </div>
                <div className="col-3">
                    <i class="fas fa-tools fa-5x"></i>
                    <p className="mt-3">Hardware Repair</p>
                </div>
                <div className="col-3">
                    <i class="fas fa-mobile-alt fa-5x"></i>
                    <p className="mt-3">mobile Developement</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Service;