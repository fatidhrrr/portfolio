import React, { Fragment } from "react";
import Fleurgauche from "../img/fleur-gauche.png"
import Fleurdroite from "../img/fleur-droite.png"

const Logo = () => {
    return (
        <Fragment>
            <div className="logo text-center">
                {/* <img src={Fleurgauche} alt="" /> */}
                <span className="mr-2">DAHRI</span>
                <i className="fas fa-code fa-2x mr-2"></i>
                <span>FATIMA</span>
                {/* <img src={Fleurdroite} alt="" /> */}
                <p className="fullstack">FULL STACK DEVELOPER</p>
            </div>
        </Fragment>
    );
}


export default Logo;