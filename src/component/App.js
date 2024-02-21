import React from "react";
import Placeholder from "./Placeholder";
import StadiumImage from "./StadiumImage";

const App = () => {
    return (
        <>
            {/* Title */}
            <div>
                <h1 className="title" id="title">Celine & Luca</h1>
            </div>

            {/* First Section - 2 Stadium + 1 Message */}
            <div style={{border:'1px red dashed',display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', minWidth:'90vw',maxWidth:'99vw', aspectRatio:'4.5/2'}}>
                {/* First Photo */}
                <div style={{height:'100%', flex:'2'}}>
                    <StadiumImage url='../../public/img-wedding-invitation/photo-img/intro1.png'/>
                </div>

                {/* Second Phot */}
                <div style={{height:'100%', flex:'2'}}>
                    <StadiumImage url='../../public/img-wedding-invitation/photo-img/intro2.png'/>
                </div>

                {/* Message */}
                <div style={{height:'100%', flex:'3'}}>
                    {/*TODO Message */}
                    <Placeholder text='Text 1'/>
                </div>
            </div>

        </>
    );
};

export default App;