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
            <div style={{marginTop:'2rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center ', maxWidth:'90vw', border:"3px solid var(--dark-pink", borderRadius:'10px'}}>
                <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center', color:'var(--dark-pink)'}}>Shuttle From Hotel To Villa </p>
                <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center'}}>- There will be a shuttle going from the hotel to the villa for wedding guests</p>
                <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center'}}>- Shuttle leaves at <span style={{color:'var(--dark-pink)'}}>2:30 PM</span>, make sure to be ready beforehand</p>
                <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center'}}>- In the case that you won't be able to take the shuttle, you can take a taxi. The villa is around 30 minutes ride from the hotel around 10 miles away.</p>                
                <p className="text-english-tab" style={{maxWidth:'100vw', textWrap:'wrap', textAlign:'center'}}>- For lunch, you can explore some options around the hotel:</p>
                <ul>
                    <li className="text-english-tab">Umai Ramen Prato</li>
                    <li className="text-english-tab">Il Sipario</li>
                    <li className="text-english-tab">MiAmi Ristorante Pizzeria</li>
                    <li className="text-english-tab">Bar Pasticceria Saida Prato</li>
                    <li className="text-english-tab">Etc...</li>
                </ul>
            </div>
        </div>
    );
};

export default Saturday;