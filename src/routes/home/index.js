/* 
	Home page which cotains main logic for calling weather API 
	(https://weatherstack.com/) and displaying information about
	the current and weeks weather.

	For testing purposes, the API call is removed from the code
	to prevent execeeding the monthly limit on calls.

	d's api key:
	http://api.weatherstack.com/current?access_key=30eadd44b9b067b63928a92f36ceae96&query=London
	
	mujeeba's api key:
	http://api.weatherstack.com/current?access_key=f8e9137245822ce24c9541817f569811&query=London
*/

import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';
import Clock from '../../components/clock';
import WeatherSecondary from '../../components/WeatherSecondary';
import Chip from '../../components/Chip';

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
		const weatherPromise = fetch('http://api.weatherstack.com/current?access_key=f8e9137245822ce24c9541817f569811&query=London&hourly=1');	

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
			<div class={style.main}>
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
								{/* 12°C */}
							</div>

							<div class={style.muted}> 
								Feels like {weather && weather['current'] && weather['current']['feelslike']}°
							</div>

							<div class={style.muted}>
								{weather && weather['current'] && weather['current']['weather_descriptions']}
								{/* Overcast */}
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
					data={weather && weather['current'] && weather['current']['uv_index']} 
					tagline="Normal" 
					icon="https://www.dropbox.com/s/1mw0k0cphwomu8k/uv-index-filled-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Wind" 
					data={weather && weather['current'] && weather['current']['wind_speed'] + " " + weather['current']['wind_dir']}  
					tagline="-" 
					icon="https://www.dropbox.com/s/ba8u2fvpirqnqgw/wind-03-svgrepo-com.svg?raw=1" />
				<WeatherSecondary title="Visibility" 
					data={weather && weather['current'] && weather['current']['visibility'] + " km"}
					tagline="It's clear"
					icon="https://www.dropbox.com/s/vzn863txa01fe3u/visibility-svgrepo-com.svg?raw=1" />
			</div>
		</main>
	);
};



export default Home;
