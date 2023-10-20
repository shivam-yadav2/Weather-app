const apiKey = "11a151951b13b99285ba752689ba8867";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

const icon = document.querySelector(".weather-icon");

async function getWeather(city){
    const response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main=="Clouds"){
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Humidity"){
        icon.src = "images/humidity.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        icon.src = "images/snow.png";
    }
    else if(data.weather[0].main=="Wind"){
        icon.src = "images/wind.png";
    }
    else if(data.weather[0].main=="Haze"){
        icon.src = "images/haze.png";
    }


}

btn.addEventListener("click",()=>{
    getWeather(search.value);
});
