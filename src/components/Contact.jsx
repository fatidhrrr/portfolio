import React, { Fragment } from "react";

const Contact = () => {
    return (
        <Fragment>
            <h2 id="contact" className="titre text-center">Contact</h2>
            <hr className="diviseur"></hr>   
                                                     
            <div className="container">   
        
                <div className="col-md-12 col-12 text-center">
                    <form>
                        <div className="row col-md-12 col-12 justify-content-center">
                            <div className="row contact ml-2">
                                <div className="row mb-5 mt-5">
                                    <div className="col-md-6 col-12">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>  
                                    <div className="col-md-6 col-12">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <input className="col-md-12 col-12 mt-4 form-control" type="text" placeholder="Email address"></input>
                                    </div>
                                    <div className="col-md-12 col-12 message">
                                        <textarea className="col-md-12 col-12 mt-4 mb-4" type="text" placeholder="Message"></textarea>
                                    </div>

                                    <div className="mx-auto">
                                        <button className="btn-envoyer">COMING SOON</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>     
            <div className="row">
                <div className="col-md-1 col-12"></div>
            </div>
        </Fragment>
    );
}

export default Contact;