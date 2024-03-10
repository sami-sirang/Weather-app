let apiKey="acd4f0d1b91b2d0f55c5987c0f7d9687";

let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input=document.querySelector("#inputBox");
let searchBtn=document.querySelector("#search");

let mainImage=document.querySelector("#main-img");
let content=document.querySelector(".content");
let errorMsg=document.querySelector(".error")

async function checkwheather(city){
let response=await fetch(apiUrl  + city + `&appid=${apiKey}`);
if(response.status==404){
    errorMsg.style.display="block";
    content.style.display="none";

}
else{
    let data=await response.json();
    console.log(data);
    
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    content.style.display="block";
        errorMsg.style.display="none";


    if(data.weather[0].main=="Clouds"){
        mainImage.src="images/clouds.png";
    }
    
    else if(data.weather[0].main=="Clear"){
        mainImage.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        mainImage.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        mainImage.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        mainImage.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clouds"){
        mainImage.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Snow"){
        mainImage.src="images/snow.png";
    }
   
    else if(data.weather[0].main=="Haze"){
        mainImage.src="images/clear.png";
    }

    }


    
}
searchBtn.addEventListener("click",()=>{
    checkwheather(input.value);
})