import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import NavButton from '../navbutton'

const Navbar = (props) => (
    <div class={style.navbar}>
        <NavButton text="Map" icon="https://www.dropbox.com/s/pgjnmwzvrjjpm36/map-svgrepo-com.svg?raw=1" link="/map" />
        <NavButton text="Home" icon="https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1" link="/" />
        <NavButton text="Bookmarks" icon="https://www.dropbox.com/s/7yf0fho18o3ofpm/bookmark-svgrepo-com%281%29.svg?raw=1" link="/bookmarks" />
    </div>
);

export default Navbar;
