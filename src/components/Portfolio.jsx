import React, { Fragment, useState, useEffect } from "react";
import Chef from "../img/chef1.png";
import Emporium from "../img/emporium1.png";

const Portfolio = () => {
    const [photo, setPhoto] = useState("col-6 d-flex justify-content-center")

    useEffect(() => {
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2059 ) {
                setPhoto("col-6 d-flex justify-content-center animated swing")

            } else {
                setPhoto("col-6 d-flex justify-content-center")
        
            }
        })
    })    
    return (
        <Fragment>
            <section id="portfolio">
                <h2 className="titre text-center">Portfolio</h2>
                <hr className="diviseur"></hr>

                <div className="row mt-5 imageBlock">
                    <div className={photo+" imageAnim"}>   
                        <img className="w-100 " src={Chef} alt="" />
                    </div>

                    <div className={photo+" imageAnim"}>
                        <img className="w-100 " src={Emporium} alt="" />
                    </div>
                </div>     
            </section>
        </Fragment>  
    );
}

export default Portfolio;