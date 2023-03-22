import  "./styles/index.css"

const submitBtn = document.getElementById('submit-btn');
const locationField = document.getElementById('location');
const temperatureField = document.getElementById('temperature');
const feelsLikeField = document.getElementById('feels_like');
const humidityField = document.getElementById('humidity');
const uvField = document.getElementById('uv');
const windSpeedField = document.getElementById('wind_speed');

submitBtn?.addEventListener('click',startProcess)

function startProcess()
{
    console.log("Process started");
    let location:string = (locationField as HTMLInputElement).value;
    getAPI(location);
}


function getAPI(location:string)
{
    fetch(`https://api.weatherapi.com/v1/current.json?key=f21b6dec13a145ae94a61506231903&q=${location}`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        fillFields(response)
    })
    
}

function fillFields(data:any)
{
    console.log(data);
    temperatureField!.textContent = data.current.temp_c;
    feelsLikeField!.textContent = "Feels Like: "+ data.current.feelslike_c;
    humidityField!.textContent = "Humidity: "+ data.current.humidity;
    uvField!.textContent = "UV: "+ data.current.uv;
    windSpeedField!.textContent = "Wind Speed: "+ data.current.wind_kph;
}



