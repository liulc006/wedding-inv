import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import Home from "./Home";


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
            <div style={{margin:'2rem 0 1rem 0',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderTop:'1px solid #AB6874'}}>
                <p className="text-english" style={{fontSize:'1rem', paddingTop:'1rem'}}>Designed by <a href='https://portfolio-byzk.onrender.com/'>Luca</a></p>
                <p className="text-english" style={{fontSize:'1rem'}}>© 2024 Copyright Luca Liu</p>
            </div>

        </div>
    );
};

export default App;