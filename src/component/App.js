import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Home from "./Home";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <>
            {/* Background Audio + Opening Button */}
                <MusicPlayer/>
            </>
            {/* Title */}
            <div style={{width:'100vw'}}>
                <h1 className="title" id="title">Celine & Luca</h1>
            </div>

            <div style={{minHeight:'80vh'}}>
                <Home />
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default App;