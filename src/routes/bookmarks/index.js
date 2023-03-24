import { h } from 'preact';
import style from './style.css'
import TopBar from '../../components/TopBar'
import Bookmark from '../../components/Bookmark';

const Bookmarks = () => {
	return (
        <main>
			<TopBar />
			<div class={style.main}>
				{
					Object.keys(sessionStorage).map((id) => {
						let bookmark = JSON.parse(sessionStorage.getItem(id));
						return <Bookmark link="#" to={bookmark.destination} from={bookmark.origin} bookmarkKey={id} />
					})
				}
			</div>
		</main>
	);
};

export default Bookmarks;
