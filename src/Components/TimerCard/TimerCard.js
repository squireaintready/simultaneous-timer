import { useEffect, useState } from "react";
import "./styles.css";
import { IconClose, IconReset, IconPlay, IconPause } from "../icons";

const pad = (n) => String(n).padStart(2, "0");

const format = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

export default function TimerCard({ id, title, duration, onDone }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const [running, setRunning] = useState(true);
  // bumped on reset so the timestamp-based interval restarts from the new value
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    // Anchor to a wall-clock target so the countdown stays accurate even if the
    // tab is backgrounded and setInterval is throttled.
    const target = Date.now() + secondsLeft * 1000;
    const tick = () => {
      const left = Math.max(0, Math.ceil((target - Date.now()) / 1000));
      setSecondsLeft(left);
      if (left === 0) onDone(id);
    };
    const handle = setInterval(tick, 250);
    return () => clearInterval(handle);
    // secondsLeft is read only when the interval (re)starts — intentional.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, runKey]);

  const toggle = () => setRunning((r) => !r);

  const reset = () => {
    setSecondsLeft(duration);
    setRunning(true);
    setRunKey((k) => k + 1);
  };

  return (
    <article className="card">
      <p className="card__time" aria-label={`Time remaining ${format(secondsLeft)}`}>
        {format(secondsLeft)}
      </p>
      <hr className="card__divider" />
      <h2 className="card__title">{title}</h2>
      <div className="card__btns">
        <button
          type="button"
          className="iconbtn iconbtn--danger"
          onClick={() => onDone(id)}
          aria-label="Remove timer"
          title="Remove"
        >
          <IconClose />
        </button>
        <button
          type="button"
          className="iconbtn"
          onClick={reset}
          aria-label="Reset timer"
          title="Reset"
        >
          <IconReset />
        </button>
        <button
          type="button"
          className="iconbtn iconbtn--primary"
          onClick={toggle}
          aria-label={running ? "Pause timer" : "Resume timer"}
          title={running ? "Pause" : "Resume"}
        >
          {running ? <IconPause /> : <IconPlay />}
        </button>
      </div>
    </article>
  );
}
