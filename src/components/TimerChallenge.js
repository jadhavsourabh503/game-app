import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenge({title, targetTime}){
    // const [timeeExpired, setTimerExpired]=useState(false);
    const [timerRemaining, setTimerRemaining]=useState(targetTime*1000);
    const timer=useRef();
    const dialog=useRef();
    const timerActive=timerRemaining>0 && timerRemaining<targetTime*1000;

    if(timerRemaining<=0){
        clearInterval(timer.current);
        setTimerRemaining(targetTime*1000);
        dialog.current.open();
    }

    function handleStart(){
        timer.current=setInterval(()=>{
            // setTimerExpired(true); 
            setTimerRemaining(preTimeRemaining=>preTimeRemaining-10);
        } , 10);
    }
    
    function handlerStop(){
        dialog.current.open();

        clearInterval(timer.current)

    //     console.log(timer.current)
    //    setTimerstarted(false)
    //     clearTimeout(timer.current);
    }

    return (
        <>
         <ResultModel ref={dialog} targetTime={targetTime} result="lost you!"/>
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second {targetTime>1? 's': 's'}
                </p>

                <p>
                   <button onClick={timerActive ?handlerStop:handleStart}>
                        {timerActive? 'stope': 'Start'} Challenge
                   </button>
                </p>

                <p className={timerActive? 'active':undefined}>
                   {timerActive?' Time is running ..' :'Timer Inactive'}
                </p>
            </section>
            </>);
}