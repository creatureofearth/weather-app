import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const NavButton = ( props ) => (
    <Link class={ style.button } activeClassName={ style.active } href={ props.link }>
        <div class={ style.iconbg }>
            <img class={ style.icon } src={ props.icon }></img>
        </div>
        <div class={ style.label }>
            { props.text }
        </div>
    </Link>
);

export default NavButton;