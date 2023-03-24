import { h } from 'preact';
import style from './style.css';

const Chip = (props) => (
    <div class={style.chip}>
        {props.text}
    </div>
);

export default Chip;
