import React, { useState } from "react";
import "./styles.css";

// CUSTOM COMPONENTS
import Timer from "../Timer/Timer";

// MUI COMPONENTS
import Fab from "@material-ui/core/Fab";
import LoopIcon from "@material-ui/icons/Loop";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const TimerCard = ({ timer, title, id, removeTimerWhenFinished }) => {
  const [resetTimer, setResetTimer] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // SHOULD RESTART/LOOPS returns BOOL
  const handleResetTimer = () => {
    setResetTimer(!resetTimer);
  };

  // SHOULD PAUSE/PLAYS returns BOOL
  const pausePlay = () => {
    setIsPaused(!isPaused);
  };
  
  return (
    <div className="cardContainer" id={title}>
      <Timer
        hoursMinSecs={timer}
        title={title}
        id={id}
        removeTimerWhenFinished={removeTimerWhenFinished}
        resetTimer={resetTimer}
        isPaused={isPaused}
        handleResetTimer={handleResetTimer}
      />
      <hr className="cardDivider" />
      <h5 className="cardTitle">{title}</h5>
      <div className="cardBtns">
        <Fab color="primary" aria-label="add" onClick={handleResetTimer}>
          <LoopIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" onClick={pausePlay}>
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </Fab>
      </div>
    </div>
  );
};

export default TimerCard;
