import React, { Fragment } from "react";
import Dessin from "../img/dessin.png";


const About = () => {
    return (
        <section>
            <div className="container text-center pt-4">
                <h2 className="titre text-center">About me</h2>
                <hr className="diviseur"></hr>

                <div className="row">
                    <div className="col-2"></div>
                    <p className="col-8 je p-4">Je m'appelle Dahri Fatima, originaire du Maroc. J'effectue une formation professionnelle à MolenGeek d'une durée de 6 mois dans laquelle j'ai acquis les compétences nécessaires pour devenir Full Stack Developer.</p>
                    <div className="col-2"></div>
                    <img className="d-block mx-auto w-25" src={Dessin} alt="" />
                </div>

            </div>
        </section>
    );
}

export default About;