import { h } from 'preact';
import style from './style.css';

const WeekForecast = (props) => (
    <div class={style.container}>
        <div class={style.day}>{props.day}</div>
        <div class={style.weather}>
            <img class={style.icon} src="https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1" />
            {props.description}
        </div>
        <div>{props.temp}</div>
    </div>
);

export default WeekForecast;
