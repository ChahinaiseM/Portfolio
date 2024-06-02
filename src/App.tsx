import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navigation from "./components/Navigation";
import About from "./pages/About";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollUp from "./components/ScrollUp";
import Footer from "./components/Footer";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navigation />

                <div className="page">
                    <Routes>
                        <Route path="/" Component={About}></Route>
                        <Route path="/education" Component={Education}></Route>
                        <Route path="/work" Component={Work}></Route>
                        <Route path="/skills" Component={Skills}></Route>
                        <Route path="/portfolio" Component={Portfolio}></Route>
                        <Route
                            path="/portfolio/:id"
                            element={
                                <PortfolioDetail></PortfolioDetail>
                            }></Route>
                        <Route path="/contact" Component={Contact}></Route>
                        <Route Component={NotFound} />
                    </Routes>
                </div>

                <ScrollUp />

                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
