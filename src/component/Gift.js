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
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'3rem'}}>
                <p className="text-english">Your presence at our wedding is the greatest gift of all.</p>
                <p className="text-english">However, should you wish to honor us with a gift, a list of gift suggestions.</p>
            </div>
            <div style={{height:'100%',width:'50vw', border:'10px solid var(--dark-pink)', backgroundColor:'var(--dark-pink)', borderRadius:'10px', padding:'1rem',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'
            }}>
                <div style={{margin:'1rem', width:'90%',padding:'1rem', border:'2px solid var(--light-pink)', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} onClick={()=>{handleView(venmo, setVenmo)}}>
                    <p className="text-english">Venmo</p>
                    {venmo ? 
                        <div style={{}}>
                            <img src="../../public/MyVenmoQRCode.png" style={{width:'100%', objectFit:'contain'}}/>
                        </div>
                    : null}
                </div>
                <div style={{margin:'1rem', width:'90%',padding:'1rem', border:'2px solid var(--light-pink)', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} onClick={()=>{handleView(zelle, setZelle)}}>
                    <p className="text-english">Zelle</p>
                    {zelle ? 
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <p className="text-english" style={{textWrap:'balance', textAlign:'center'}}>Phone: 917-929-1661</p>
                            <div style={{}}>
                                <img src="../../public/myZelle.jpg" style={{width:'100%', objectFit:'contain'}}/>
                            </div>
                        </div>
                    : null}
                </div>
                <div style={{margin:'1rem', width:'90%',padding:'1rem', border:'2px solid var(--light-pink)', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} onClick={()=>{handleView(costco, setCostco)}}>
                    <p className="text-english">Costco Gift Card</p>
                    {costco ? 
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <p className="text-english" style={{textWrap:'balance', textAlign:'center'}}>Email: LUCALIU96@GMAIL.COM</p>
                            <p className="text-english">OR</p>
                            <p className="text-english" style={{textWrap:'balance', textAlign:'center'}}>Address: 440 Kent Ave, Apt.4C, Brooklyn, NY 11249</p>
                        </div>
                    : null}
                </div>
            </div>
        </div>
    );
};

export default Gift;