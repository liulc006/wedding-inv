import React, {useState, useEffect} from "react";
import useSound from "use-sound";
import music from '../../public/Perfect-EdSheeran.mp3';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [open, setOpen] = useState(false);
    const [play, {stop}] = useSound(music, { volume: 0.5});

    useEffect(()=> {
        if(playing){
            console.log('playing')
            play();
        } else{
            stop();
        }
    }, [playing]);

    const handlePlay = () => {
        setPlaying(true);
        setOpen(true);
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
            <button 
                style={{
                    position:'fixed',
                    zIndex:'1000',
                    width:'5rem',
                    height:'5rem',
                    top:'calc(50% - 2.5rem)',
                    right:(open ? '-100%':'calc(50% - 2.5rem)'),
                    // transition: 'ease-in 2s'
                }}
                id='music-button'
                onClick={handlePlay} 
            >
                Open
            </button>
        </>
    );
};

export default MusicPlayer;