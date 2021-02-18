

const searchb = document.getElementById('search');

searchb.addEventListener('keypress',(evt)=>{
	if(evt.keyCode ==13 ){
		console.log(searchb.value);
		fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchb.value+'&units=metric&appid=d7d46baaf2bab039e15c2ab0ff9ed376')
.then(weather =>{
	return weather.json();

}).then(displayResults);
	}
	}

);





function displayResults(weather)
{

   console.log(weather);
  let city=document.getElementById('city');
  city.innerText= weather.name;
  let tmp=document.getElementById('temp');
  tmp.innerHTML= weather.main.temp;
  //let ssd=document.getElementById('ss');
  let weat=document.getElementById('weather');
  weat.innerText= weather.weather[0].main;
 

}

