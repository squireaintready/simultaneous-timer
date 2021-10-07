import React, { useState, useEffect } from "react";

import "./styles.css";

const Timer = ({
  hoursMinSecs,
  title,
  id,
  removeTimerFromArr,
  resetTimer,
  handleResetTimer,
  isPaused,
}) => {
  const { hours, minutes, seconds } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  // CALLS FUNCTION TO REMOVE TIMER FROM ARR
  const handleRemovingTimer = () => {
    removeTimerFromArr(id);
  };

  // RESET FUNCTION
  const reset = () => {
    setTime([parseInt(hours, 10), parseInt(minutes, 10), parseInt(seconds, 10)]);
  };

  // TICKS by 1 second, every second
  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      handleRemovingTimer();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  // CALLS FUNCTION TO RESET
  useEffect(() => {
    if (resetTimer) {
      handleResetTimer();
      reset();
    }
  });

  // TICK ONLY WHEN isPaused IS FALSE
  useEffect(() => {
    if (!isPaused) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  });

  return (
    <div>
      <p className="timetext">{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default Timer;
