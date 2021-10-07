import React, { useState } from "react";
import "./App.css";

// CUSTOM COMPONENTS
import NewTimerModal from "./Components/NewTimerModal/NewTimerModal";
import TimerCard from "./Components/TimerCard/TimerCard";

function App() {
  const [timers, setTimers] = useState([]);

  // ADDS NEW TIMER TO ARR
  const addNewTimer = (obj) =>{
    setTimers(prev =>{
      return [...prev, obj]
    })
  }

  // REMOVES TIMER FROM ARR
  const removeTimerFromArr = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="app">
      <NewTimerModal addNewTimer={addNewTimer} timers={timers}/>
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
    </div>
  );
};

export default App;