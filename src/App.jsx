import React, { Fragment } from "react";
import "./css/style.css";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Service from "./components/Service"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="body">
            <Nav/>
            <Logo/>
            <Carousel/>
            <About/>
            <Service/>
            <Portfolio/>
            <Contact/>
        </div>


    );
}

export default App;