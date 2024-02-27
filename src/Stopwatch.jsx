import React, { useState, useEffect, useRef } from "react";
function Stopwatch() {
  //state variables for :
  // to see if our stopwatch is running ; how much time has elapsed/passed
  const [isRunning, setIsRunning] = useState(false); //initial value of is running is set to a bool(false)
  const [elapsedTime, setElapsedTime] = useState(0);
  //ref  for: interval ; current /start time
  const intervalIdRef = useRef(null); //current value set to null
  const startTimeRef = useRef(0); //start time =0ms
  //useEffect for when our component mounts and isRunning changes ,some code will be performed.
  useEffect(() => {
    //if isRunning is true,we need  to create an interval to move time forward
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        //after every 10 ms , we will set our elapsed time to be a new state
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10); //after every 10 ms , we will perform some code
    }
    //when we unmount our component, we want it to stop running;cleanup code
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);
  //a function to start our stopwatch
  function start() {
    setIsRunning(true); //whwn we click , we want this program to be running
    startTimeRef.current = Date.now() - elapsedTime; //elap. is set to zero initially
  }
  //a function to reset our watch
  function resetTime() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  //a function to stop our watch
  function stop() {
    setIsRunning(false);
  }

  //a function to format time
  function formatTime() {
    //our time is in ms , we have to convert it into minutes,seconds and hours
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //formula to convert ms to hours
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor(elapsedTime / (1000 % 60));
    let milliseconds = Math.floor((elapsedTime % 1000) / 60);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <>
      <>
        <div className="stopwatch">
          {/* display time calling formatTime function  */}
          <div className="display">{formatTime()}</div>
          <div className="controls">
            <button onClick={start} className="btn btn-start">
              Start
            </button>
            <button onClick={resetTime} className=" btn btn-reset">
              Reset
            </button>
            <button onClick={stop} className="btn btn-stop">
              Stop
            </button>
          </div>
        </div>
      </>
    </>
  );
}
export default Stopwatch;
