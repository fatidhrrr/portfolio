import React, { Fragment } from "react";

const Contact = () => {
    return (
        <Fragment>
                <h2 className="titre text-center">Contact</h2>
                <hr className="diviseur"></hr>

            <div className="col-md-12 text-center">
                <form>
                    <div className="row col-md-6 col-12 text-center offset-3">
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

                                <div>
                                    <button className="btn-envoyer ml-3">COMING SOON</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Contact;