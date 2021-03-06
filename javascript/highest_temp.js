var temperature = [
    { district: "tvm", temp: 25 },
    { district: "kollam", temp: 27 },
    { district: "kottayam", temp: 24 },
    { district: "ekm", temp: 27 },
    { district: "tsr", temp: 25 },
    { district: "pkd", temp: 30 },
    { district: "tvm", temp: 27 },
    { district: "kollam", temp: 25 },
    { district: "kottayam", temp: 28 },
    { district: "ekm", temp: 29 },
    { district: "tsr", temp: 30 },
    { district: "pkd", temp: 31 },
]
var weather = {};
for (let data of temperature) {
    let district = data["district"];
    let temp = data["temp"];
    if (!(district in weather)) {
        weather[district] = temp;
    }
    else {
        let old_Temp = weather[district];
        if (old_Temp < temp) {
            weather[district] = temp;
        }
        else {
            weather[district] = old_Temp;
        }
    }
}
//console.log(weather);

//sort weather according to temprature in decending order
function sort(data) {
    return Object.entries(data).sort((dist1, dist2) => dist2[1] - dist1[1]);
}
//console.log(sort(weather));

var sortd = temperature.sort((dist1, dist2) => dist2.temp - dist1.temp);
//console.log(sortd);

console.log(temperature["temp"]);



