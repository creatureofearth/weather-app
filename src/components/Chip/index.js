import { h } from 'preact';
import style from './style.css';

const Navbar = (props) => (
    <div class={style.chip}>
        {props.text}
    </div>
);

export default Navbar;
