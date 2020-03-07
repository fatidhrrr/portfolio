import React, { Fragment } from "react";
import Bureau from "../img/bureau.png"

const Carousel = () => {
    return (
        <Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid mx-auto" src={Bureau} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid mx-auto" src={Bureau} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid mx-auto" src={Bureau} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </Fragment>
    );
}

export default Carousel;