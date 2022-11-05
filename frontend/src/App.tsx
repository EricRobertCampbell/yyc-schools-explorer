import { useState } from 'react';
import './App.css';
import { $TSFixMe } from './types';
import { SideBar } from './components';

function App() {
	const [Component, setComponent] = useState<$TSFixMe>(null);
	return (
		<div className="App">
			<header>
				<h1>Alberta School Explorer</h1>
			</header>
			<div className="main">
				<SideBar setComponent={setComponent} />
				{Component ? <Component /> : null}
			</div>
		</div>
	);
}

export default App;
