import  "./styles/index.css"

const submitBtn = document.getElementById('submit-btn');
const locationField = document.getElementById('location');
const fahrenheitCheckbox = <HTMLInputElement>document.getElementById('fahrenheit-check');
const temperatureField = document.getElementById('temperature');
const feelsLikeField = document.getElementById('feels_like');
const humidityField = document.getElementById('humidity');
const uvField = document.getElementById('uv');
const windSpeedField = document.getElementById('wind_speed');
const locationInfoField = document.getElementById('location-info');
const gifImg = document.querySelector('img');

let APIdataJSON:any; //holds the weather data
let APIdataJSON2:any; // holds the gif data
function startProcess()
{
    console.log("Process started");
    let location:string = (locationField as HTMLInputElement).value;
    getAPI(location);
}

async function getAPI(location:string)
{
    let apiWeatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=f21b6dec13a145ae94a61506231903&q=${location}`)
    APIdataJSON = await apiWeatherData.json()
    let gifSearchTerm = APIdataJSON.current.condition['text'] + ' weather'
    let apiGif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O24GqLvTGeS7X6KDPpAAxbiGD1q8JfQN&s=${gifSearchTerm}`)
    APIdataJSON2 = await apiGif.json()
    fillFields(APIdataJSON);
    fillGif(APIdataJSON2) 
}

function fillFields(data:any)
{
    console.log(data);
    if(fahrenheitCheckbox.checked)
    {
        temperatureField!.textContent = data.current.temp_f+"°F";
        feelsLikeField!.textContent = "Feels Like: "+ data.current.feelslike_f+"°F";
    }
    else
    {
        temperatureField!.textContent = data.current.temp_c+"°C";
        feelsLikeField!.textContent = "Feels Like: "+ data.current.feelslike_c+"°C";
    }
    locationInfoField!.textContent = data.location.region+","+data.location.country
    humidityField!.textContent = "Humidity: "+ data.current.humidity;
    uvField!.textContent = "UV: "+ data.current.uv;
    windSpeedField!.textContent = "Wind Speed: "+ data.current.wind_kph+" kph";
}

function changeTemp()
{
    if(temperatureField?.textContent  != undefined)
    {
        let last = (temperatureField?.textContent?.charAt(temperatureField?.textContent.length -1)) 
        if(last == "C")
        {
            temperatureField!.textContent =APIdataJSON.current.temp_f+"°F"
            feelsLikeField!.textContent = "Feels Like: "+ APIdataJSON.current.feelslike_f+"°F";
        }
        else
        {
            temperatureField!.textContent =APIdataJSON.current.temp_c+"°C"
            feelsLikeField!.textContent = "Feels Like: "+ APIdataJSON.current.feelslike_c+"°C";
        }
    }
}

function fillGif(gifData:any)
{
    gifImg!.src = gifData.data.images.original.url
}


submitBtn?.addEventListener('click',startProcess)
fahrenheitCheckbox?.addEventListener('change',changeTemp)



