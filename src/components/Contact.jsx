import React, { Fragment } from "react";

const Contact = () => {
    return (
        <Fragment>
            <h2 className="titre text-center">Contact</h2>
            <hr className="diviseur"></hr>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-md-10 text-center">
                    <form>
                        <div className="row col-md-12 text-center">
                            <div className="row contact">
                                <div className="row mb-5 mt-5">
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="col-12">
                                        <input className="col-12 mt-4 form-control" type="text" placeholder="Email address"></input>
                                    </div>
                                    <div className="col-12 message">
                                        <textarea className="col-12 mt-4 mb-4" type="text" placeholder="Message"></textarea>
                                    </div>

                                    <div className="mx-auto">
                                        <button className="btn-envoyer">COMING SOON</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-1"></div>
            </div>
        </Fragment>
    );
}

export default Contact;