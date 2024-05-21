import React, { useState, useEffect } from "react";
import "./Header.css"

function Header({ date }) {
  // Initialize state for the countdown timer (20 minutes in seconds)
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  // useEffect to handle the countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevTime - 1;
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
