import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../src/components/Home/Home';
import Header from '../src/Header';
import Footer from '../src/Footer'

const Routing = ( ) => {
    return ( 
        <BrowserRouter>
            <Header/>
            <Route path="/" component={Home} />
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing;