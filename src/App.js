import { useState } from "react";
import "./App.css";

import NewTimerModal from "./Components/NewTimerModal/NewTimerModal";
import TimerCard from "./Components/TimerCard/TimerCard";

export default function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (timer) => setTimers((prev) => [timer, ...prev]);
  const removeTimer = (id) =>
    setTimers((prev) => prev.filter((t) => t.id !== id));

  const hasTimers = timers.length > 0;

  return (
    <div className="app">
      <NewTimerModal onAdd={addTimer} compact={hasTimers} />
      {hasTimers && (
        <main className="timers">
          {timers.map((t) => (
            <TimerCard
              key={t.id}
              id={t.id}
              title={t.title}
              duration={t.duration}
              onDone={removeTimer}
            />
          ))}
        </main>
      )}
    </div>
  );
}
