import { h } from 'preact';
import { Router } from 'preact-router';
import styles from '../style/index.css';

import Navbar from './navbar';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Map from '../routes/map';
import Bookmarks from '../routes/bookmarks';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<Map path="/map/" />
			<Bookmarks path="/bookmarks/" />
		</Router>
		<Navbar/>
	</div>
);

export default App;
