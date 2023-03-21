/* 
	Home page which cotains main logic for calling weather API 
	(https://weatherstack.com/) and displaying information about
	the current and weeks weather.

	For testing purposes, the API call is removed from the code
	to prevent execeeding the monthly limit on calls.

	http://api.weatherstack.com/current?access_key=30eadd44b9b067b63928a92f36ceae96&query=London
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

	// PLACEHOLDER WEATHER TEXT FOR TESTING

	// useEffect(() => {
	// 	const weatherPromise = fetch('');	

	// 	weatherPromise.then((res) => {
	// 		if (!res.ok) {
	// 			throw new Error("HTTP Error")
	// 		}
	// 		return res.json();
	// 	})
	// 	.then((data) => setWeather(data))
	// 	.catch((err) => setError(true));
	// }, []);

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
								{weather && weather['current'] && weather['current']['temperature']}12°C
							</div>
							<div class={style.muted}>
								{weather && weather['current'] && weather['current']['weather_descriptions']}
								Overcast
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
				<WeatherSecondary title="UVI" data="5" tagline="Normal" />
				<WeatherSecondary title="Wind" data="4 mph" tagline="-" />
				<WeatherSecondary title="Visibility" data="85%" tagline="It's clear" />
			</div>
		</main>
	);
};



export default Home;
