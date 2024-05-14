import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportingAreaConversion() {
    const [reportingData, setReportingData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('/data/reportingarea.dat');
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
            }));
            console.log(jsonData);
            setReportingData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    console.log(ReportingAreaConversion)
    };

    useEffect(() => {
    fetchData();
    }, []);

    return (
        <>
            <h2>Reporting Area Data</h2>
            <pre>{JSON.stringify(reportingData, null, 2)}</pre>
        </>
    )
}

export default ReportingAreaConversion