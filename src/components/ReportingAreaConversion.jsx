import React, { useEffect, useState } from "react";
import axios from "axios";
import TopTen from "./TopTen";

function ReportingAreaConversion() {
    const [reportingData, setReportingData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://s3-us-west-1.amazonaws.com//files.airnowtech.org/airnow/today/reportingarea.dat');
                const data = response.data;

                // Split data by newline and then by pipe (|)
                const parsedData = data.split('\n').map(line => line.split('|'));

                // Convert parsed data into JSON format
                const jsonData = parsedData.map(line => ({
                    issueDate: line[0],
                    validDate: line[1],
                    validTime: line[2] || '',
                    timeZone: line[3],
                    recordSequence: line[4],
                    dataType: line[5],
                    primary: line[6],
                    reportingArea: line[7],
                    stateCode: line[8] || '',
                    lat: line[9],
                    long: line[10],
                    parameterName: line[11],
                    aqiValue: line[12],
                    aqiCategory: line[13],
                    actionDay: line[14],
                    discussion: line[15] || '',
                    forecastSource: line[16]
                }));
                console.log(jsonData);
                setReportingData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

    
        fetchData();
    }, []);
    console.log(reportingData)
    return (
        <>
            <h2>Worst Air Quality Right Now</h2>
            <TopTen data={reportingData} />
        </>
    )
}

export default ReportingAreaConversion;