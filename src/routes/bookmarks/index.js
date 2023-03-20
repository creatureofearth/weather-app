import { h } from 'preact';
import style from './style.css'
import TopBar from '../../components/TopBar/index.js'

const Bookmarks = () => {
	return (
        <main>
			<div class={style.main}>
				<TopBar />
			</div>
		</main>
	);
};

export default Bookmarks;
