import { useState, useEffect } from 'react';
import './App.css';
import { $TSFixMe } from './types';
import { SideBar } from './components';
import { Home } from './components';
import { BasicSchoolInformationProvider } from './contexts';
import { useJsonFile } from './hooks';

function App() {
	const [Component, setComponent] = useState<$TSFixMe>(() => () => <Home />);
	// @ts-expect-error
	const [makeCall, { data }] = useJsonFile('basic_school_information.json');

	useEffect(() => {
		(async () => {
			// @ts-expect-error
			await makeCall();
		})();
	}, []);
	return (
		<div className="App">
			<header>
				<h1>Alberta School Explorer</h1>
			</header>
			<div className="main">
				<BasicSchoolInformationProvider value={data}>
					<SideBar setComponent={setComponent} />
					{Component ? (
						<div>
							<Component />
						</div>
					) : null}
				</BasicSchoolInformationProvider>
			</div>
		</div>
	);
}

export default App;
