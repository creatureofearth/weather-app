import { h } from 'preact';
import style from './style.css';

const WeekForecast = (props) => (
    <div class={style.container}>
        <div class={style.day}>{props.day}</div>
        <div class={style.weather}>
            <img class={style.icon} src={props.icon} />
            {props.description}
        </div>
        <div>{props.temp}</div>
    </div>
);

export default WeekForecast;
