import React, {useState} from "react";

const Gift = () => {
    const [venmo, setVenmo] = useState(false);
    const [zelle, setZelle] = useState(false);
    const [costco, setCostco] = useState(false);

    const handleView = (val, set) =>{
        // Handle the open and close of the drop-down list
        set(!val);
    };

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'5rem'}}>
            <h1 className="title-text-english">Wedding Gift</h1>
            <p className="text-english">Your presence at our wedding is the greatest gift of all.</p>
            <p className="text-english">However, should you wish to honour us with a gift, a list of gift suggestions.</p>
            <div style={{height:'100%', border:'10px solid var(--dark-pink)', borderRadius:'10px', padding:'1rem',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'
            }}>
                <div onClick={()=>{handleView(venmo, setVenmo)}}>
                    <p className="text-english">Venmo</p>
                    {venmo ? <p>Open Venmo</p> : null}
                </div>
                <div onClick={()=>{handleView(zelle, setZelle)}}>
                    <p className="text-english">Zelle</p>
                    {zelle ? <p>Open Zelle</p> : null}
                </div>
                <div onClick={()=>{handleView(costco, setCostco)}}>
                    <p className="text-english">Costco Gift Card</p>
                    {costco ? <p>Open Costco</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Gift;