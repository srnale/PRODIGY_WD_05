const city=document.querySelector("input");

const apiKey= "eb42a61c8511f5abc578223011599529"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

 //https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=eb42a61c8511f5abc578223011599529&units=metric

const name=document.querySelector(".city");
const icon=document.querySelector(".mainweather");
const temp=document.querySelector(".temp");
const feel=document.querySelector(".feeltext");
const pressure=document.querySelector(".pressurev");
const humidity=document.querySelector(".humidityv");
const min=document.querySelector(".minv");
const max=document.querySelector(".maxv");
const windSpeed=document.querySelector(".windv");
const description=document.querySelector(".description");
 
 


async function weatherCheck(){
    if(city.value==""){ alert(" You must enter a city name")}
    else{
const response= await fetch(apiUrl+ city.value+`&appid=${apiKey}`);

if(response.status==404){ 
    document.querySelector(".card").style.display="none";
    document.querySelector(".error").style.display="block";


 }else{
    var data=await response.json();
console.log(data);
if(data.weather[0].main=="Clouds"){
    icon.src="images/clouds.png"

}else if(data.weather[0].main=="Clear"){
    icon.src="images/clear.png"

}else if(data.weather[0].main=="Rain"){
    icon.src="images/rain.png"

}else if(data.weather[0].main=="Drizzle"){
    icon.src="images/drizzle.png"

}else if(data.weather[0].main=="Mist"){
    icon.src="images/mist.png"

}else if(data.weather[0].main=="Snow"){
    icon.src="images/snow.png"

}else if(data.weather[0].main=="Haze"){
    icon.src="images/haze.png"

}
 name.innerText=data.name;

 description.innerText=data.weather[0].description;
 temp.innerText=Math.round(data.main.temp)+' °C';
 feel.innerText=Math.round(data.main.feels_like)+' °C';
 humidity.innerText=data.main.humidity+' %';
 min.innerText=Math.round(data.main.temp_min)+" °C";
 max.innerText=Math.round(data.main.temp_max)+" °C";
 windSpeed.innerText=data.wind.speed+" km/hr";
 document.querySelector(".card").style.display="block";
 document.querySelector(".error").style.display="none";
}
}}

