import React, { useState, useRef } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [message, setMessage] = useState('Let the countdown begin!');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      return;
    }

    setMessage("You're doing great!");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        // reset the timer
        resetTimer();

        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setMessage('Keep it up!');
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setMessage('Ready to go another round?');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className='app'>
      <h1>Pomodoro</h1>
      <h2>{message}</h2>

      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className='buttons'>
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
