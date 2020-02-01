import React, { Fragment } from "react";
import "./css/style.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import About from "./components/About";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <Carousel/>
        </Fragment>
    );
}

export default App;