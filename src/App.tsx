import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const toggleStart = () => {
    setIsStarted(prev => !prev);
  }

  useEffect(() => {
    let timerId: number;
    if (isStarted) {
      timerId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    }
  }, [isStarted])


  return (
    <>
      <div>{count}</div>
      <button onClick={toggleStart}>{isStarted ? 'stop' : 'start'}</button>
    </>
  )
}

export default App
