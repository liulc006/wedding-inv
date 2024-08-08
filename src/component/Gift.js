import React from "react";

const Gift = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'5rem'}}>
            <h1 className="title-text-english">Wedding Gift</h1>
            <div style={{height:'100%', border:'10px solid var(--dark-pink)', borderRadius:'10px', padding:'1rem',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'
            }}>
                <div>
                    <p className="text-english">Venmo</p>
                </div>
                <div>
                    <p className="text-english">Zelle</p>
                </div>
                <div>
                    <p className="text-english">Costco Gift Card</p>
                </div>
            </div>
        </div>
    );
};

export default Gift;