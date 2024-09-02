import React from "react";

const Saturday = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'5rem'}}>
            <h1 className="title-text-english-tab">Wedding Day At Villa Guicciardini</h1>
            <p className="text-english-tab">Join In Us At Our Wedding</p>
            <p className="text-english-tab">At</p>
            <a href="https://maps.app.goo.gl/Ahw3sCXbrR6uMVNE7" className="text-english-tab">Villa Guicciardini</a>
            <p className="text-english-tab">3:00 PM</p>
            <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center'}}>Via Nuova per Migliana, 1, 59025 Cantagallo PO, Italy</p>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.9274457831148!2d11.1236473761942!3d43.981549971088434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af04f0ddecf27%3A0xb7af2ff43138041e!2sVilla%20Guicciardini!5e0!3m2!1sen!2sus!4v1723129893127!5m2!1sen!2sus"
                    style={{width:"600", height:"450", style:"border:0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}>    
                </iframe>
            </div>
        </div>
    );
};

export default Saturday;