import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Home from "./Home";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Gift from "./Gift";

const App = () => {
    return (
        <div>
            <>
            {/* Background Audio + Opening Button */}
                <MusicPlayer/>
            </>
            {/* Title */}
            <div style={{width:'100vw'}}>
                <a href="/#" style={{textDecoration:'none'}}>
                    <h1 className="title" id="title">Celine & Luca</h1>
                </a>
            </div>

            {/* Navigator */}
            <div style={{width:'100%vw', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <div>
                    <a className="nav-text-english" href="#/friday" style={{textDecoration:'none'}} on>Friday (4th)</a>
                </div>
                <div>
                    <a className="nav-text-english" href="#/saturday" style={{textDecoration:'none'}}>Saturday (5th)</a>
                </div>
                <div>
                    <a className="nav-text-english" href="#/gift" style={{textDecoration:'none'}}>Gift</a>
                </div>
            </div>

            <div style={{minHeight:'80vh'}}>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/friday" element={ <Friday /> }></Route>
                    <Route path="/saturday" element={ <Saturday /> }></Route>
                    <Route path="/gift" element={ <Gift /> }></Route>
                </Routes>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default App;