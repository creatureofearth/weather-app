import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';

const Button = (props) => (
    <Button href={props.link}>
        <div class={props.filled == "true" ? style.buttonFilled : style.button}>
            <img class={style.icon} src={props.icon} />
            {props.text}
        </div>
    </Button>
);

export default Button;
