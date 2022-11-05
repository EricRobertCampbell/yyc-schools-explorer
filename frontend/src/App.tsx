import { useState } from 'react';
import './App.css';
import { $TSFixMe } from './types';
import { SideBar } from './components';
import { Home } from './components';

function App() {
	const [Component, setComponent] = useState<$TSFixMe>(() => () => <Home />);
	return (
		<div className="App">
			<header>
				<h1>Alberta School Explorer</h1>
			</header>
			<div className="main">
				<SideBar setComponent={setComponent} />
				{Component ? (
					<div>
						<Component />
					</div>
				) : null}
			</div>
		</div>
	);
}

export default App;
