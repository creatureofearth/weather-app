/* 
	Home page which cotains main logic for calling weather API 
	(https://weatherstack.com/) and displaying information about
	the current and weeks weather.

	For testing purposes, the API call is removed from the code
	to prevent execeeding the monthly limit on calls.

	d's api key:
	http://api.weatherstack.com/current?access_key=30eadd44b9b067b63928a92f36ceae96&query=London
	
	mujeeba's api key:
	http://api.weatherstack.com/current?access_key=d429be32eba4f443a5cd38ceaad625e4&query=London


*/

import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';
import Clock from '../../components/clock';
import WeatherSecondary from '../../components/WeatherSecondary';
import Chip from '../../components/Chip';
import WeekForecast from '../../components/WeekForecast';

const Home = () => {
	// Persistent state for the component (https://www.youtube.com/watch?v=O6P86uwfdR0)
	const [weather, setWeather] = useState({});
	const [error, setError] = useState(false);

	/* 
		Including the API call inside of useEffect hook means component isn't blocked
		by the request - network requests may take some time to respond 
		(https://www.youtube.com/watch?v=0ZJgIjIuY7U)
	*/

	useEffect(() => {
		const weatherPromise = fetch('');	

		
		weatherPromise.then((res) => {
			if (!res.ok) {
				throw new Error("HTTP Error")
			}
			return res.json();
		})
		.then((data) => setWeather(data))
		.catch((err) => setError(true));
	}, []);

	function getStyleClass(weather) {
		const weatherDescriptions = weather?.current?.weather_descriptions;
		if (weatherDescriptions) {
		  if (weatherDescriptions.includes("Clear")) { // if weather description includes "Clear" (e.g. "Clear Sky")
			return style.sunny;
		  } 
		  else if (weatherDescriptions.includes("Cloudy") || weatherDescriptions.includes("Overcast")) { // if weather description includes "Cloudy" or "Overcast"
			return style.cloudy;
		  } 
		  else if (weatherDescriptions.some(desc => desc.includes("Rain"))) { // if weather description includes "Rain" (e.g. "Light Rain")
			return style.rainy;
		  }
		  else if (weatherDescriptions.some(desc => desc.includes("Snow"))) { // if weather description includes "Snow" (e.g. "Light Snow")
			return style.snowy;
		  } 
		  else if (weatherDescriptions.includes("Thunderstorm")) { // if weather description includes "Thunderstorm"
			return style.thunderstorm;
		  }
		}
		return '';
	}

	function getStyleIcon(weather) {
		const weatherDescriptions = weather?.current?.weather_descriptions;
		if (weatherDescriptions) {
			if (weatherDescriptions.includes("Clear")) {
				return '<img src="https://www.svgrepo.com/show/511154/sun.svg" alt="Clear">';
			} 
			else if (weatherDescriptions.includes("Cloudy") || weatherDescriptions.includes("Overcast")) {
				return '<img src="https://www.svgrepo.com/show/509859/cloud.svg" alt="Cloudy">';
		  	} 
		  	else if (weatherDescriptions.some(desc => desc.includes("Rain"))) {
				return '<img src="https://www.svgrepo.com/show/510156/rain.svg" alt="Rain">'
		  	} 
		  else if (weatherDescriptions.some(desc => desc.includes("Snow"))) {
				return '<img src="https://www.svgrepo.com/show/499898/snow.svg" alt="Snow">'
		  	} 
		  else if (weatherDescriptions.includes("Thunderstorm")) {
				return '<img src="https://www.svgrepo.com/show/358312/thunderstorm.svg" alt="Thunderstorm">'
		  	}
		}
		return '';
	}
	  

		return (
			<main>
				<div class={`${style.main} ${getStyleClass(weather)}`}>
					<div class={style.content}>
						
						{/* Primary details about weather */}
						<div class={style.weatherLeft}>
							{/* Tenary operator is used here for conditional rendering (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) */}
							{error ? 

							// Display an error message if state variable `error` is true
							<div class={style.error}>
								Error fetching data
							</div> 

							// Display main content if state variable `error` is false (successful fetch)
							: <>
								<div class={style.muted}>Currently</div>
								<div class={style.textmain}>

									{/* Checks if `weather` variable isn't null before indexing it */}
									{weather && weather['current'] && weather['current']['temperature']}°C
								</div>

								<div class={style.muted}> 
									Feels like {weather && weather['current'] && weather['current']['feelslike']}°
								</div>

								<div class={style.muted}>
									{weather && weather['current'] && weather['current']['weather_descriptions']}
								</div>
							</>
							}
						</div>
						<div class={style.weatherRight}>
							<img class={style.icon} src={getStyleIcon(weather)}></img>
							<Chip text={<Clock />} />
						</div>
						
					</div>
				</div >	

			<div class={style.secondary}>
				<WeatherSecondary title="UVI" 
					data={weather && weather['current'] && weather['current']['uv_index']}  // adds current uv index
					tagline={ //comments on uv index based on Global Solar UV Index (https://www.epa.gov/sunsafety/uv-index-scale-0)
						weather && weather['current'] && weather['current']['uv_index'] >= 11 ? "Extreme" :
						weather && weather['current'] && weather['current']['uv_index'] >= 8 ? "Very High" :
						weather && weather['current'] && weather['current']['uv_index'] >= 6 ? "High" :
						"Low"
					  }
					icon="https://www.dropbox.com/s/1mw0k0cphwomu8k/uv-index-filled-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Wind" 
					data={weather && weather['current'] && weather['current']['wind_speed'] + " " + weather['current']['wind_dir']}  // adds wind speed in km/h and direction together
					tagline={ //comment wind descriptions if wind speed is greater than a certain num, based on Beaufort scale (https://en.wikipedia.org/wiki/Beaufort_scale)
						weather && weather['current'] &&
						weather['current']['wind_speed'] > 0 ? 
						  (weather['current']['wind_speed'] <= 5 ? "Light breeze" :
						  weather['current']['wind_speed'] <= 29 ? "Moderate wind" :
						  "Strong wind") :
						"-" } 
					icon="https://www.dropbox.com/s/ba8u2fvpirqnqgw/wind-03-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Visibility" 
					data={weather && weather['current'] && weather['current']['visibility'] + " km"}
					tagline={weather && weather['current'] && weather['current']['visibility'] > 5 ? "Clear" : "Poor Visibility"} //ternary operator to see if visibility is greater than 5km
					icon="https://www.dropbox.com/s/vzn863txa01fe3u/visibility-svgrepo-com.svg?raw=1" />
			</div>

			<div class={style.forecast}>
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
				<WeekForecast />
			</div>
		</main>
	);
};


export default Home;
