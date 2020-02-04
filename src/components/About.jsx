import React, { Fragment, useEffect, useState } from "react";
import Dessin from "../img/dessin.png";


const About = () => {
    const [changer, setChanger] = useState("container text-center pt-4")
    const [changer1, setChanger1] = useState("d-block mx-auto w-25")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            if (window.scrollY > 450) {
                setChanger("container text-center pt-4 animated bounceInLeft slow")
                setChanger1("d-block mx-auto w-25 animated bounceInRight slow")
            } else {
                setChanger("container text-center pt-4")
                setChanger1("d-block mx-auto w-25")
            }
        })
    })
    return (
        <section>
            <div className={changer}>
                <h2 className="titre text-center">About me</h2>
                <hr className="diviseur"></hr>

                <div className="row">
                    <div className="col-2"></div>
                    <p className="col-8 p-4">Je m'appelle Dahri Fatima, originaire du Maroc. J'effectue une formation professionnelle à MolenGeek d'une durée de 6 mois dans laquelle j'ai acquis les compétences nécessaires pour devenir Full Stack Developer.</p>
                    <div className="col-2"></div>
                </div>
            </div>

            <div>
                <img className={changer1} src={Dessin} alt="" />
            </div>
        </section>
    );
}

export default About;