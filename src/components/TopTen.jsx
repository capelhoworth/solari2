import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./SolariBoard.css";

function TopTen({data}) {
    // Today's date being formatted using "MM/DD/YY"
    const today = new Date();
    const formattedToday = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;
    
    // Filter data by today's date
    const todaysData = data.filter(entry => entry.validDate === formattedToday);

    // Sort data by aqiValue highest to lowest
    const sortedData = todaysData.sort((a, b) => b.aqiValue - a.aqiValue);
    
    // Get top 10 aqiValues
    const topTenData = sortedData.slice(0, 10);

    useEffect(() => {
        const flippers = document.querySelectorAll(".flipper");
        const handleAnimationEnd = (event) => {
                event.target.classList.add("animation-ended");
            };
            flippers.forEach((flipper) => {
                flipper.addEventListener("animationend", handleAnimationEnd);
        });
        return () => {
            flippers.forEach((flipper) => {
                flipper.removeEventListener("animationend", handleAnimationEnd);
            });
        };
    }, []);

    // logic/mapping splits string into characters and wraps each with flip animation structure
    const wrapCharacters = (str, rowIndex) => (
        str.split('').map((char, index) => (
            <span className="tickerWrap animating" key={`wrapper-${index}`} style={{ animationDelay: `${rowIndex * 0.5}s` }}>
                <span className="cover">
                    <span className="flipper">
                        <span className="tickerTxt">{char}</span>
                        {/* <span className="tickerTxt inverse hidden-after-animation">{getRandomChar(char)}</span> */}
                    </span>
                </span>
            </span>
        ))
    );

    // function getRandomChar(char) {
    //     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     let randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    //     while (randomChar === char) {
    //       randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    //     }
    //     return randomChar;
    // }

    return(
        <>
            <Header date={formattedToday} />
            <div className="solari-board">
                <div className="solari-header">
                    <h2>Location</h2>
                    <h2>AQI</h2>
                    <h2>Health Level</h2>
                </div>
                    {topTenData.map((entry, index) => (
                        <div className="solari-row" key={`row-${index}`}>
                            <span className="reporting-area">{wrapCharacters(entry.reportingArea)}</span>
                            <span className="aqi-value">{wrapCharacters(entry.aqiValue)}</span>
                            <span className="aqi-category">{wrapCharacters(entry.aqiCategory)}</span>
                            {/* <span className="reporting-area">{entry.reportingArea}</span>
                            <span className="aqi-value">{entry.aqiValue}</span>
                            <span className="aqi-category">{entry.aqiCategory}</span> */}
                        </div>
                    ))}
            </div>
        </>
    );
}

export default TopTen;