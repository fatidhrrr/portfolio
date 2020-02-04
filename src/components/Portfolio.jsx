import React, { Fragment, useState, useEffect } from "react";
import Chef from "../img/chef.png"
import Emporium from "../img/emporium.png"

const Portfolio = () => {
    const [photo, setPhoto] = useState("col-6 d-flex justify-content-center")
    const [photo1, setPhoto1] = useState("col-6 d-flex justify-content-center")

    useEffect(() => {
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1880 ) {
                setPhoto("col-6 d-flex justify-content-center animated swing")
                setPhoto1("col-6 d-flex justify-content-center animated swing")
            } else {
                setPhoto("col-6 d-flex justify-content-center")
                setPhoto1("col-6 d-flex justify-content-center")
            }
        })
    })
    return (
        <Fragment>
            <section>
                <h2 className="titre text-center">Portfolio</h2>
                <hr className="diviseur"></hr>

                <div className="row mt-5">
                    <div className={photo}>
                        <img className="w-75" src={Chef} alt="" />
                    </div>

                    <div className={photo1}>
                        <img className="w-75" src={Emporium} alt="" />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Portfolio;