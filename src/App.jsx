import React, { useEffect, useState } from "react"
import axios from 'axios';
//import ReportingAreaConversion from "./components/ReportingAreaConversion"

function App() {

  console.log('app render');
  const [reportingData, setReportingData] = useState([]);
  //console.log(ReportingAreaConversion)

  const fetchData = async () => {
    console.log('fetchData');
      try {
          const response = await axios.get('data\reportingarea.dat');
          const data = response.data;

          // Split data by newline and then by pipe (|)
          const parsedData = data.split('\n').map(line => line.split('|'));

          // Convert parsed data into JSON format
          const jsonData = parsedData.map(line => ({
              startDate: line[0],
              endDate: line[1],
              startTime: line[2] || '',
              timeZone: line[3],
          }));
          console.log('!');
            console.log(jsonData);
          // // state with JSON data
          //setReportingData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
     // console.log(ReportingAreaConversion)
  };

  useEffect(() => {

    console.log(1);
    fetchData();
  []});

  return (
    <>
      <h1>Howdy! Thee</h1>
      <h2>Reporting Area Data</h2>
      <pre>{JSON.stringify(reportingData, null, 2)}</pre>
      {/* <ReportingAreaConversion /> */}
    </>
  )
}

export default App

