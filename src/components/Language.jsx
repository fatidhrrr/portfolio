import React, { Fragment, useState, useEffect } from "react";
const Language = () => {
    const [progress1, setProgress1] = useState("progress-bar progress-bar-striped barCouleur")
    const [progress2, setProgress2] = useState("progress-bar progress-bar-striped barCouleur")
    const [progress3, setProgress3] = useState("progress-bar progress-bar-striped barCouleur")
    const [progress4, setProgress4] = useState("progress-bar progress-bar-striped barCouleur")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            if (window.scrollY > 1139) {
                setProgress1("progress-bar progress-bar-striped barCouleur animated fadeInLeft")
                setProgress2("progress-bar progress-bar-striped barCouleur animated fadeInLeft")
                setProgress3("progress-bar progress-bar-striped barCouleur animated fadeInLeft")
                setProgress4("progress-bar progress-bar-striped barCouleur animated fadeInLeft")
            } else {
                setProgress1("progress-bar progress-bar-striped barCouleur")
                setProgress2("progress-bar progress-bar-striped barCouleur")
                setProgress3("progress-bar progress-bar-striped barCouleur")
                setProgress4("progress-bar progress-bar-striped barCouleur")
            }
        })
    })
    return (
        <Fragment>
            <h2 className="titre text-center">Skill</h2>
            <hr className="diviseur"></hr>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <p className="mt-3">HTML / CSS</p>
                    <div className="progress mt-4">
                        <div className={progress1} role="progressbar" style={{ width: '90%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <p className="mt-3">JAVASCRIPT / REACT</p>
                    <div className="progress mt-4">
                        <div className={progress2} role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                    <p className="mt-3">LARAVEL / PHP</p>
                    <div className="progress mt-4">
                        <div className={progress3} role="progressbar" style={{ width: '10%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">10%</div>
                    </div>
                    <p className="mt-3">PHOTOSHOP / ILLUSTRATOR</p>
                    <div className="progress mt-4">
                        <div className={progress4} role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                </div>

                <div className="col-3"></div>
            </div>
        </Fragment>
    );
}


export default Language;