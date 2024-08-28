import {useEffect, useState} from "react";


function Timer() {
  const [seconds, setSeconds] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('0');
  const [hours, setHours] = useState<string>('0');
  const [isStart, setIsStart] = useState<boolean>(false);

  useEffect(() => {
    if(seconds === '60') {
      setSeconds('0');
      setMinutes(prev => String(Number(prev) + 1))
    }
    if(minutes === '60') {
      setMinutes('0');
      setHours(prev => String(Number(prev) + 1))
    }
  }, [seconds, minutes]);

  const startTimer = () => {
    setIsStart(true);
  };

  const stopTimer = () => {
    setIsStart(false);
  };

  const resetTimer = () => {
    setSeconds('0');
    setMinutes('0');
    setHours('0');
  }

  useEffect(() => {
    let timerId: NodeJS.Timer;
    if(isStart){
      timerId = setInterval(() => {
        setSeconds(prev => String(Number(prev) + 1))
      }, 1000)
    }

    return () => {
      clearInterval(timerId);
    }
  }, [isStart]);
  return (
      <div>
        <div>
          <span>{Number(hours) < 10 ? '0' + hours : hours} : </span>
          <span>{Number(minutes) < 10 ? '0' + minutes : minutes} : </span>
          <span>{Number(seconds) < 10 ? '0' + seconds : seconds}</span>
        </div>
        <div>
          <button onClick={startTimer}>start</button>
          <button onClick={stopTimer}>stop</button>
          <button onClick={resetTimer}>reset</button>
        </div>
      </div>
  );
}

export default Timer;