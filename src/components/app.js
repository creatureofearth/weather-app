import { h } from 'preact';
import { Router } from 'preact-router';

import Navbar from './navbar';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Map from '../routes/map';
import Bookmarks from '../routes/bookmarks';

const App = () => (
	<div id="app">
		<main>
			<Router>
				<Home path="/" />
				<Map path="/map/" />
				<Bookmarks path="/bookmarks/" />
			</Router>
		</main>
		<Navbar/>
	</div>
);

export default App;
