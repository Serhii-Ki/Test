import { useEffect, useState, useRef } from "react";

function Timer() {
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Хранит прошедшее время в миллисекундах
  const timerRef = useRef<number | null>(null); // Ref для хранения ID интервала
  const startTimeRef = useRef<number | null>(null); // Ref для хранения начального времени

  const onTimer = (isStart: boolean) => {
    if (isStart) {
      startTimeRef.current = Date.now() - elapsedTime; // Запоминаем время старта и корректируем на прошедшее время
      timerRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - (startTimeRef.current || 0)); // Вычисляем прошедшее время с момента старта
      }, 1000 / 60); // Запускаем с интервалом 60 FPS для плавности
    } else {
      clearInterval(timerRef.current!);
      timerRef.current = null;
    }
    setIsTimerStart(isStart);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current); // Очищаем таймер при размонтировании
    };
  }, []);

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const format = (value: number) => (value < 10 ? `0${value}` : value);

    return `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
  };

  return (
    <div>
      <span>{formatTime(elapsedTime)}</span>
      <div>
        <button onClick={() => onTimer(false)}>stop</button>
        <button onClick={() => onTimer(true)}>start</button>
      </div>
    </div>
  );
}

export default Timer;
