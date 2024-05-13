import React from "react";
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
                startDate: line[0],
                endDate: line[1],
                startTime: line[2] || '',
                timeZone: line[3],
                forecast: line[4],
                letterY: line[5],
                letterN: line[6],
                region: line[7],
                state: line[8] || '',
                lat: line[9],
                long: line[10],
                pollutant: line[11],
                indexNumber: line[12],
                rating: line[13],
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