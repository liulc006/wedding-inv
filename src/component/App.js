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
            <div style={{border:'1px red dashed',display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', minWidth:'80vw',maxWidth:'99vw', aspectRatio:'4.5/2'}}>
                {/* First Photo */}
                <div style={{height:'100%'}}>
                    {/* TODO Stadium 1 */}
                    <StadiumImage/>
                </div>

                {/* Second Phot */}
                <div>
                    {/* TODO Stadium 2 */}
                    <Placeholder text='Image 2'/>

                </div>

                {/* Message */}
                <div>
                    {/*TODO Message */}
                    <Placeholder text='Text 1'/>
                </div>
            </div>

        </>
    );
};

export default App;