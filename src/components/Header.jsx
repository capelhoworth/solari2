import React, { useState, useEffect } from "react";
import "./Header.css";

function Header({ date }) {
  // Retrieve the initial countdown time from localStorage or default to 20 minutes in seconds
  const getInitialTimeLeft = () => {
    const savedTime = localStorage.getItem('timeLeft');
    if (savedTime) {
      const savedTimestamp = localStorage.getItem('timestamp');
      const elapsed = Math.floor((Date.now() - savedTimestamp) / 1000);
      return Math.max(savedTime - elapsed, 0);
    }
    return 20 * 60;
  };

  // Initialize state for the countdown timer
  const [timeLeft, setTimeLeft] = useState(getInitialTimeLeft);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          localStorage.removeItem('timeLeft');
          localStorage.removeItem('timestamp');
          return 0;
        }
        const newTime = prevTime - 1;
        localStorage.setItem('timeLeft', newTime);
        localStorage.setItem('timestamp', Date.now());
        return newTime;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Convert timeLeft to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="header">
      <h1>Poorest Air Quality Right Now</h1>
      <div className="update-info">
        <span>Showing: {date}</span>
        <span>Refresh in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Header;
