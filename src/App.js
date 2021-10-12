import React, { useState } from "react";
import "./App.css";

// CUSTOM COMPONENTS
import NewTimerModal from "./Components/NewTimerModal/NewTimerModal";
import TimerCard from "./Components/TimerCard/TimerCard";

function App() {
  const [timers, setTimers] = useState([]);

  // ADDS NEW TIMER TO ARR
  const addNewTimer = (newTimerObj) => {
    setTimers((prev) => {
      return [newTimerObj, ...prev];
    });
  };

  // REMOVES TIMER FROM ARR
  const removeTimerFromArr = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="app">
      <NewTimerModal addNewTimer={addNewTimer} timers={timers} />
      {timers.length >= 1 ? (
        <div className="container">
          <div className="timers">
            {timers.map((time) => (
              <TimerCard
                key={time.id}
                id={time.id}
                timer={time.timer}
                title={time.title}
                removeTimerFromArr={removeTimerFromArr}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
