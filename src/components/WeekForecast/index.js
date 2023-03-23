import { h } from 'preact';
import style from './style.css';

const WeatherSecondary = (props) => (
    <div class={style.container}>
        <div class={style.day}>Mon</div>
        <div class={style.weather}>
            <img class={style.icon} src="https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1" />
            Partially Cloudy
        </div>
        <div>15°C</div>
    </div>
);

export default WeatherSecondary;
