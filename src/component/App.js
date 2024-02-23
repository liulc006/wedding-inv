import React from "react";
import Placeholder from "./Placeholder";
import StadiumImage from "./StadiumImage";
import CountdownTimer from "./CountdownTimer";

const App = () => {
    return (
        <>
            {/* Title */}
            <div style={{width:'100vw'}}>
                <h1 className="title" id="title">Celine & Luca</h1>
            </div>

            {/* First Section - 2 Stadium + 1 Message */}
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', minWidth:'90vw',maxWidth:'99vw', aspectRatio:'6/3'}}>
                {/* First Photo */}
                <div style={{height:'100%', flex:'3', display:'flex', justifyContent:'center'}}>
                    <StadiumImage url='../../public/img-wedding-invitation/photo-img/intro1.png'/>
                </div>

                {/* Second Phot */}
                <div style={{height:'100%', flex:'3', display:'flex', justifyContent:'center'}}>
                    <StadiumImage url='../../public/img-wedding-invitation/photo-img/intro2.png'/>
                </div>

                {/* Message */}
                <div style={{height:'100%', flex:'4',display:'flex', flexDirection:'column', flexWrap:'nowrap', justifyContent:'center', alignItems:'center', maxHeight:'330px'}}>
                    <hr className="horizontal-line" style={{width:'25%'}}/>
                    <hr className="horizontal-line" style={{width:'60%'}}/>
                    <p className="text-english">WE ARE GETTING MARRIED</p>
                    <p className="text-chinese" style={{margin:'1rem'}}>我们要结婚啦</p>
                    <p className="text-english"><span>October 5th 2024 | </span><span className="text-chinese">2024年10月5号</span></p>
                    <hr className="horizontal-line" style={{width:'60%'}}/>
                    <hr className="horizontal-line" style={{width:'25%'}}/>
                </div>
            </div>

            {/* Second Section */}
            <div style={{marginTop:'5vh'}}>
                <div style={{position:'relative', display:'flex', justifyContent:'center'}}>
                    <h1 className="title" id="title" style={{marginTop:'10%', fontSize:'8vw', position:'absolute', zIndex:'100'}}>Welcome To Our Wedding</h1>
                </div>
                <img src='../../public/img-wedding-invitation/photo-img/KSZ09591.JPG' style={{objectFit:'contain',width:'100vw'}}/>
            </div>

            {/* Third Section: wedding time and location */}
            <div style={{marginTop:'5vh', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <div style={{flex:'1', display:'flex', justifyContent:'center'}}>
                    <img src='../../public/img-wedding-invitation/photo-img/DSC09661.jpg' 
                    style={{objectFit:'contain', width:'80%'}}
                    />
                </div>
                <div style={{flex:'1', display:'flex', justifyContent:'center', flexDirection:'row', width:'100%'}}>
                    <div className='vertical-line'/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'40vw', flexWrap:'nowrap', textWrap:'nowrap'}}>
                        <p className="text-english"><span className="text-chinese">婚礼请柬</span><span> | Wedding Invitation</span></p>
                        <p className="text-english">SAVE THE DATE</p>
                        <p className="text-english"><span>October 5th 2024 | </span><span className="text-chinese">2024年10月5号</span></p>
                        <p className="text-english"><span>3 PM | </span><span className="text-chinese">下午3点</span></p>
                        <img src='../../public/img-wedding-invitation/couple-drawing/rings.png' style={{objectFit:'contain', width:'30%', margin:'1rem'}}/>
                        <p className="text-english">VILLA GUICCIARDINI</p>
                        <p className="text-english">Via Nuova Per Migliana 1,</p>
                        <p className="text-english">Cantagallo, PO 59025 IT</p>
                    </div>
                </div>
            </div>

            {/* Fourth Section: Wedding Invitation Card */}
            <div style={{marginTop:'5vh', display:'flex', justifyContent:'center'}}>
                <div className='invite-card' style={{width:'60vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src='../../public/img-wedding-invitation/invitation-img/invite.png'
                    style={{objectFit:'contain', width:'100%'}}
                    />
                </div>
            </div>

            {/* Fifth Section: Groom */}
            <div style={{marginTop:'5vh', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div style={{flex:'1', display:"flex", alignItems:'end'}}>
                    <img src='../../public/img-wedding-invitation/photo-img/DSC09715.jpg' style={{objectFit:'contain', width:'100%'}}/>
                </div>
                <div style={{flex:'1', display:'flex', justifyContent:'center', flexDirection:'row', height:'100%'}}>
                    <img src='public/img-wedding-invitation/couple-drawing/groom.png' style={{objectFit:'contain', width:'5vw'}}/>
                    <div className='vertical-line'/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'20vw', flexWrap:'nowrap'}}>
                        <p className="text-english"><span className="text-chinese">新郎</span><span> | Groom</span></p>
                        <p className="text-english">LUCA</p>
                        <br/>
                        <br/>
                        <p className="text-english"><span className="text-chinese">父母</span><span> | Parents</span></p>
                        <p className="text-english">刘建伸 & 姚作</p>
                    </div>
                </div>
            </div>

            {/* Sixth Section: Bride */}
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div style={{flex:'1', display:'flex', justifyContent:'center', flexDirection:'row', height:'100%'}}>
                    <img src='public/img-wedding-invitation/couple-drawing/bride.png' style={{objectFit:'contain', width:'10vw'}}/>
                    <div className='vertical-line'/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'20vw', flexWrap:'nowrap'}}>
                        <p className="text-english"><span className="text-chinese">新娘</span><span> | Bride</span></p>
                        <p className="text-english">CELINE</p>
                        <br/>
                        <br/>
                        <p className="text-english"><span className="text-chinese">父母</span><span> | Parents</span></p>
                        <p className="text-english">李賢文 & 廖秀玲</p>
                    </div>
                </div>
                <div style={{flex:'1',display:"flex", alignItems:'start'}}>
                    <img src='../../public/img-wedding-invitation/photo-img/DSC09629.jpg' style={{objectFit:'contain', width:'100%'}}/>
                </div>
            </div>

            {/* Seventh Section: Countdown Timer */}
            <div style={{margin:'5vh 0 5vh 0', display:'flex',justifyContent:'center', alignItems:'center', width:'100vw'}}>
                <CountdownTimer />
            </div>

            {/* Eight Section: Google Maps of the venue */}
            <div style={{marginTop:'1rem', display:'flex', justifyContent:'center', width:'100%'}}>
                <div className='invite-card' style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.9274457831175!2d11.123647375726886!3d43.98154997108838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af04f0ddecf27%3A0xb7af2ff43138041e!2sVilla%20Guicciardini!5e0!3m2!1sen!2sus!4v1708568574734!5m2!1sen!2sus" style={{width:'100%',aspectRatio:'3/2', style:"border:0", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </div>
            </div>


            {/* Ninth Section */}
            <div style={{marginTop:'5vh'}}>
                <img src='../../public/img-wedding-invitation/photo-img/DSC09616.jpg' style={{objectFit:'contain',width:'100vw'}}/>
            </div>

            
            {/* Tenth Section */}
            <div style={{margin:'5vh 0 5vh 0', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <p className="text-english">
                    Thank You!
                </p>
                <p className="text-english">
                    <span className="text-english">See you at the wedding! </span>
                    <span className="text-chinese">婚礼见！</span>
                </p>
            </div>

            {/* Footer */}
            <div style={{margin:'2rem 0 1rem 0',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderTop:'1px solid #AB6874'}}>
                <p className="text-english" style={{fontSize:'1rem', paddingTop:'1rem'}}>Designed by <a href='https://portfolio-byzk.onrender.com/'>Luca</a></p>
                <p className="text-english" style={{fontSize:'1rem'}}>© 2024 Copyright Luca Liu</p>
            </div>

        </>
    );
};

export default App;