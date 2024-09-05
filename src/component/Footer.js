import React from "react";

const Footer = () => {
    return(
        <div style={{margin:'2rem 0 1rem 0',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderTop:'1px solid #AB6874'}}>
            <p className="text-english" style={{fontSize:'1rem', paddingTop:'1rem'}}>Designed by <a href='https://portfolio-byzk.onrender.com/'>Luca</a></p>
            <p className="text-english" style={{fontSize:'1rem'}}>© 2024 Copyright Luca Liu</p>
        </div>
    );
};

export default Footer;