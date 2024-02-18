import React from "react";

const Placeholder = (props) => {
    return(
        <div style={{backgroundColor:'green', borderRadius:'50%', width:'5rem', aspectRatio:'1', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <p style={{textWrap:'nowrap'}}>{props.text || 'Placeholder'}</p>
        </div>
    );
};

export default Placeholder;