import React from "react";
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

    return(
        <div className="solari-board">
            <h2>Top 10 AQI Values Right Now</h2>
                {topTenData.map((entry, index) => (
                    <div className="solari-row" key={index}>
                        <span className="reporting-area">{entry.reportingArea}</span>
                        <span className="aqi-value">{entry.aqiValue}</span>
                        <span className="aqi-category">{entry.aqiCategory}</span>
                    </div>
                ))}
        </div>
    );
}

export default TopTen;