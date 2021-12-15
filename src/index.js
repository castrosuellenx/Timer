import React, {useState, useEffect} from 'react';

import Timer from './components/Timer';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [customInterval, setCustomInterval] = useState();
  const [runningTime, setRunningTime] = useState(false);
  const [quitWasClicked, setQuitWasClicked] = useState(false);

  const onPlay = () => {
    if (quitWasClicked === true) {
      onReset();
    }

    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000),
    );
    setRunningTime(true);
  };

  const onPause = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
    setRunningTime(false);
  };

  const changeTime = () => {
    setSeconds(prevState => {
      if (prevState + 1 == 60) {
        setMinutes(prevState => {
          if (prevState + 1 == 60) {
            setHours(hours + 1);

            return 0;
          }

          return prevState + 1;
        });

        return 0;
      }

      return prevState + 1;
    });
  };

  const onQuit = () => {
    onPause();
    setQuitWasClicked(true);
    setRunningTime(false);
  };

  const onReset = () => {
    setQuitWasClicked(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <>
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        runningTime={runningTime}
        onPlay={onPlay}
        onPause={onPause}
        onQuit={onQuit}
        onReset={onReset}
        quitWasClicked={quitWasClicked}
      />
    </>
  );
}
