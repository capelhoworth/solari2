import React from "react";
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

    // // logic/mapping to allow for a wrapper around each character that needs flip-board animation
    // const wrapCharacters = (str) => (
    //     str.split('').map((char, index) => (
    //         <div className="tickerWrap" key={index}>
    //             <div className="cover">
    //                 <div className="flipper">
    //                     <div className="tickerTxt">{char}</div>
    //                 </div>
    //             </div>
    //         </div>
    //     ))
    // );

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
                        <div className="solari-row" key={index}>
                            {/* <span className="reporting-area">{wrapCharacters(entry.reportingArea)}</span>
                            <span className="aqi-value">{wrapCharacters(entry.aqiValue)}</span>
                            <span className="aqi-category">{wrapCharacters(entry.aqiCategory)}</span> */}
                            <span className="reporting-area">{entry.reportingArea}</span>
                            <span className="aqi-value">{entry.aqiValue}</span>
                            <span className="aqi-category">{entry.aqiCategory}</span>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default TopTen;