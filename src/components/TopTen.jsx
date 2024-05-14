import React from "react";

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
        <>
            <h2>Top 10 AQI Values Right Now</h2>
            <ul>
                {topTenData.map((entry, index) => (
                    <li key={index}>
                        <strong>Reporting Area:</strong> {entry.reportingArea}, {entry.stateCode} -
                        <strong>Forecast Source:</strong> {entry.forecastSource} -
                        <strong>AQI Value:</strong> {entry.aqiValue} -
                        <strong>AQI Category:</strong> {entry.aqiCategory}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TopTen;