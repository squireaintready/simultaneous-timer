import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { IconPlus } from "../icons";

const clamp = (value, max) => {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n, 0), max);
};

export default function NewTimerModal({ onAdd, compact }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState("");
  const titleRef = useRef(null);

  const close = () => {
    setOpen(false);
    setError("");
  };

  const reset = () => {
    setTitle("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setError("");
  };

  // Focus the title on open; close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    titleRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    const total = hours * 3600 + minutes * 60 + seconds;
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    if (total <= 0) {
      setError("Please enter a time greater than zero.");
      return;
    }
    onAdd({ id: crypto.randomUUID(), title: title.trim(), duration: total });
    reset();
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`add-btn${compact ? " add-btn--compact" : ""}`}
        onClick={() => setOpen(true)}
      >
        <IconPlus />
        <span>Add timer</span>
      </button>

      {open && (
        <div className="overlay" onMouseDown={close}>
          <div
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-label="New timer"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <form className="dialog__form" onSubmit={submit}>
              <input
                ref={titleRef}
                className="field"
                type="text"
                placeholder="Timer name (e.g. Pasta)"
                value={title}
                maxLength={40}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="time-inputs">
                <label className="time-inputs__group">
                  <span>hrs</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    max="99"
                    value={hours}
                    onChange={(e) => setHours(clamp(e.target.value, 99))}
                  />
                </label>
                <span className="time-inputs__colon">:</span>
                <label className="time-inputs__group">
                  <span>min</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => setMinutes(clamp(e.target.value, 59))}
                  />
                </label>
                <span className="time-inputs__colon">:</span>
                <label className="time-inputs__group">
                  <span>sec</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => setSeconds(clamp(e.target.value, 59))}
                  />
                </label>
              </div>
              {error && <p className="dialog__error">{error}</p>}
              <div className="dialog__actions">
                <button type="button" className="btn btn--ghost" onClick={close}>
                  Cancel
                </button>
                <button type="submit" className="btn btn--primary">
                  Start
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
