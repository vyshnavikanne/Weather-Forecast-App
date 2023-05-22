const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60fd528f32mshcc527c84f4f77fcp15cb92jsn3cad44296271',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{
	cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {

	console.log(response)
//Cloud_pct.innerHTML=response.cloud_pct
//Feels_like.innerHTML=response.feels_like
Humidity.innerHTML=response.humidity
Max_temp.innerHTML=response.max_temp
Min_temp.innerHTML=response.min_temp
Sunrise.innerHTML=response.sunrise
Sunset.innerHTML=response.sunset
Temp.innerHTML=response.temp
//Wind_degrees.innerHTML=response.Wind_degrees
//Wind_speed.innerHTML=response.Wind_speed
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")