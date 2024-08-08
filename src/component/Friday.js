import React from "react";

const Friday = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'5rem'}}>
            <h1 className="title-text-english">Dinner At Ristorante Le Fontanelle</h1>
            <p className="text-english">Join In Us For Dinner</p>
            <p className="text-english">At</p>
            <a href="https://maps.app.goo.gl/MJAe27zr3p83GLcw9" className="text-english">Ristorante Le Fontanelle</a>
            <p className="text-english">7:30 PM</p>
            <p className="text-english">Via Traversa Il Crocifisso, 7, 59100 Prato PO, Italy</p>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11510.120008160968!2d11.060605864730835!3d43.844842318623925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5f495ea48281%3A0xa61f94d67e25f636!2sRistorante%20Le%20Fontanelle!5e0!3m2!1sen!2sus!4v1723065872192!5m2!1sen!2sus" 
                    style={{width:"600", height:"450", style:"border:0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}>    
                </iframe>
            </div>
        </div>
    );
};

export default Friday;