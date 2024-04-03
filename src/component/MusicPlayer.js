import React, {useState, useEffect} from "react";
import useSound from "use-sound";
import music from '../../public/Perfect-EdSheeran.mp3';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [play, {stop}] = useSound(music, { volume: 0.5});

    useEffect(()=> {
        if(playing){
            play();
        } else{
            stop();
        }
    }, [playing]);

    const handlePlay = () => {
        setPlaying(!playing);
    };

    return (
        <button onClick={handlePlay} onScroll={handlePlay}>Boop!</button>
    );
};

export default MusicPlayer;