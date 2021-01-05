









const normalizeData = (dataFromApiCall) => {
  let uniqueProvinces = [...new Set(dataFromApiCall.map((d) => d.province))];
  let provinceDataCollector = [];

  uniqueProvinces.forEach(province => {
    let provinceObj = {province, deaths: 0, confirmed: 0 };
    dataFromApiCall.forEach((data)=> {
      if (data.province ==province) {
        provinceObj.deaths += data.deaths;
        provinceObj.confirmed += data.confirmed;
      }
    });
    provinceDataCollector.push(provinceObj)
  });
  return provinceDataCollector;
  
}

// normalizeData(apiData) =>[
//   { province: "Alabama", deaths: 50, confirmed: 1168 },
//   { province: "Utah", deaths: 1, confirmed: 10 },
// ];

let x = normalizeData(apiData)
console.log(x);