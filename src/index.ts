import  "./styles/index.css"

const submitBtn = document.getElementById('submit-btn');
const locationField = document.getElementById('location');
const locationHeader = document.getElementById('location-header');
const fahrenheitCheckbox = <HTMLInputElement>document.getElementById('fahrenheit-check');
const temperatureField = document.getElementById('temperature');
const feelsLikeField = document.getElementById('feels_like');
const humidityField = document.getElementById('humidity');
const uvField = document.getElementById('uv');
const windSpeedField = document.getElementById('wind_speed');
const locationInfoField = document.getElementById('location-info');
const gifInfo = document.getElementById('gif-info');
let reloadGifBtn = document.createElement('button');
const gifImg = document.querySelector('img');


let APIdataJSON:any; //holds the weather data
let APIdataJSON2:any; // holds the gif data


function initialFill()
{
    getAPI("bangalore")
}

function startProcess()
{
    console.log("Process started");
    let location:string = (locationField as HTMLInputElement).value;
    resetFields();
    getAPI(location);

}

async function getAPI(location:string)
{
    try{
        let apiWeatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=f21b6dec13a145ae94a61506231903&q=${location}`)
        APIdataJSON = await apiWeatherData.json()
        fillFields(APIdataJSON);
        let gifSearchTerm = APIdataJSON.current.condition['text'] + ' weather'
        let apiGif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O24GqLvTGeS7X6KDPpAAxbiGD1q8JfQN&s=${gifSearchTerm}`)
        APIdataJSON2 = await apiGif.json()
        fillGif(APIdataJSON2);
    }
    catch(err){
        temperatureField!.textContent = "Location not found";
    }
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
    locationHeader!.textContent = data.location.name;
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
    reloadGifBtn.textContent = "↻"
    reloadGifBtn.className = "reload-gif";
    reloadGifBtn.className = "button-75";
    gifInfo?.appendChild(reloadGifBtn);

    reloadGifBtn.addEventListener('click',changeGif)
}

async function changeGif()
{
    let gifSearchTerm = APIdataJSON.current.condition['text'];
    let apiData = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O24GqLvTGeS7X6KDPpAAxbiGD1q8JfQN&s=${gifSearchTerm}`);
    let JSONdata  = await apiData.json();
    gifImg!.src = JSONdata.data.images.original.url;
}

function resetFields()
{

    temperatureField!.textContent = "";
    feelsLikeField!.textContent = "";
    locationInfoField!.textContent = "";
    humidityField!.textContent = "";
    uvField!.textContent = "";
    locationHeader!.textContent = "";
    windSpeedField!.textContent = "";
    gifImg!.src = ""
    reloadGifBtn.remove();
    (locationField as HTMLInputElement).value = "";
}


initialFill();

submitBtn?.addEventListener('click',startProcess);
fahrenheitCheckbox?.addEventListener('change',changeTemp);




