import axios from "axios";
import { useEffect, useState } from "react";


const options = {
  method: 'GET',
  url: 'https://geo-services-by-mvpc-com.p.rapidapi.com/airports',
  params: {language: 'en', countrycode: 'US'},
  headers: {
    'x-rapidapi-key': '6a59ef7b7bmsh4694d3ed233c793p1a25f0jsn57f6003aeac4',
    'x-rapidapi-host': 'geo-services-by-mvpc-com.p.rapidapi.com'
  }
};
const AirportChart = () => {
  const [ChartData, setChartData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      
      })
      .catch(function (error) {
        console.error(error);
   
      });
  }, []);
  return ("hello"
  )
}

export default AirportChart;
