import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const WeatherSecondary = (props) => (
    <div class={style.container}>
        <div class={style.titleContainer}>
            <img src="#" />
            <div>{props.title}</div>
        </div>
        <div class={style.statContainer}>
            <div>{props.data}</div>
        </div>
        <div class={style.tagContainer}>
            <div>{props.tagline}</div>
        </div>
    </div>
);

export default WeatherSecondary;
