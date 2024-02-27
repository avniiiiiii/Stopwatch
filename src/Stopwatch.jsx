import react, { useState, useEffect, useRef } from "react";
function Stopwatch() {
  //state variables for :
  // to see if our stopwatch is running ; how much time has elapsed/passed
  const [isRunning, setIsRunning] = useState(false); //initial value of is running is set to a bool(false)
  const [elapsedTime, setElapsedTime] = useState(0);
  //ref  for: interval ; current /start time
  const intervalIdRef = useRef(null); //current value set to null
  const startTimeRef = useRef(0); //start time =0ms
  //useEffect for when our component mounts and isRunning changes ,some code will be performed.
  useEffect(() => {}, [isRunning]);
  //a function to start our stopwatch
  function start() {}
  //a function to stop our watch
  function stop() {}
  //a function to reset our watch
  function resetTime() {}
  //a function to format time
  function formatTime() {
    return `00:00:00`;
  }
  return (
    <>
      <div className="stopwatch">
        {/* display time calling formatTime function  */}
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start()} className="btn btn-start">
            Start
          </button>
          <button onClick={resetTime()} className=" btn btn-reset">
            Reset
          </button>
          <button onClick={stop()} className="btn btn-stop">
            Stop
          </button>
        </div>
      </div>
    </>
  );
}
export default Stopwatch;
