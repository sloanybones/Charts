import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://disney-plus.p.rapidapi.com/deleted',
  params: {type: 'Movie', page: '1', days: '10', country: 'us'},
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUR_API_DISNEY_CHART,
    'x-rapidapi-host': 'disney-plus.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});