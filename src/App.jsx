import React, { Fragment, useEffect } from "react";
import "./css/style.css";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Language from "./components/Language";
import Service from "./components/Service"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="body">
            <Logo/>
            <Nav/>
            <Carousel/>
            <About/>
            <Language/>
            <Service/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>


    );
}

export default App;