import { h } from 'preact';
import style from './style.css';

const Home = () => {
	// TODO: API

	return (
		<main>
			<div class={style.main}>
				<div class={style.content}>
					<div class={style.weather}>
						<div class={style.muted}>Currently</div>
						<div class={style.textmain}>23°c</div>
						<div class={style.muted}>Sunny</div>
					</div>
					<div class={style.weather}>
						<img class={style.icon} src="https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1"></img>
					</div>
				</div>
			</div>

			<div>
			{/* TODO: weather detail components */}
			</div>
		</main>
	);
};

export default Home;
