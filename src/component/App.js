import React from "react";
import Placeholder from "./Placeholder";
import StadiumImage from "./StadiumImage";

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
                <img src='../../public/img-wedding-invitation/photo-img/KSZ09591.jpg' style={{objectFit:'contain',width:'100vw'}}/>
            </div>

            {/* Third Section: wedding time and location */}
            <div style={{marginTop:'5vh', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <div style={{flex:'1', display:'flex', justifyContent:'center'}}>
                    <img src='../../public/img-wedding-invitation/photo-img/DSC09661.jpg' 
                    style={{objectFit:'contain', width:'80%'}}
                    />
                </div>
                <div style={{flex:'1', display:'flex', justifyContent:'center', flexDirection:'row'}}>
                    <div className='vertical-line'/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'min-content'}}>
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

        </>
    );
};

export default App;