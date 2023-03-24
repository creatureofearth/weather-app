/* 
	Home page which cotains main logic for calling weather API 
	(https://openweathermap.org/) and displaying information about
	the current and weeks weather.

	For testing purposes, the API call is removed from the code
	to prevent execeeding the monthly limit on calls.

	https://api.openweathermap.org/data/3.0/onecall?lat=51.52&lon=-0.03&exclude=minutely,hourly,alerts&appid=d5cd393c4221bbefd9274fbc5c989b13&units=metric

*/

import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';
import Clock from '../../components/clock';
import WeatherSecondary from '../../components/WeatherSecondary';
import Chip from '../../components/Chip';
import WeekForecast from '../../components/WeekForecast';
import { capitalise, getStyleClass } from '../../helper';

const Home = () => {
	// Persistent state for the component (https://www.youtube.com/watch?v=O6P86uwfdR0)
	const [weather, setWeather] = useState({});
	const [error, setError] = useState(false);
	
	const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

	/* 
		Including the API call inside of useEffect hook means component isn't blocked
		by the request - network requests may take some time to respond 
		(https://www.youtube.com/watch?v=0ZJgIjIuY7U)
	*/

	useEffect(() => {
		const weatherPromise = fetch('https://api.openweathermap.org/data/3.0/onecall?lat=51.52&lon=-0.03&exclude=minutely,hourly,alerts&appid=d5cd393c4221bbefd9274fbc5c989b13&units=metric');	

		weatherPromise.then((res) => {
			if (!res.ok) {
				throw new Error("HTTP Error")
			}
			return res.json();
		})
		.then((data) => setWeather(data))
		.catch((err) => setError(true));
	}, []);

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
								{weather && weather['current'] && Math.floor(weather['current']['temp'])}°C
							</div>

							<div class={style.muted}> 
								Feels like {weather && weather['current'] && Math.floor(weather['current']['feels_like'])}°C
							</div>

							<div class={style.muted}>
								{weather && weather['current'] && capitalise(weather['current']['weather'][0]['description'])}
							</div>
						</>
						}
					</div>
					<div class={style.weatherRight}>
						<img class={style.icon} src="https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1"></img>
						<Chip text={<Clock />} />
					</div>
					
				</div>
			</div >	

			<div class={style.secondary}>
				<WeatherSecondary title="UVI" 
					data={weather && weather['current'] && weather['current']['uvi']}  // adds current uv index
					tagline={ //comments on uv index based on Global Solar UV Index (https://www.epa.gov/sunsafety/uv-index-scale-0)
						weather && weather['current'] && weather['current']['uvi'] >= 11 ? "Extreme" :
						weather && weather['current'] && weather['current']['uvi'] >= 8 ? "Very High" :
						weather && weather['current'] && weather['current']['uvi'] >= 6 ? "High" :
						"Low"
					  }
					icon="https://www.dropbox.com/s/1mw0k0cphwomu8k/uv-index-filled-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Wind" 
					data={weather && weather['current'] && Math.floor(weather['current']['wind_speed']) + " m/s"} // adds wind speed in km/h and direction together
					tagline={ //comment wind descriptions if wind speed is greater than a certain num, based on Beaufort scale (https://en.wikipedia.org/wiki/Beaufort_scale)
						weather && weather['current'] &&
						weather['current']['wind_speed'] > 0 ? 
						  (weather['current']['wind_speed'] <= 5 ? "Light breeze" :
						  weather['current']['wind_speed'] <= 29 ? "Moderate wind" :
						  "Strong wind") :
						"-" } 
					icon="https://www.dropbox.com/s/ba8u2fvpirqnqgw/wind-03-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Visibility" 
					data={weather && weather['current'] && (weather['current']['visibility'] / 1000) + " km"}
					tagline={weather && weather['current'] && weather['current']['visibility'] > 5 ? "Clear" : "Poor Visibility"} //ternary operator to see if visibility is greater than 5km
					icon="https://www.dropbox.com/s/vzn863txa01fe3u/visibility-svgrepo-com.svg?raw=1" />
			</div>

			<div class={style.forecast}>
				{
					weather && weather['daily'] && weather['daily'].map((day, index) => {
						if (index != 0) {
							let dt = new Date(day.dt * 1000);
							return <WeekForecast day={weekdays[dt.getDay()]} temp={Math.floor(day['temp']['max']) + " °C"} description={capitalise(day['weather'][0]['description'])} />
						}
					})
				}
			</div>
		</main>
	);
};


export default Home;
