import React, { useEffect, useState } from "react";

function timerCount (date1, date2) {
    const diff = Math.abs(date2-date1);
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const hours = Math.floor(diff / (1000 * 3600)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / (1000)) % 60;
    return [diff, days, hours, minutes, seconds];
};

const CountdownTimer = (props) => {
    const now = new Date();
    const deadline = new Date("2024/10/05 14:00:00 GMT"); // October 5th 2024 3pm
    let interval = '';

    let [input, setInput] = useState({
        total:0,
        days: 0,
        hours:0,
        minutes:0,
        seconds:0,
    })


    useEffect(()=>{
        interval = setInterval(()=> {
            const [totalTemp, dayTemp, hourTemp, minuteTemp, secondTemp] = timerCount(new Date(), deadline);
            setInput({total:totalTemp,days:dayTemp, hours:hourTemp, minutes:minuteTemp, seconds:secondTemp});
        }, 1000); //every seconds does this

        return () => clearInterval(interval);
    }, [input]);


    if(input.total <= 0){ //Expiration Notice
        return (
            <div className='married-box' style={{borderRadius:'20px', width:'50vw', aspectRatio:'10/1', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h1 className="text-english">We Are Married! 19418586272</h1>
            </div>
        );
    } else {
        return (
            <div className='married-box' style={{width:'min-content', borderRadius:'20px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <div className='countdown-box' style={{margin:'0 1vw 0 1vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
                    <p className="text-english">{input.days}</p>
                    <p style={{margin:'0'}}><span className="text-english">Days |</span><span className="text-chinese"> 天</span></p>
                </div>
                <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                    <p className="text-english">:</p>
                </div>
                <div className='countdown-box' style={{margin:'0 1vw 0 1vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
                    <p className="text-english">{input.hours}</p>
                    <p style={{margin:'0'}}><span className="text-english">Hours |</span><span className="text-chinese"> 时</span></p>
                </div>
                <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                    <p className="text-english">:</p>
                </div>
                <div className='countdown-box' style={{margin:'0 1vw 0 1vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
                    <p className="text-english">{input.minutes}</p>
                    <p style={{margin:'0'}}><span className="text-english">Minutes |</span><span className="text-chinese"> 分</span></p>
                </div>
                <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                    <p className="text-english">:</p>
                </div>
                <div className='countdown-box' style={{margin:'0 1vw 0 1vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
                    <p className="text-english">{input.seconds}</p>
                    <p style={{margin:'0'}}><span className="text-english">Seconds |</span><span className="text-chinese"> 秒</span></p>
                </div>
            </div>
        );
    };
};

export default CountdownTimer;