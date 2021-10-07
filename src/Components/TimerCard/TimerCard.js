import React, { useState } from "react";
import "./styles.css";

// CUSTOM COMPONENTS
import Timer from "../Timer/Timer";

// MUI COMPONENTS
import Fab from "@material-ui/core/Fab";
import LoopIcon from "@material-ui/icons/Loop";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const TimerCard = ({ timer, title, id, removeTimerFromArr }) => {
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
        removeTimerFromArr={removeTimerFromArr}
        resetTimer={resetTimer}
        isPaused={isPaused}
        handleResetTimer={handleResetTimer}
      />
      <hr className="cardDivider" />
      <h5 className="cardTitle">{title}</h5>
      <div className="cardBtns">
        <Fab color="default" aria-label="add" onClick={handleResetTimer}>
          <LoopIcon fontSize="small"/>
        </Fab>
        <Fab color="primary" aria-label="edit" onClick={pausePlay}>
          {isPaused ? <PlayArrowIcon fontSize="small"/> : <PauseIcon fontSize="small"/>}
        </Fab>
      </div>
    </div>
  );
};

export default TimerCard;
