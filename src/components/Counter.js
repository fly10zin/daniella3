import React, { useState, useEffect, useRef } from "react";
import "./Counter.css"; // Import the CSS for the counter

const Counter = ({ startDate }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const prevTimeRef = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      // Trigger flip animation if the value changes
      if (prevTimeRef.current.days !== days) flipAnimation("days");
      if (prevTimeRef.current.hours !== hours) flipAnimation("hours");
      if (prevTimeRef.current.minutes !== minutes) flipAnimation("minutes");
      if (prevTimeRef.current.seconds !== seconds) flipAnimation("seconds");

      // Update previous time
      prevTimeRef.current = { days, hours, minutes, seconds };
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [startDate]);

  // Function to trigger flip animation
  const flipAnimation = (unit) => {
    const element = document.getElementById(unit);
    if (element) {
      element.classList.add("flip");
      setTimeout(() => element.classList.remove("flip"), 500); // Remove class after animation
    }
  };

  return (
    <div className="timer">
      <p className="timer1">It has been:</p>
      <div className="timer-display">
        <div className="timer-unit">
          <span className="timer-number" id="days">
            {time.days}
          </span>
          <span className="timer-label">days</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number" id="hours">
            {time.hours}
          </span>
          <span className="timer-label">hours</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number" id="minutes">
            {time.minutes}
          </span>
          <span className="timer-label">minutes</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number" id="seconds">
            {time.seconds}
          </span>
          <span className="timer-label">seconds</span>
        </div>
      </div>
      <p className="timer2">since I last made you smile. 🙁</p>
    </div>
  );
};

export default Counter;
