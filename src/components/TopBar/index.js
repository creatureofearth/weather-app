import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Navbar = () => (
    <div class={style.topbar}>
        <div class={style.title}>Bookmarks</div>
    </div>
);

export default Navbar;
