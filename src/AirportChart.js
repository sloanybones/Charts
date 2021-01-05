import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_DATA } from "./HardCodedData"
import MyData from './DataFormat'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Area,
  linearGradient,
  } from "recharts";


const options = {
  method: 'GET',
  url: 'https://geo-services-by-mvpc-com.p.rapidapi.com/airports',
  params: {language: 'en', countrycode: 'US'},
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_AIRPORT_CHART,
    'x-rapidapi-host': 'geo-services-by-mvpc-com.p.rapidapi.com'
  }
};

const MyData = (ReceivedData) => {
  let highAltitudes = (ReceivedData).filter(a => a.altitude > 1000);
}

const AirportChart = () => {
  console.log();
  const [ChartData, setChartData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        ;
      
      })
      .catch(function (error) {
        console.error(error);
   
      });
  }, []);
return (
  <div>
  <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="altitude" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="cityname" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</div>

)
  
}


  
  
  


export default AirportChart;
