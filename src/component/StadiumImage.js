import React from "react";

const StadiumImage = (props) => {
    return (
        <div style={{height:'100%'}}>
            <img src={props.url} style={{objectFit:'contain', height:'100%'}}/>
        </div>
    );
};

export default StadiumImage;