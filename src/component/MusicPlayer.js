import React, {useState} from "react";
import music from '../../public/Perfect-EdSheeran.mp3';

const MusicPlayer = () => {
    const [open, setOpen] = useState(false)
    const handlePlay = () => {
        new Audio(music).play()
        setOpen(true)
    };

    return (
        <>
        <div style={{
            position:'fixed',
            width:'50vw',
            height:'100vh',
            top:'0',
            left:(open ? "-100%" : "0"),
            backgroundColor: 'var(--dark-pink)',
            opacity:'0.7',
            zIndex:'900',
            transition: 'ease-in 2s'
        }}>
        </div>
        <div style={{
            position:'fixed',
            width:'50vw',
            height:'100vh',
            top:'0',
            right:(open ? "-100%" : "0"),
            backgroundColor:'var(--dark-pink)',
            borderLeft:'solid 5px var(--dark-pink)',
            opacity:'0.7',
            zIndex:'900',
            transition: 'ease-in 2s'
        }}>
        </div>
            <img 
                src="../../public/img-wedding-invitation/invitation-img/sigil.png"
                style={{
                    position:'fixed',
                    zIndex:'1000',
                    width:'16vh',
                    height:'16vh',
                    top:'calc(50% - 8vh)',
                    right:(open ? '-100%':'calc(50% - 8vh)'),
                    objectFit:'cover',
                    border:'solid 5px var(--dark-pink)',
                    borderRadius:'100%',                    
                }}
                id='music-button'
                onClick={handlePlay} 
            />
    </>
    );
};

export default MusicPlayer;