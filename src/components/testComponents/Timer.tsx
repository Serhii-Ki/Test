import styles from './test.module.css';
import {useEffect, useState} from "react";

function Timer() {
  const [count, setCount] = useState<number>(0);
  const [isRun, setIsRun] = useState<boolean>(false);

  useEffect(() => {
    let timerId: number | undefined;

    if(isRun){
      timerId = window.setTimeout(() => {
        setCount(prev => prev + 1);
      }, 1000)
    }

    return () => {clearInterval(timerId)}
  }, [isRun, count]);

  const onClickHandler = () => {
    setIsRun(!isRun);
  }

  return (
      <div className={styles['timer-wrap']}>
        <div className={styles.count}>{count}</div>
        <button className={styles.btn} onClick={onClickHandler}>{isRun ? 'stop' : 'start'}</button>
      </div>

  )
}

export default Timer;