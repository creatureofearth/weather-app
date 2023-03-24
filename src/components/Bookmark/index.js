import { h } from 'preact';
import style from './style.css';
import Button from '../Button';
import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks'

const Bookmark = (props) => {
    const [bookmarkKey, setbookmarkKey] = useState('');

    useEffect(() => {
        setbookmarkKey(props.bookmarkKey)
    }, [])

    const removeBookmark = (e) => {
        e.stopImmediatePropagation();
        sessionStorage.removeItem(bookmarkKey);
    }

    return (
        <Link href={props.link}>
            <div class={style.container}>
                {props.key}
                <div class={style.info}>
                    <div>From <span class={style.title}>{props.from}</span></div>
                    <div>To <span class={style.title}>{props.to}</span></div>
                </div>
                <div class={style.actions}>
                    <button onClick={removeBookmark}>
                        <img class={style.icon} src="https://www.dropbox.com/s/k24joiwmi4sro8i/bin-svgrepo-com.svg?raw=1"/>Delete
                    </button>
                </div>
            </div>
        </Link>
    )
};

export default Bookmark;
